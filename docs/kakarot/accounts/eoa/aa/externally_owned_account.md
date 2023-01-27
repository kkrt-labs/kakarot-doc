



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
_eth_address (felt): The Ethereum address which will control the account  
_kakarot_address (felt): The Starknet address of the Kakarot contract  
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
interface_id (felt): The interface Id to verify if supported  
```
#### Returns
  
```python  
success (felt)  
```
### `is_valid_signature`
  
checks if the signature is valid
#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
bitwise_ptr (BitwiseBuiltin*)  
range_check_ptr  
```
#### Explicit arguments
  
```python  
hash_len (felt): The hash length which was signed  
hash (felt*): The hash [low_128_bits, high_128_bits]  
signature_len (felt): The length of the signature array  
signature (felt*): The array of the ethereum signature (as v, r, s)  
```
#### Returns
  
```python  
is_valid (felt)  
```
## External

### `__validate__`
  
validate a transaction
#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
bitwise_ptr (BitwiseBuiltin*)  
range_check_ptr  
```
### `__validate_declare__`
  
validates this account class for declaration
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
  
executes the Kakarot transaction
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