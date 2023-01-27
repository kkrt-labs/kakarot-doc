



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
input_len (felt)  
input (felt*)  
```
#### Returns
  
```python  
output_len (felt)  
output (felt*)  
gas_used (felt)  
```
### `not_implemented_precompile`
  

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