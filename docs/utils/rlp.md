



# Rlp

## Internal

### `decode_rlp`
  
decodes RLP data see this: https://ethereum.org/en/developers/docs/data-structures-and-encoding/rlp
#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
bitwise_ptr (BitwiseBuiltin*)  
range_check_ptr  
```
#### Explicit arguments
  
```python  
data_len (felt): The lenght of the bytes  
data (felt*): The pointer to the first byte in array  
items (Item*): A pointer to an empty array of items, will be filled with found items  
```
### `encode_rlp_list`
  
encodes data into an rlp list
#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
bitwise_ptr (BitwiseBuiltin*)  
range_check_ptr  
```
#### Explicit arguments
  
```python  
data_len (felt): The lenght of the bytes to copy from  
data (felt*): The pointer to the first byte in the array to copy from  
rlp (felt*): The pointer receiving the rlp encoded list  
```
#### Returns
  
```python  
rlp_len (felt)  
```
### `encode_felt`
  
encodes felt into an rlp item
#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
bitwise_ptr (BitwiseBuiltin*)  
range_check_ptr  
```
#### Explicit arguments
  
```python  
item (felt): The felt that is encoded into rlp  
rlp_len (felt): The length of the rlp array  
rlp (felt*): The pointer receiving the rlp encoded felt  
```
#### Returns
  
```python  
rlp_len (felt)  
```
### `encode_byte_array`
  
encodes byte array into an rlp element
#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
bitwise_ptr (BitwiseBuiltin*)  
range_check_ptr  
```
#### Explicit arguments
  
```python  
byte_array_len: The length of the bytes to copy from  
byte_array (felt*): The pointer to the first byte in the array to copy from  
rlp_len (felt)  
rlp (felt*): The pointer receiving the rlp encoded list  
```
#### Returns
  
```python  
rlp_len (felt)  
```