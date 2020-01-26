function toSuperJson(obj) {

    let newObj = {} // новый объект где функция будет как строка

    for (let prop in obj) { // проходим по каждому ключу в объекте
        
        if (typeof obj[prop] === "function") { // если значение равно функции
            newObj[prop] = obj[prop].toString() // в новый объект функция как строка
        } else {
            newObj[prop] = obj[prop] // иначе как оно и шло по дефолту
        }
    }

    return JSON.stringify(newObj) // переводим новый объект в JSON
}

function fromSuperJson(jsonedObj) { // функция из JSON
    let obj = JSON.parse(jsonedObj) // восстанавливаем объект их JSON
    for (let prop in obj) { // прогоняем по ключам в объекте
        
        if (typeof obj[prop] === 'string' && obj[prop].startsWith("function")) { // если тип объекта строка и строка начинается со слова function
            let a 
            let val = "a = " + obj[prop].replace('+', '- -') // меняется + на - - для сложения. не баг, а фича)
            eval(val) // eval  - выполняет код который получится в строке а = function() { return this.a + this.b }
            obj[prop] = a
        }

    }

    return obj
}
/*
let x  = {
    a: 2345,
    b: '123456',
    sum: "function() { return this.a + this.b }"
}
*/
let  x = {
    a:    2345,
    b: '123456',
    sum: function() {
        return this.a + this.b
    }
 }

let jsoned = toSuperJson(x); // преобразование в JSON

let parsed = fromSuperJson(jsoned); // в JS
console.log(jsoned);
console.log(parsed);
console.log(parsed.sum());