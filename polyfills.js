/*###### Polyfill for call, apply, bind  ######*/
let car1 = {
  color: 'Red',
  company: 'Ferrari',
}

let car2 = {
  color: 'Blue',
  company: 'BMW',
}

let car3 = {
  color: 'White',
  company: 'Mercedes',
}

function purchaseCar(currency, price) {
  console.log(
    `I have purchased ${this.color} - ${this.company} car for ${currency}${price} `
  )
}

Function.prototype.myBind = function (currentContext = {}, ...arg) {
  if (typeof this !== 'function') {
    throw new Error(this + "cannot be bound as it's not callable")
  }
  currentContext.fn = this
  return function () {
    return currentContext.fn(...arg)
  }
}

Function.prototype.myApply = function (currentContext = {}, arg = []) {
  if (typeof this !== 'function') {
    throw new Error(this + "it's not callable")
  }
  if (!Array.isArray(arg)) {
    throw new TypeError('CreateListFromArrayLike called on non-object')
  }
  currentContext.fn = this
  currentContext.fn(...arg)
}

Function.prototype.myCall = function (currentContext = {}, ...arg) {
  if (typeof this !== 'function') {
    throw new Error(this + "it's not callable")
  }
  currentContext.fn = this
  currentContext.fn(...arg)
}

const initPurchaseBmw = purchaseCar.myBind(car1, '$', '1,00,00,000')
initPurchaseBmw()
purchaseCar.myApply(car2, ['$', '50,00,000'])
purchaseCar.myCall(car3, '$', '60,00,000')
/*#############################*/

/*###### Polyfill Bind  ######*/
function bind(cb, context) {
  return function () {
    return cb.apply(context, arguments)
  }
}
function fn(a, b) {
  console.log(a, b, this)
}
var magicFn = bind(fn, {})
//magicFn(2, 3)
/*#############################*/

/*###### Polyfill Bind2  ######*/
Function.prototype.bind = function (context, ...argsBind) {
  const fn = this

  return function (...args) {
    return fn.apply(context, argsBind.concat(args))
  }
}
/*#############################*/

/*###### Polyfill new constructor  ######*/
function Foo(Constr, ...args) {
  let thisValue = Object.create(Constr.prototype)
  Constr.apply(thisValue, [...args])

  return thisValue
}

function Book(name, author) {
  this.name = name
  this.author = author
  return this
}

const res = Foo(Book, 'Учебник javascript', 'Петр Сергеев')

//console.log(res)
/*#############################*/

/*###### Polyfill  Object.create() ######*/
if (!Object.create) {
  Object.create = function (o) {
    function F() {}
    F.prototype = o
    return new F()
  }
}
/*#############################*/

/*###### Inheritance ES5 ######*/
function Legoman {
    return "I am parent"
}

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype)
  Child.prototype.constructor = Child
  Child.superclass = Parent.prototype // optional
}

function LegoBatMan(name){
  LegoBatMan.superclass.constructor.call(this, name)
}

extend (LegoBatMan, Legoman)
/*#############################*/

/*############ My Reduce #################*/
Array.prototype.myReduce = function (callback, initialValue) {
  if (this == null) {
      throw  TypeError("Array.prototype.reduce called on null or undefined");
  }

  if (typeof callback !== "function") {
     throw TypeError(`${callback} is not a function`);
  }

  let acc = arguments.length === 1 ? this[0] : initialValue;
  let start = arguments.length === 1 ? 1 : 0;

  const length = this.length;

  for (let i = start; i < length; i++) {
    acc = callback(acc, this[i], i, this);
  }

  return acc;
};

// console.log(
//   [1, 2, 3, 4, 5].myReduce((acc, elem, index, arr) => {
//     return acc + elem;
//   }, 0)
// ); // => 15
/*#############################*/