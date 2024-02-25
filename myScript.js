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
// мы видим разные значения имен благодоря this который дает доступ к(данном случае) имени каждого объекта