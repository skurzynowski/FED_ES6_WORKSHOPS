# Moduły

## Import

### Do pliku `index.js` zaimportuj `getName` oraz `User` tak aby wykonał się kod poniżej

```javascript
const Admin = new User("Wil");
const Name = getName(Admin);

console.log(Name);
```

## Zmiana nazwy przy imporcie

###

```javascript
const superKey = "name";
const superValue = "Bruce";
```

## Import wszystkiego

### 

```javascript
const name = "Bruce";
const surname = "Willis";
```

## Metoda `get`

> Nie może pojawiać się w itarale objektu z innym getem lub właściwością o takich samych nazwach ({ get x() { }, get x() { } } oraz { x: ..., get x() { } } są niedozwolone).

### Dopisz metodę pobierającą `name`

```javascript
  const user = {
  name : 'Bruce';
    ...
  }
```

## Metoda `set`

### Dopisz metodę ustawiającą `name`

```javascript
  const user = {
  name : 'Bruce';
    ...
  }
```
