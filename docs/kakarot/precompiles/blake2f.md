



# Blake2f

## Internal

### `run`
  

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
input_len (felt)  
input (felt*)  
```
#### Returns
  
```python  
output_len (felt)  
output (felt*)  
gas_used (felt)  
```
### `F`
  

#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
bitwise_ptr (BitwiseBuiltin*)  
```
#### Explicit arguments
  
```python  
rounds (felt)  
h (felt*)  
m (felt*)  
t0 (felt)  
t1 (felt)  
f (felt)  
```
#### Returns
  
```python  
output (felt*)  
```
### `blake_rounds`
  

#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
bitwise_ptr (BitwiseBuiltin*)  
```
#### Explicit arguments
  
```python  
rounds (felt)  
i (felt)  
h (felt*)  
m (felt*)  
sigma (felt*)  
```
#### Returns
  
```python  
final_h (felt*)  
```
### `blake_round`
  

#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
bitwise_ptr (BitwiseBuiltin*)  
```
#### Explicit arguments
  
```python  
state (felt*)  
message (felt*)  
sigma (felt*)  
```
#### Returns
  
```python  
new_state (felt*)  
```
### `mix_one`
  

#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
bitwise_ptr (BitwiseBuiltin*)  
```
#### Explicit arguments
  
```python  
a (felt)  
b (felt)  
c (felt)  
d (felt)  
m (felt)  
```
#### Returns
  
```python  
a (felt)  
b (felt)  
c (felt)  
d (felt)  
```
### `mix_two`
  

#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
bitwise_ptr (BitwiseBuiltin*)  
```
#### Explicit arguments
  
```python  
a (felt)  
b (felt)  
c (felt)  
d (felt)  
m (felt)  
```
#### Returns
  
```python  
a (felt)  
b (felt)  
c (felt)  
d (felt)  
```