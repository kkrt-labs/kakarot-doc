



# Externally owned account

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
_eth_address (felt)  
_kakarot_address (felt)  
```
## View

### `get_eth_address`
  

#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
```
#### Returns
  
```python  
eth_address (felt)  
```
### `supports_interface`
  

#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
```
#### Explicit arguments
  
```python  
interface_id (felt)  
```
#### Returns
  
```python  
success (felt)  
```
### `is_valid_signature`
  

#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
bitwise_ptr (BitwiseBuiltin*)  
range_check_ptr  
```
#### Explicit arguments
  
```python  
hash_len (felt)  
hash (felt*)  
signature_len (felt)  
signature (felt*)  
```
#### Returns
  
```python  
is_valid (felt)  
```
## External

### `__validate__`
  

#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
bitwise_ptr (BitwiseBuiltin*)  
range_check_ptr  
```
### `__validate_declare__`
  

#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
bitwise_ptr (BitwiseBuiltin*)  
range_check_ptr  
```
#### Explicit arguments
  
```python  
class_hash (felt)  
```
### `__execute__`
  

#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
ecdsa_ptr (SignatureBuiltin*)  
bitwise_ptr (BitwiseBuiltin*)  
range_check_ptr  
```
## Storage

### `eth_address`
  

#### Implicit arguments
  
```python  
```
#### Returns
  
```python  
adress (felt)  
```
### `kakarot_address`
  

#### Implicit arguments
  
```python  
```
#### Returns
  
```python  
address (felt)  
```