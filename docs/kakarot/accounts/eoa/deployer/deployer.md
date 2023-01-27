



# Deployer

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
_account_abstraction_class_hash (felt)  
_kakarot_address (felt)  
```
## View

### `compute_starknet_address`
  

#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
```
#### Explicit arguments
  
```python  
evm_address (felt)  
```
#### Returns
  
```python  
contract_address (felt)  
```
## External

### `create_account`
  

#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
```
#### Explicit arguments
  
```python  
evm_address (felt)  
```
## Storage

### `account_abstraction_class_hash`
  

#### Implicit arguments
  
```python  
```
#### Returns
  
```python  
felt  
```
### `kakarot_address`
  

#### Implicit arguments
  
```python  
```
#### Returns
  
```python  
felt  
```