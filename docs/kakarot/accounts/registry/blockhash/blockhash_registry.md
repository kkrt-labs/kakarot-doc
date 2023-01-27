



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
  
Get the blockhash of a certain block number.
#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
```
#### Explicit arguments
  
```python  
block_number (Uint256): : the block number  
```
#### Returns
  
```python  
blockhash (felt)  
```
## External

### `transfer_ownership`
  
Transfer ownership of the registry to a new starknet address
#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
```
#### Explicit arguments
  
```python  
new_address (felt): : The new owner of the blockhash registry  
```
### `set_blockhashes`
  
Update or create an entry in the registry.
#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
```
#### Explicit arguments
  
```python  
block_number_len (felt): : the length of block numbers  
block_number (Uint256*): : the block numbers  
block_hash_len (felt): : the length of block hashes  
block_hash (felt*): : the block hashes  
```