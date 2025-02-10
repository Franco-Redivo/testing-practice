function isLetter(char){
    return char.match(/[a-z]/i);
}

function isUpperCase(char){
    return char === char.toUpperCase();
}

function isLowerCase(char){
    return char === char.toLowerCase();
}

export function caesarCipher(str,num){
    let newString = '';
    for(let i = 0; i < str.length; i++){
        let char = str[i];
        let newChar = '';
        if(isLetter(char)){
            let charCode = str.charCodeAt(i);
            let newCharCode = num + charCode;
            if(isUpperCase(char)){
                if(newCharCode > 90){
                    newCharCode = newCharCode - 26;
                }
            } else if(isLowerCase(char)){
                if(newCharCode > 122){
                    newCharCode = newCharCode - 26;
                }
            }
            newChar = String.fromCharCode(newCharCode);

        }else{
            newChar = char;
        }
        newString += newChar;
        
    }
    return newString;
}