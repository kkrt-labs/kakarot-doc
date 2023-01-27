



# Contract account

## Constructor

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
## View

### `bytecode`
  
This function is used to get the bytecode of the smart contract.
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
### `bytecode_len`
  
This function is used to get only the bytecode_len of the smart contract.
#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
bitwise_ptr (BitwiseBuiltin*)  
```
#### Returns
  
```python  
len (felt)  
```
### `storage`
  
Read a given storage key
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
### `is_initialized`
  
This function checks if the account was initialized.
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
## External

### `write_bytecode`
  
Store the bytecode of the contract.
#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
bitwise_ptr (BitwiseBuiltin*)  
```
#### Explicit arguments
  
```python  
bytecode_len (felt): : The length of the bytecode.  
bytecode (felt*): : The bytecode of the contract.  
```
### `write_storage`
  
Store a key-value pair
#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
bitwise_ptr (BitwiseBuiltin*)  
```
#### Explicit arguments
  
```python  
key (Uint256): : The bytes32 storage key.  
value (Uint256): : The bytes32 stored value.  
```
### `initialize`
  
This function is used to initialize the smart contract.
#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
bitwise_ptr (BitwiseBuiltin*)  
```