const str = "ztm is the best of the best";

str.replaceAll('best', 'worst');// this will allow you to replace something in the string
// this does not change the string after the function has been called
//      instead it instances a new string with the replacement word

const b = str.replaceAll('best', 'worst');
