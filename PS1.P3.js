

const splitC = (value, func) =>{
    return func(value);
}

class StrProperties {
    constructor(originalString, modifiedString, numberReplaced,length){
        this.originalString = originalString
        this.modifiedString = modifiedString
        this.numberReplaced = numberReplaced
        this.length = length
    }
}

console.log(splitC("supercalifragilisticexpialidocious",(inpString) => {
    inpString = inpString.split("c")
    let counter = 0
    for (let part of inpString){
        if (counter != 0) {
            inpString[counter] = "c".concat(part)

        }
        counter += 1;
        //console.log(part,counter)
    }
    return inpString;

}))

console.table(splitC("supercalifragilisticexpialidocious",(inpString) => {

    let originalString;
    let modifiedString;
    let numberReplaced = 0;
    let length = 0
    originalString = inpString
    modifiedString = inpString.split("")
    for (let char of modifiedString){
        if (char === 'a'){
            modifiedString[length] = 'A'
            numberReplaced += 1;
        }
        length += 1;
    }
    modifiedString = modifiedString.join("")


    const result = new StrProperties(originalString,modifiedString,numberReplaced,length)
    return result
}))