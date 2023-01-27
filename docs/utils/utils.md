



# Utils

## Internal

### `to_uint256`
  

#### Implicit arguments
  
```python  
range_check_ptr  
```
#### Explicit arguments
  
```python  
val (felt)  
```
#### Returns
  
```python  
Uint256  
```
### `to_bigint`
  
This helper converts a felt straight to BigInt3
#### Implicit arguments
  
```python  
range_check_ptr  
```
#### Explicit arguments
  
```python  
val (felt): : felt value to be converted  
```
#### Returns
  
```python  
BigInt3  
```
### `bigint_to_felt`
  
This helper converts a BigInt3 straight to felt
#### Implicit arguments
  
```python  
range_check_ptr  
```
#### Explicit arguments
  
```python  
val (BigInt3): : BigInt3 value to be converted  
```
#### Returns
  
```python  
felt  
```
### `bytes_i_to_uint256`
  
This function is used to convert a sequence of i bytes to Uint256.
#### Implicit arguments
  
```python  
range_check_ptr  
```
#### Explicit arguments
  
```python  
val (felt*): : pointer to the first byte.  
i (felt): : sequence size.  
```
#### Returns
  
```python  
Uint256  
```
### `bytes32_to_bigint`
  
This helper is used to convert a sequence of 32 bytes straight to BigInt3.
#### Implicit arguments
  
```python  
range_check_ptr  
```
#### Explicit arguments
  
```python  
val (felt*): : pointer to the first byte of the 32.  
```
#### Returns
  
```python  
BigInt3  
```
### `bigint_to_bytes_array`
  
This function is used to convert a BigInt3 to straight to a bytes array represented by an array of felts (1 felt represents 1 byte).
#### Implicit arguments
  
```python  
range_check_ptr  
```
#### Explicit arguments
  
```python  
val (BigInt3)  
```
#### Returns
  
```python  
bytes_array_len (felt)  
bytes_array (felt*)  
```
### `minimum_word_count`
  
: This helper returns the minimal number of EVM words for a given bytes length
#### Implicit arguments
  
```python  
range_check_ptr  
```
#### Explicit arguments
  
```python  
length (felt): : a given bytes length  
```
#### Returns
  
```python  
res (felt)  
```
### `compute_half_uint256`
  

#### Implicit arguments
  
```python  
range_check_ptr  
```
#### Explicit arguments
  
```python  
val (felt*)  
i (felt)  
res (felt)  
```
#### Returns
  
```python  
res (felt)  
```
### `slice_data`
  

#### Implicit arguments
  
```python  
range_check_ptr  
```
#### Explicit arguments
  
```python  
data_len (felt)  
data (felt*)  
data_offset (felt)  
slice_len (felt)  
```
#### Returns
  
```python  
felt*  
```
### `uint256_to_felt`
  
This function is used to convert a uint256 to a felt.
#### Implicit arguments
  
```python  
range_check_ptr  
```
#### Explicit arguments
  
```python  
val (Uint256): : value to convert.  
```
#### Returns
  
```python  
felt  
```
### `uint256_to_bytes_array`
  
This function is used to convert a uint256 to a bytes array represented by an array of felts (1 felt represents 1 byte).
#### Implicit arguments
  
```python  
range_check_ptr  
```
#### Explicit arguments
  
```python  
value (Uint256): : value to convert.  
```
#### Returns
  
```python  
bytes_array_len (felt)  
bytes_array (felt*)  
```
### `uint256_to_bytes_no_padding`
  
This function is a variant of `uint256_to_bytes_array` that encodes the uint256 with no padding
#### Implicit arguments
  
```python  
bitwise_ptr (BitwiseBuiltin*)  
range_check_ptr  
```
#### Explicit arguments
  
```python  
value (Uint256): : value to convert.  
idx (felt): : index of res array  
res (felt*): : resultant encoded bytearray, but in reverse order  
dest (felt*): : reversed res, putting byte array in right order  
```
#### Returns
  
```python  
bytes_len (felt)  
```
### `uint256_to_dest_bytes_array`
  
This function is like `uint256_to_bytes_array` except it writes the byte array to a given destination with the given offset and length
#### Implicit arguments
  
```python  
range_check_ptr  
```
#### Explicit arguments
  
```python  
value (Uint256): : value to convert.  
byte_array_offset (felt): : The starting offset of byte array that is copied to the destination array.  
byte_array_len (felt): : The length of byte array that is copied to the destination array.  
dest_offset (felt): : The offset of the destination array that the byte array is copied.  
dest_len (felt): : The length of the destination array.  
dest (felt*): : The destination array  
```
#### Returns
  
```python  
updated_dest_len (felt)  
```
### `div_rem`
  
Divides a 128-bit number with remainder.
#### Implicit arguments
  
```python  
range_check_ptr  
```
#### Explicit arguments
  
```python  
value: : 128bit value to divide.  
div: : divisor.  
```
#### Returns
  
```python  
q (felt)  
r (felt)  
```
### `split_word`
  
Splits a felt into `len` bytes, big-endian, and outputs to `dst`.
#### Implicit arguments
  
```python  
range_check_ptr  
```
#### Explicit arguments
  
```python  
value (felt)  
len (felt)  
dst (felt*)  
```
### `split_word_little`
  
Splits a felt into `len` bytes, little-endian, and outputs to `dst`.
#### Implicit arguments
  
```python  
range_check_ptr  
```
#### Explicit arguments
  
```python  
value (felt)  
len (felt)  
dst (felt*)  
```
### `split_word_128`
  
Splits a felt into 16 bytes, big-endien, and outputs to `dst`.
#### Implicit arguments
  
```python  
range_check_ptr  
```
#### Explicit arguments
  
```python  
start_value (felt)  
dst (felt*)  
```
### `ceil_bytes_len_to_next_32_bytes_word`
  
Ceil a number of bits to the next word (32 bytes)
ex: ceil_bytes_len_to_next_32_bytes_word(2) = 32
ex: ceil_bytes_len_to_next_32_bytes_word(34) = 64
#### Implicit arguments
  
```python  
range_check_ptr  
```
#### Explicit arguments
  
```python  
bytes_len (felt)  
```
#### Returns
  
```python  
felt  
```
### `min`
  
Returns the min value between a and b
#### Implicit arguments
  
```python  
range_check_ptr  
```
#### Explicit arguments
  
```python  
a (felt)  
b (felt)  
```
#### Returns
  
```python  
felt  
```
### `bytes_to_bytes8_little_endian`
  
convert bytes to little endian
#### Implicit arguments
  
```python  
range_check_ptr  
```
#### Explicit arguments
  
```python  
bytes_len (felt)  
bytes (felt*)  
index (felt)  
size (felt)  
bytes8 (felt)  
bytes8_shift (felt)  
dest (felt*)  
dest_index (felt)  
```
### `felt_to_bytes`
  
transform a felt to big endian bytes
#### Implicit arguments
  
```python  
range_check_ptr  
```
#### Explicit arguments
  
```python  
value (felt): The initial felt  
bytes_len (felt): The number of bytes (used for recursion, set to 0)  
bytes (felt*): The pointer to the bytes  
```
#### Returns
  
```python  
bytes_len (felt)  
```
### `bytes_to_felt`
  
transform muliple bytes into a single felt
#### Implicit arguments
  
```python  
range_check_ptr  
```
#### Explicit arguments
  
```python  
data_len (felt): The length of the bytes  
data (felt*): The pointer to the bytes array  
n (felt): used for recursion, set to 0  
```
#### Returns
  
```python  
n (felt)  
```
### `keccak_hash_to_evm_contract_address`
  
Transforms a keccak hash to an ethereum address by taking last 20 bytes
#### Implicit arguments
  
```python  
range_check_ptr  
```
#### Explicit arguments
  
```python  
hash (Uint256): - The keccak hash.  
```
#### Returns
  
```python  
felt  
```
### `bytes_to_bytes4_array`
  
transform muliple bytes into words of 32 bits (big endian)
#### Implicit arguments
  
```python  
range_check_ptr  
```
#### Explicit arguments
  
```python  
data_len (felt): The length of the bytes  
data (felt*): The pointer to the bytes array  
n_len (felt): used for recursion, set to 0  
n (felt*): used for recursion, set to pointer  
```
#### Returns
  
```python  
n_len (felt)  
n (felt*)  
```
### `bytes4_array_to_bytes`
  
transform array of 32-bit words (big endian) into a bytes array
#### Implicit arguments
  
```python  
range_check_ptr  
```
#### Explicit arguments
  
```python  
data_len (felt): The length of the 32-bit array  
data (felt*): The pointer to the 32-bit array  
bytes_len (felt): used for recursion, set to 0  
bytes (felt*): used for recursion, set to pointer  
```
#### Returns
  
```python  
bytes_len (felt)  
bytes (felt*)  
```