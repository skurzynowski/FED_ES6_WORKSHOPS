# let i const


## Hoisting

### Zmień `var` na `const` i zobacz wynik w konsoli

```javascript
function logName(){
   console.log(name)  
}
var name = "FED";
```


## Zasięg blokowy

### Napraw kod używając jedynie `let` lub `const`

```javascript
for(var i = 0; i < 5; i++){
   console.log(i);
}
for(var i = 0; i < 5; i++){
   console.log(i);
}
```


### Napraw kod

```javascript
const number = 23;

if( number > 20){
  let result = `Większa niż 20`;
}else{
  let result = `Mniejsza niż 20`;
}

console.log(result);
```
