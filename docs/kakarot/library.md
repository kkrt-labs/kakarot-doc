



# Library

## Internal

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
native_token_address_  
evm_contract_class_hash_ (felt)  
```
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
calldata_len (felt)  
calldata (felt*)  
value (felt)  
gas_limit (felt)  
```
#### Returns
  
```python  
ExecutionContext  
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
### `get_account_registry`
  

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
### `get_blockhash_registry`
  

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