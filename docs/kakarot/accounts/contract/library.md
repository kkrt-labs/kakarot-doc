



# Library

## Event

### `evm_contract_deployed`
  

#### Implicit arguments
  
```python  
```
#### Explicit arguments
  
```python  
evm_contract_address (felt)  
starknet_contract_address (felt)  
```
## Storage

### `bytecode_`
  

#### Implicit arguments
  
```python  
```
#### Explicit arguments
  
```python  
index (felt)  
```
#### Returns
  
```python  
res (felt)  
```
### `bytecode_len_`
  

#### Implicit arguments
  
```python  
```
#### Returns
  
```python  
res (felt)  
```
### `storage_`
  

#### Implicit arguments
  
```python  
```
#### Explicit arguments
  
```python  
key (Uint256)  
```
#### Returns
  
```python  
value (Uint256)  
```
### `is_initialized_`
  

#### Implicit arguments
  
```python  
```
#### Returns
  
```python  
res (felt)  
```
## Internal

### `constructor`
  

#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
bitwise_ptr (BitwiseBuiltin*)  
```
#### Explicit arguments
  
```python  
kakarot_address (felt)  
bytecode_len (felt)  
bytecode (felt*)  
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
evm_contract_address (felt)  
```
#### Returns
  
```python  
starknet_contract_address (felt)  
```
### `write_bytecode`
  

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
### `bytecode_len`
  

#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
bitwise_ptr (BitwiseBuiltin*)  
```
#### Returns
  
```python  
felt  
```
### `bytecode`
  

#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
bitwise_ptr (BitwiseBuiltin*)  
```
#### Returns
  
```python  
bytecode_len (felt)  
bytecode (felt*)  
```
### `storage`
  

#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
bitwise_ptr (BitwiseBuiltin*)  
```
#### Explicit arguments
  
```python  
key (Uint256)  
```
#### Returns
  
```python  
value (Uint256)  
```
### `write_storage`
  

#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
bitwise_ptr (BitwiseBuiltin*)  
```
#### Explicit arguments
  
```python  
key (Uint256)  
value (Uint256)  
```
### `is_initialized`
  

#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
bitwise_ptr (BitwiseBuiltin*)  
```
#### Returns
  
```python  
is_initialized (felt)  
```
### `initialize`
  

#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
bitwise_ptr (BitwiseBuiltin*)  
```
### `write_bytecode`
  

#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
```
#### Explicit arguments
  
```python  
index (felt)  
bytecode_len (felt)  
bytecode (felt*)  
current_felt (felt)  
remaining_shift (felt)  
```
### `load_bytecode`
  

#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
bitwise_ptr (BitwiseBuiltin*)  
```
#### Explicit arguments
  
```python  
index (felt)  
bytecode_len (felt)  
bytecode (felt*)  
current_felt (felt)  
remaining_shift (felt)  
```