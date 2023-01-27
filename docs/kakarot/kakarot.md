



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
  

#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
bitwise_ptr (BitwiseBuiltin*)  
```
#### Explicit arguments
  
```python  
value (felt)  
bytecode_len (felt)  
bytecode (felt*)  
calldata_len (felt)  
calldata (felt*)  
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
  

#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
bitwise_ptr (BitwiseBuiltin*)  
```
#### Explicit arguments
  
```python  
address (felt)  
value (felt)  
gas_limit (felt)  
calldata_len (felt)  
calldata (felt*)  
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
  

#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
```
#### Explicit arguments
  
```python  
registry_address_ (felt)  
```
### `set_blockhash_registry`
  

#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
```
#### Explicit arguments
  
```python  
blockhash_registry_address_ (felt)  
```
### `set_native_token`
  

#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
```
#### Explicit arguments
  
```python  
native_token_address_ (felt)  
```
### `deploy`
  

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