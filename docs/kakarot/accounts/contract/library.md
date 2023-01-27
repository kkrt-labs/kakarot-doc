



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
  
This function is used to initialize the smart contract account.
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
bytecode_len (felt): : The length of the smart contract bytecode.  
bytecode (felt*): : The bytecode of the smart contract.  
```
### `deploy`
  
This function is a factory to handle evm contract address and registration of EVM!=Starknet binding in the case of create2.
#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
bitwise_ptr (BitwiseBuiltin*)  
```
#### Explicit arguments
  
```python  
evm_contract_address (felt): : The computed evm contract address to map deployment to.  
```
#### Returns
  
```python  
starknet_contract_address (felt)  
```
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
### `bytecode_len`
  
This function is used to get the bytecode_len of the smart contract.
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
### `storage`
  
This function is used to read the storage at a key.
#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
bitwise_ptr (BitwiseBuiltin*)  
```
#### Explicit arguments
  
```python  
key (Uint256): : The key to the stored value .  
```
#### Returns
  
```python  
value (Uint256)  
```
### `write_storage`
  
This function is used to write to the storage of the account.
#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
bitwise_ptr (BitwiseBuiltin*)  
```
#### Explicit arguments
  
```python  
key (Uint256): : The key to the value to store.  
value (Uint256): : The value to store.  
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
### `initialize`
  
This function is used to initialized the smart contract.
#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
bitwise_ptr (BitwiseBuiltin*)  
```
### `write_bytecode`
  
Store the bytecode of the contract.
#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
```
#### Explicit arguments
  
```python  
index (felt): : The current free index in the bytecode_ storage.  
bytecode_len (felt): : The length of the bytecode.  
bytecode (felt*): : The bytecode of the contract.  
current_felt (felt)  
remaining_shift (felt)  
```
### `load_bytecode`
  
Load the bytecode of the contract in the specified array.
#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
bitwise_ptr (BitwiseBuiltin*)  
```
#### Explicit arguments
  
```python  
index (felt): : The index in the bytecode.  
bytecode_len (felt): : The length of the bytecode.  
bytecode (felt*): : The bytecode of the contract.  
current_felt (felt)  
remaining_shift (felt)  
```