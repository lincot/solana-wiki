# Transferring SOL

## From an account owned by your program such as a PDA

You can't use CPI, because all programs can only spend balances of
accounts they own. So `system_program`'s `Transfer` can only spend balance of
an account if its owner is `system_program`.

### An amount

```rust,ignore
fn transfer(from: &AccountInfo, to: &AccountInfo, lamports: u64) -> Result<()> {
    **from.try_borrow_mut_lamports()? = (from.lamports())
        .checked_sub(lamports)
        .ok_or(ProgramError::InsufficientFunds)?;
    **to.try_borrow_mut_lamports()? += lamports;
    Ok(())
}
```

### All but rent

```rust,ignore
fn transfer_all_but_rent(from: &AccountInfo, to: &AccountInfo) -> Result<()> {
    let rent = Rent::get()?.minimum_balance(from.data_len());
    **to.try_borrow_mut_lamports()? += (from.lamports())
        .checked_sub(rent)
        .ok_or(ProgramError::InsufficientFunds)?;
    **from.try_borrow_mut_lamports()? = rent;
    Ok(())
}
```

### All

```rust,ignore
use anchor_lang::__private::CLOSED_ACCOUNT_DISCRIMINATOR;

fn close(from: &AccountInfo, to: &AccountInfo) -> Result<()> {
    **to.try_borrow_mut_lamports()? += from.lamports();
    **from.try_borrow_mut_lamports()? = 0;
    if let Some(discriminator) = from.try_borrow_mut_data()?.get_mut(..8) {
        discriminator.copy_from_slice(&CLOSED_ACCOUNT_DISCRIMINATOR);
    }
    Ok(())
}
```

## From an account owned by system_program such as a wallet

```rust,ignore
use anchor_lang::solana_program::{program::invoke, system_instruction};

fn transfer<'info>(
    from: &AccountInfo<'info>,
    to: &AccountInfo<'info>,
    lamports: u64,
) -> Result<()> {
    invoke(
        &system_instruction::transfer(&from.key(), &to.key(), lamports),
        &[from.to_account_info(), to.to_account_info()],
    )?;
    Ok(())
}
```
