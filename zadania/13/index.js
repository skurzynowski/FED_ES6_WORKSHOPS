import {getUser} from './UserApi';



const getResult = async() => {
return  await getUser().then(data => data.name);
}

getResult().then(data=>console.log(data));
