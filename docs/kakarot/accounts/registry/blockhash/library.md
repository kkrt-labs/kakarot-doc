



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
  
This function is used to initialize the registry.
#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
```
#### Explicit arguments
  
```python  
kakarot_address (felt): : The address of the Kakarot smart contract.  
```
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
new_owner (felt): The new owner of the blockhash registry  
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