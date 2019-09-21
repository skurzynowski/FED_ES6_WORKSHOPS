const arr = [1, 5, 4];
const result = arr.filter( (el) => {return el > 1} );
result.filter((el) => {return true})
console.log( result );

const arr = [
{ price: 120 },
{ price: 100 },
{ price: 200 }];
const result = arr.reduce(function( colector, el ){
  return colector + el.price
}, 0);
console.log( result );

const obj = { props: "asd", user : {name : 'Seba'} };

const g = "";
const {
  user : { name : surname = 'K.' }
  ...(g && {id:g})
 } = obj;
const {props, ...obj1} = obj;
console.log(obj1)
console.log(name);




const obj = {value : 5, arr : ['1','2']};

const obj2 = { ...obj, arr :[...obj.arr] };

obj2.arr[0] = 8;

obj.arr[0] = 100;

console.log(obj);
console.log(obj2);

const name = "Seba poza funkcją";

function print(str){
  const name = "Seba w funkcji";
  console.log( str );
}

print( `  testNumber ${name} ` );



const name = "Seba poza funkcją";

function print(str,...rest){
    console.log(str, rest);

    return 'test'
}

console.log(print`  testNumber ${name} tył`);
