'use strict'

let object = {
    name: 'Andrey',
    say: sayName,
};

let object2 = {
    name: 'Ivan',
    say: sayName
        
}

function sayName() {
    console.log(this.name)
}

object.say()
object2.say()

