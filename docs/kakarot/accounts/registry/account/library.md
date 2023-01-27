



# Library

## Storage

### `starknet_contract_address_`
  

#### Implicit arguments
  
```python  
```
#### Explicit arguments
  
```python  
evm_contract_address (felt)  
```
#### Returns
  
```python  
starknet_contract_address (felt)  
```
### `evm_contract_address_`
  

#### Implicit arguments
  
```python  
```
#### Explicit arguments
  
```python  
starknet_contract_address (felt)  
```
#### Returns
  
```python  
evm_contract_address (felt)  
```
## Internal

### `constructor`
  
This function is used to initialize the registry.
#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
bitwise_ptr (BitwiseBuiltin*)  
```
#### Explicit arguments
  
```python  
kakarot_address (felt): : The address of the Kakarot smart contract.  
```
### `transfer_ownership`
  
Transfer ownership of the registry to a new starknet address
#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
```
#### Explicit arguments
  
```python  
new_owner (felt): The new owner of the account registry  
```
### `set_account_entry`
  
Update or create an entry in the registry.
#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
bitwise_ptr (BitwiseBuiltin*)  
```
#### Explicit arguments
  
```python  
starknet_contract_address (felt): : The StarkNet address of the account.  
evm_contract_address (felt): : The EVM address of the account.  
```
### `get_starknet_contract_address`
  
Get the starknet address of an EVM address.
#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
bitwise_ptr (BitwiseBuiltin*)  
```
#### Explicit arguments
  
```python  
evm_contract_address (felt): : The EVM address.  
```
#### Returns
  
```python  
starknet_contract_address (felt)  
```
### `get_evm_contract_address`
  
Get the EVM address of a starknet address.
#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
bitwise_ptr (BitwiseBuiltin*)  
```
#### Explicit arguments
  
```python  
starknet_contract_address (felt): : The starknet address.  
```
#### Returns
  
```python  
evm_contract_address (felt)  
```