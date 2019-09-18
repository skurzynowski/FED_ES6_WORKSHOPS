import User, {getName} from './user.js';

const Admin = new User('Wil');
const Name =   getName(Admin);

console.log(Name);
