



# Ec recover

## Internal

### `run`
  
Run the precompile.
#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
bitwise_ptr (BitwiseBuiltin*)  
```
#### Explicit arguments
  
```python  
_address (felt)  
input_len (felt): The length of input array.  
input (felt*): The input array.  
```
#### Returns
  
```python  
output_len (felt)  
output (felt*)  
gas_used (felt)  
```