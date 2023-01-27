



# Alt bn128 g1

## Internal

### `compute_doubling_slope`
  

#### Implicit arguments
  
```python  
range_check_ptr  
```
#### Explicit arguments
  
```python  
pt (G1Point)  
```
#### Returns
  
```python  
slope (BigInt3)  
```
### `compute_slope`
  

#### Implicit arguments
  
```python  
range_check_ptr  
```
#### Explicit arguments
  
```python  
pt0 (G1Point)  
pt1 (G1Point)  
```
#### Returns
  
```python  
slope (BigInt3)  
```
### `ec_double`
  

#### Implicit arguments
  
```python  
range_check_ptr  
```
#### Explicit arguments
  
```python  
pt (G1Point)  
```
#### Returns
  
```python  
res (G1Point)  
```
### `fast_ec_add`
  

#### Implicit arguments
  
```python  
range_check_ptr  
```
#### Explicit arguments
  
```python  
pt0 (G1Point)  
pt1 (G1Point)  
```
#### Returns
  
```python  
res (G1Point)  
```
### `ec_add`
  

#### Implicit arguments
  
```python  
range_check_ptr  
```
#### Explicit arguments
  
```python  
pt0 (G1Point)  
pt1 (G1Point)  
```
#### Returns
  
```python  
res (G1Point)  
```
### `ec_mul_inner`
  

#### Implicit arguments
  
```python  
range_check_ptr  
```
#### Explicit arguments
  
```python  
pt (G1Point)  
scalar (felt)  
m (felt)  
```
#### Returns
  
```python  
pow2 (G1Point)  
res (G1Point)  
```
### `ec_mul`
  

#### Implicit arguments
  
```python  
range_check_ptr  
```
#### Explicit arguments
  
```python  
pt (G1Point)  
scalar (BigInt3)  
```
#### Returns
  
```python  
res (G1Point)  
```