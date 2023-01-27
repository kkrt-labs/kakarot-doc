



# Blockhash registry

## Constructor

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
## View

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
## External

### `transfer_ownership`
  

#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
```
#### Explicit arguments
  
```python  
new_address (felt)  
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