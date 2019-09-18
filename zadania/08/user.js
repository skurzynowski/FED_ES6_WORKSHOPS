export const getName = (userObj) => userObj.name;
export const profession = "ACTOR";

class User{
  constructor(name){
     this.name = name;
  }
}

export default User;


//Druga wersja eksportu
//export {User as default, getName, proffesion};
