



# Library

## Internal

### `validate`
  
checks if tx is signed and valid for each call
#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
bitwise_ptr (BitwiseBuiltin*)  
range_check_ptr  
```
#### Explicit arguments
  
```python  
eth_address (felt): The ethereum address owning this account  
call_array_len (felt): The length of the call array  
call_array (CallArray*): The call array  
calldata_len (felt): The length of the calldata  
calldata (felt*): The calldata  
```
### `is_valid_eth_tx`
  
decodes evm tx and validates it
#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
bitwise_ptr (BitwiseBuiltin*)  
range_check_ptr  
```
#### Explicit arguments
  
```python  
eth_address (felt): The ethereum address owning the account  
calldata_len (felt): The lenght of the calldata  
calldata (felt*): The calldata  
```
#### Returns
  
```python  
is_valid (felt)  
```
### `is_valid_eth_signature`
  
returns 1 (true) and does not fail if the signature is valid
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
v (felt): , r, s The signature  
eth_address (felt): The ethereum address to compare the signature  
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