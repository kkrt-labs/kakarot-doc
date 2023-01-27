



# System operations

## Internal

### `get_create_address`
  
Constructs an evm contract address for the create opcode
via last twenty bytes of the keccak hash of:
keccak256(rlp([sender_address,sender_nonce]))[
See [CREATE](https://www.evm.codes/#f0)
#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
bitwise_ptr (BitwiseBuiltin*)  
```
#### Explicit arguments
  
```python  
sender_address (felt): - The evm sender address.  
salt (felt)  
```
#### Returns
  
```python  
evm_contract_address (felt)  
```
### `get_create2_address`
  
Constructs an evm contract address for the create2 opcode
via last twenty bytes of the keccak hash of:
keccak256(0xff + sender_address + salt +
keccak256(initialisation_code))[12:]
See [CREATE2](https://www.evm.codes/#f5)
#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
bitwise_ptr (BitwiseBuiltin*)  
```
#### Explicit arguments
  
```python  
sender_address (felt): - The evm sender address.  
bytecode_len (felt): - The length of the initialization code.  
bytecode (felt*): - The offset to store the element at.  
salt (Uint256): - The salt given to the create2 opcode.  
```
#### Returns
  
```python  
evm_contract_address (felt)  
```
### `_finalize_loop`
  

#### Implicit arguments
  
```python  
syscall_ptr (felt*)  
pedersen_ptr (HashBuiltin*)  
range_check_ptr  
bitwise_ptr (BitwiseBuiltin*)  
```
#### Explicit arguments
  
```python  
destroy_contracts_len (felt)  
destroy_contracts (felt*)  
```
#### Returns
  
```python  
felt*  
```