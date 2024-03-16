//Inclusively checking if the type of a variable is a primitive string type or an object string type
function isString(stringVal){
    if(typeof stringVal === 'string' || String.prototype.isPrototypeOf(stringVal) && stringVal.trim().length > 0){
        console.log('This is a defined string value that is not empty. Its VALID');
    }else if(typeof stringVal != 'string' && (stringVal.trim().length > 0)){
        console.log('This is string. However it is not a valid string since it is either empty or full of white space');
    }else{
        console.log('This is not a valid string....INVALID AS F**K');
    }
}

const sirName = 'Mwaniki';
const playerName = '        ';
const nicname = '';
const age = 24;
const lastScore = ' A';
isString(playerName);