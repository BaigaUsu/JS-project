let object = {
    name: 'Andrey',
    say: sayName,
    shoot: arrowFunc
};

let object2 = {
    name: 'Ivan',
    say: sayName,
    shoot: arrowFunc
}

function sayName() {
    console.log(this.name)
}

object.say()
object2.say()
// мы видим разные значения имен благодоря this который дает доступ к(данном случае) имени каждого объекта

sayName()
// В этом случае значение this будет зависеть от контекста вызова, и оно будет неопределено (undefined),
// так как в строгом режиме (use strict) функции, вызванные вне контекста объекта, не имеют связанного this.

let boundObject = sayName.bind(object)
boundObject()
// В результате мы видим имя "Андрей", потому что при использовании bind мы явно указываем, что объект должен быть связан с this внутри функции.
// Это позволяет нам вызывать функцию с заданным контекстом объекта, не зависящим от того, как функция была объявлена.

const arrowFunc = () => {
  console.log(this.name);
};