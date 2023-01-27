



# System operations

## Internal

### `get_create_address`
  

#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
bitwise_ptr (BitwiseBuiltin*)  
```
#### Explicit arguments
  
```python  
sender_address (felt)  
salt (felt)  
```
#### Returns
  
```python  
evm_contract_address (felt)  
```
### `get_create2_address`
  

#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
bitwise_ptr (BitwiseBuiltin*)  
```
#### Explicit arguments
  
```python  
sender_address (felt)  
bytecode_len (felt)  
bytecode (felt*)  
salt (Uint256)  
```
#### Returns
  
```python  
evm_contract_address (felt)  
```
### `_finalize_loop`
  

#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
bitwise_ptr (BitwiseBuiltin*)  
```
#### Explicit arguments
  
```python  
destroy_contracts_len (felt)  
destroy_contracts (felt*)  
```
#### Returns
  
```python  
felt*  
```