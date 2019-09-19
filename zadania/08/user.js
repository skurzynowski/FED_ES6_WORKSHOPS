export const getName = (userObj) => userObj.name;
export const profession = "ACTOR";
export const age = 25;

const printAge = ( age ) => { console.log(`Wiek wynosi ${age}`) }

export default getName;


//Druga wersja eksportu
//export {getName as default, age, proffesion};
