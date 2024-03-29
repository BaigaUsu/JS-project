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
object.shoot()
object.shoot()
// // В этом случае стрелочная функция сохраняет контекст выполнения на момент создания (где она была определена),
// поэтому this в ней ссылается на глобальный объект (в браузере это window), а не на объект, у которого она вызвана.

arrowFunc()
// Результат будет undefined, так как this внутри стрелочной функции ссылается на контекст, в котором она была создана,
// и в данном случае это глобальный объект, у которого нет свойства name

const arrowBound = arrowFunc.bind(object)
arrowBound()
// Стрелочные функции не могут быть привязаны с помощью bind, поскольку они не имеют собственного контекста выполнения.
// Если попытаться сделать bind к объекту, это не приведет к привязке контекста, и this внутри функции останется неизменным (глобальный объект).

const greetingsAndNames = {
  greeting: "Привет",
  names: ["Жаныбек", "Алина", "Иван"],
  greetEveryone: function() {
    this.names.forEach(name => {
      console.log(`${this.greeting}, ${name}!`);
    });
  }
};

// Используя стрелочную функцию, мы избегаем проблем, связанных с изменением значения this при передаче метода как коллбека, так как значение this остается тем же самым, что и в окружающем контексте.
// Стрелочные функции часто более компактны и могут сделать код более читаемым, особенно в случае коротких функций, таких как в данном случае.
 

