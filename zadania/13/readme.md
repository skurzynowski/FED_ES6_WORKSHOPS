# Obietnice

## Prosta obietnica

### Zmień funkcję aby zwracałą obietnicę sprawdź jej stan

```javascript
  const getPromise = () => {}
```


## `then` i co wtedy??

### Zmień funkcję aby zwracałą obietnicę sprawdź jej stan

```javascript
const getPromise = () => {
  return new Promise((res,rej)=>{
    setTimeout(
      () => {
        Date.now() % 2 ? res('parzysta') : res('nieparzysta')
      },
      1000
    )
  });
}

console.log(getPromise());
getPromise()
```
