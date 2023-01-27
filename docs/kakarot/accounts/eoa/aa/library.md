



# Library

## Internal

### `validate`
  

#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
bitwise_ptr (BitwiseBuiltin*)  
range_check_ptr  
```
#### Explicit arguments
  
```python  
eth_address (felt)  
call_array_len (felt)  
call_array (CallArray*)  
calldata_len (felt)  
calldata (felt*)  
```
### `is_valid_eth_tx`
  

#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
bitwise_ptr (BitwiseBuiltin*)  
range_check_ptr  
```
#### Explicit arguments
  
```python  
eth_address (felt)  
calldata_len (felt)  
calldata (felt*)  
```
#### Returns
  
```python  
is_valid (felt)  
```
### `is_valid_eth_signature`
  

#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
bitwise_ptr (BitwiseBuiltin*)  
range_check_ptr  
```
#### Explicit arguments
  
```python  
msg_hash (Uint256)  
r (Uint256)  
s (Uint256)  
v (felt)  
eth_address (felt)  
```
#### Returns
  
```python  
is_valid (felt)  
```
### `is_valid_signature`
  

#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
bitwise_ptr (BitwiseBuiltin*)  
range_check_ptr  
```
#### Explicit arguments
  
```python  
_eth_address (felt)  
hash_len (felt)  
hash (felt*)  
signature_len (felt)  
signature (felt*)  
```
#### Returns
  
```python  
is_valid (felt)  
```