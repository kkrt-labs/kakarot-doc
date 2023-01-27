



# Library

## Internal

### `constructor`
  
The constructor of the contract
#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
```
#### Explicit arguments
  
```python  
owner (felt): The address of the owner of the contract  
native_token_address_: The ERC20 contract used to emulate ETH  
evm_contract_class_hash_ (felt): The clash hash of the contract account  
```
### `execute_at_address`
  
execute bytecode of a given EVM contract
#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
bitwise_ptr (BitwiseBuiltin*)  
```
#### Explicit arguments
  
```python  
address (felt): The address of the contract whose bytecode will be executed  
calldata_len (felt)  
calldata (felt*): The calldata which contains the entry point and method parameters  
value (felt)  
gas_limit (felt): Max gas the transaction can use  
```
#### Returns
  
```python  
ExecutionContext  
```
### `set_account_registry`
  
Set the account registry used by kakarot
#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
```
#### Explicit arguments
  
```python  
registry_address_ (felt): The address of the new account registry contract  
```
### `get_account_registry`
  
Get the account registry used by kakarot
#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
```
#### Explicit arguments
  
```python  
```
#### Returns
  
```python  
address (felt)  
```
### `set_blockhash_registry`
  
Set the blockhash registry used by kakarot
#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
```
#### Explicit arguments
  
```python  
blockhash_registry_address_ (felt): The address of the new blockhash registry contract  
```
### `get_blockhash_registry`
  
Get the blockhash registry used by kakarot
#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
```
#### Explicit arguments
  
```python  
```
#### Returns
  
```python  
address (felt)  
```
### `set_native_token`
  
Set the native token used by kakarot
#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
```
#### Explicit arguments
  
```python  
native_token_address_ (felt): The address of the native token  
```
### `deploy`
  
deploy contract account
#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
bitwise_ptr (BitwiseBuiltin*)  
```
#### Explicit arguments
  
```python  
bytecode_len (felt): : the deploy bytecode length  
bytecode (felt*): : the deploy bytecode  
```
#### Returns
  
```python  
evm_contract_address (felt)  
starknet_contract_address (felt)  
```