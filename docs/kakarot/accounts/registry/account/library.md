



# Library

## Storage

### `starknet_contract_address_`
  

#### Implicit arguments
  
```python  
```
#### Explicit arguments
  
```python  
evm_contract_address (felt)  
```
#### Returns
  
```python  
starknet_contract_address (felt)  
```
### `evm_contract_address_`
  

#### Implicit arguments
  
```python  
```
#### Explicit arguments
  
```python  
starknet_contract_address (felt)  
```
#### Returns
  
```python  
evm_contract_address (felt)  
```
## Internal

### `constructor`
  

#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
bitwise_ptr (BitwiseBuiltin*)  
```
#### Explicit arguments
  
```python  
kakarot_address (felt)  
```
### `transfer_ownership`
  

#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
```
#### Explicit arguments
  
```python  
new_owner (felt)  
```
### `set_account_entry`
  

#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
bitwise_ptr (BitwiseBuiltin*)  
```
#### Explicit arguments
  
```python  
starknet_contract_address (felt)  
evm_contract_address (felt)  
```
### `get_starknet_contract_address`
  

#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
bitwise_ptr (BitwiseBuiltin*)  
```
#### Explicit arguments
  
```python  
evm_contract_address (felt)  
```
#### Returns
  
```python  
starknet_contract_address (felt)  
```
### `get_evm_contract_address`
  

#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
bitwise_ptr (BitwiseBuiltin*)  
```
#### Explicit arguments
  
```python  
starknet_contract_address (felt)  
```
#### Returns
  
```python  
evm_contract_address (felt)  
```