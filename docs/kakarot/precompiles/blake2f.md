



# Blake2f

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
### `F`
  
Performs the blake2b compression function
#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
bitwise_ptr (BitwiseBuiltin*)  
```
#### Explicit arguments
  
```python  
rounds (felt): The number of rounds for the compression function  
h (felt*): The internal state of the hash  
m (felt*): The sixteen words of a single message  
t0 (felt)  
t1 (felt)  
f (felt): The flag indicating the last block  
```
#### Returns
  
```python  
output (felt*)  
```
### `blake_rounds`
  
Performs all blake2b compression function rounds
#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
bitwise_ptr (BitwiseBuiltin*)  
```
#### Explicit arguments
  
```python  
rounds (felt): The number of rounds for the compression function  
i (felt): The current round  
h (felt*): The internal state of the hash  
m (felt*): The sixteen words of a single message  
sigma (felt*): The message schedule  
```
#### Returns
  
```python  
final_h (felt*)  
```
### `blake_round`
  
Performs a single round of the blake2b compression function
#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
bitwise_ptr (BitwiseBuiltin*)  
```
#### Explicit arguments
  
```python  
state (felt*): The internal state of the hash  
message (felt*): The sixteen words of a single message  
sigma (felt*): The message schedule  
```
#### Returns
  
```python  
new_state (felt*)  
```
### `mix_one`
  
Performs a mixing of inputs
#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
bitwise_ptr (BitwiseBuiltin*)  
```
#### Explicit arguments
  
```python  
a (felt): The first state word  
b (felt): The second state word  
c (felt): The third state word  
d (felt): The fourth state word  
m (felt): The message word used in mixing  
```
#### Returns
  
```python  
a (felt)  
b (felt)  
c (felt)  
d (felt)  
```
### `mix_two`
  
Performs a mixing of inputs
#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
bitwise_ptr (BitwiseBuiltin*)  
```
#### Explicit arguments
  
```python  
a (felt): The first state word  
b (felt): The second state word  
c (felt): The third state word  
d (felt): The fourth state word  
m (felt): The message word used in mixing  
```
#### Returns
  
```python  
a (felt)  
b (felt)  
c (felt)  
d (felt)  
```