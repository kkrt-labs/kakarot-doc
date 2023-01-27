



# Kakarot

## Constructor

### `constructor`
  

#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
```
#### Explicit arguments
  
```python  
owner (felt)  
native_token_address_ (felt)  
evm_contract_class_hash (felt)  
```
## View

### `execute`
  
Execute EVM bytecode
#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
bitwise_ptr (BitwiseBuiltin*)  
```
#### Explicit arguments
  
```python  
value (felt): The deposited value by the instruction/transaction responsible for this execution  
bytecode_len (felt): The bytecode length  
bytecode (felt*): The bytecode to be executed  
calldata_len (felt): The calldata length  
calldata (felt*): The calldata which can be referenced by the bytecode  
```
#### Returns
  
```python  
stack_accesses_len (felt)  
stack_accesses (felt*)  
stack_len (felt)  
memory_accesses_len (felt)  
memory_accesses (felt*)  
memory_bytes_len (felt)  
gas_used (felt)  
```
### `get_account_registry`
  
Get the account registry used by kakarot
#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
```
#### Returns
  
```python  
address (felt)  
```
### `get_blockhash_registry`
  
Get the blockhash registry used by kakarot
#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
```
#### Returns
  
```python  
address (felt)  
```
## External

### `execute_at_address`
  
execute bytecode of a given contract account
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
value (felt): The deposited value by the instruction/transaction responsible for this execution  
gas_limit (felt): Max gas the transaction can use  
calldata_len (felt): The calldata length  
calldata (felt*): The calldata which contains the entry point and method parameters  
```
#### Returns
  
```python  
stack_accesses_len (felt)  
stack_accesses (felt*)  
stack_len (felt)  
memory_accesses_len (felt)  
memory_accesses (felt*)  
memory_bytes_len (felt)  
evm_contract_address (felt)  
starknet_contract_address (felt)  
return_data_len (felt)  
return_data (felt*)  
gas_used (felt)  
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
  
Deploy a new contract account and execute constructor
#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
bitwise_ptr (BitwiseBuiltin*)  
```
#### Explicit arguments
  
```python  
bytecode_len (felt)  
bytecode (felt*)  
```
#### Returns
  
```python  
evm_contract_address (felt)  
starknet_contract_address (felt)  
```