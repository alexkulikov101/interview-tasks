/*
Необходимо переписать на ES5, на функции, сделать код максимально похожим на то что имеем с классами.
*/

class Human1 {
  constructor(name) {
    this.name = name
  }

  static getHeadNumber() {
    return 1
  }

  getName() {
    return this.name
  }
}

class Man1 extends Human1 {
  constructor(name) {
    super(name)
    this.gender = 'M'
  }

  getGender() {
    return this.gender
  }
}

console.dir(Human1)
console.dir(Man1)

const man1 = new Man1('Павел')
console.log(man1)
console.log(man1.getName())
console.log(man1.getGender())
console.log(Man1.getHeadNumber())

/****************** Ответ ************************ */

function Human2(name) {
  this.name = name
}

Human2.getHeadNumber = function () {
  return 1
}

Object.defineProperty(Human2, 'getHeadNumber', {
  enumerable: false,
})

Human2.prototype.getName = function () {
  return this.name
}

function Man2(name) {
  Man2.superclass.constructor.call(this, name)
  this.gender = 'M'

  this.getGender = function () {
    return this.gender
  }
}

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype)
  Child.prototype.constructor = Child
  Child.superclass = Parent.prototype
}

extend(Man2, Human2)

console.dir(Human2)
console.dir(Man2)

const man2 = new Man2('Павел')

console.log('man2', man2)
console.log(man2.getName())
console.log(man2.getGender())
console.log(Man2.superclass.constructor.getHeadNumber())
