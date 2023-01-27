



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
BigInt3  
```
### `bigint_to_felt`
  

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
felt  
```
### `bytes_i_to_uint256`
  

#### Implicit arguments
  
```python  
range_check_ptr  
```
#### Explicit arguments
  
```python  
val (felt*)  
i (felt)  
```
#### Returns
  
```python  
Uint256  
```
### `bytes32_to_bigint`
  

#### Implicit arguments
  
```python  
range_check_ptr  
```
#### Explicit arguments
  
```python  
val (felt*)  
```
#### Returns
  
```python  
BigInt3  
```
### `bigint_to_bytes_array`
  

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
  

#### Implicit arguments
  
```python  
range_check_ptr  
```
#### Explicit arguments
  
```python  
length (felt)  
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
  

#### Implicit arguments
  
```python  
range_check_ptr  
```
#### Explicit arguments
  
```python  
val (Uint256)  
```
#### Returns
  
```python  
felt  
```
### `uint256_to_bytes_array`
  

#### Implicit arguments
  
```python  
range_check_ptr  
```
#### Explicit arguments
  
```python  
value (Uint256)  
```
#### Returns
  
```python  
bytes_array_len (felt)  
bytes_array (felt*)  
```
### `uint256_to_bytes_no_padding`
  

#### Implicit arguments
  
```python  
bitwise_ptr (BitwiseBuiltin*)  
range_check_ptr  
```
#### Explicit arguments
  
```python  
value (Uint256)  
idx (felt)  
res (felt*)  
dest (felt*)  
```
#### Returns
  
```python  
bytes_len (felt)  
```
### `uint256_to_dest_bytes_array`
  

#### Implicit arguments
  
```python  
range_check_ptr  
```
#### Explicit arguments
  
```python  
value (Uint256)  
byte_array_offset (felt)  
byte_array_len (felt)  
dest_offset (felt)  
dest_len (felt)  
dest (felt*)  
```
#### Returns
  
```python  
updated_dest_len (felt)  
```
### `div_rem`
  

#### Implicit arguments
  
```python  
range_check_ptr  
```
#### Explicit arguments
  
```python  
value  
div  
```
#### Returns
  
```python  
q (felt)  
r (felt)  
```
### `split_word`
  

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
  

#### Implicit arguments
  
```python  
range_check_ptr  
```
#### Explicit arguments
  
```python  
value (felt)  
bytes_len (felt)  
bytes (felt*)  
```
#### Returns
  
```python  
bytes_len (felt)  
```
### `bytes_to_felt`
  

#### Implicit arguments
  
```python  
range_check_ptr  
```
#### Explicit arguments
  
```python  
data_len (felt)  
data (felt*)  
n (felt)  
```
#### Returns
  
```python  
n (felt)  
```
### `keccak_hash_to_evm_contract_address`
  

#### Implicit arguments
  
```python  
range_check_ptr  
```
#### Explicit arguments
  
```python  
hash (Uint256)  
```
#### Returns
  
```python  
felt  
```
### `bytes_to_bytes4_array`
  

#### Implicit arguments
  
```python  
range_check_ptr  
```
#### Explicit arguments
  
```python  
data_len (felt)  
data (felt*)  
n_len (felt)  
n (felt*)  
```
#### Returns
  
```python  
n_len (felt)  
n (felt*)  
```
### `bytes4_array_to_bytes`
  

#### Implicit arguments
  
```python  
range_check_ptr  
```
#### Explicit arguments
  
```python  
data_len (felt)  
data (felt*)  
bytes_len (felt)  
bytes (felt*)  
```
#### Returns
  
```python  
bytes_len (felt)  
bytes (felt*)  
```