



# Precompiles

## Internal

### `is_precompile`
  

#### Implicit arguments
  
```python  
range_check_ptr  
```
#### Explicit arguments
  
```python  
address (felt)  
```
#### Returns
  
```python  
felt  
```
### `_exec_precompile`
  
Executes associated function of precompiled address
#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
bitwise_ptr (BitwiseBuiltin*)  
```
#### Explicit arguments
  
```python  
address (felt): The precompile address.  
input_len (felt): The length of the input array.  
input (felt*): The input array.  
```
#### Returns
  
```python  
output_len (felt)  
output (felt*)  
gas_used (felt)  
```
### `not_implemented_precompile`
  
A placeholder for precompile that are not implemented yet
#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
bitwise_ptr (BitwiseBuiltin*)  
```
#### Explicit arguments
  
```python  
address (felt)  
_input_len (felt)  
_input (felt*)  
```