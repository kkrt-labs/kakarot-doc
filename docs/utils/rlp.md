



# Rlp

## Internal

### `decode_rlp`
  

#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
bitwise_ptr (BitwiseBuiltin*)  
range_check_ptr  
```
#### Explicit arguments
  
```python  
data_len (felt)  
data (felt*)  
items (Item*)  
```
### `encode_rlp_list`
  

#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
bitwise_ptr (BitwiseBuiltin*)  
range_check_ptr  
```
#### Explicit arguments
  
```python  
data_len (felt)  
data (felt*)  
rlp (felt*)  
```
#### Returns
  
```python  
rlp_len (felt)  
```
### `encode_felt`
  

#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
bitwise_ptr (BitwiseBuiltin*)  
range_check_ptr  
```
#### Explicit arguments
  
```python  
item (felt)  
rlp_len (felt)  
rlp (felt*)  
```
#### Returns
  
```python  
rlp_len (felt)  
```
### `encode_byte_array`
  

#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
bitwise_ptr (BitwiseBuiltin*)  
range_check_ptr  
```
#### Explicit arguments
  
```python  
byte_array_len  
byte_array (felt*)  
rlp_len (felt)  
rlp (felt*)  
```
#### Returns
  
```python  
rlp_len (felt)  
```