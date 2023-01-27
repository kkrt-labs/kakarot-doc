



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
_account_abstraction_class_hash (felt): The class_hash of the Abstraction Account Contract  
_kakarot_address (felt)  
```
## View

### `compute_starknet_address`
  
computes the starknet address from the evm address
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
  
deploys a new EVM account
#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
```
#### Explicit arguments
  
```python  
evm_address (felt): The Ethereum address which will be controlling the account  
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