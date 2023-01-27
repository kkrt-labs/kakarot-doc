



# Library

## Storage

### `blockhash_`
  

#### Implicit arguments
  
```python  
```
#### Explicit arguments
  
```python  
block_number (Uint256)  
```
#### Returns
  
```python  
blockhash (felt)  
```
## Internal

### `constructor`
  

#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
```
#### Explicit arguments
  
```python  
kakarot_address (felt)  
```
### `transfer_ownership`
  

#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
```
#### Explicit arguments
  
```python  
new_owner (felt)  
```
### `set_blockhashes`
  

#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
```
#### Explicit arguments
  
```python  
block_number_len (felt)  
block_number (Uint256*)  
block_hash_len (felt)  
block_hash (felt*)  
```
### `get_blockhash`
  

#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
```
#### Explicit arguments
  
```python  
block_number (Uint256)  
```
#### Returns
  
```python  
blockhash (felt)  
```