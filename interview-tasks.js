const arr = [1, 5, 7, 66, 45, 3, 89]
const arrSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
const str1 = 'aaabbcccccd'
const str2 = 'hello world'

/*###### Max number in arr ######*/
/*1*/
function max(arr) {
  let max = arr[0]
  let length = arr.length

  for (let i = 0; i < length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }

  return max
}
//console.log(max(arr))

/*2*/
Math.max.apply(null, arr)

/*###### Find ######*/
function find(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return arr[i]
    }
  }

  return -1
}
//console.log(find(arr, 5))

/*###### Search ######*/
function strCompress(str) {
  let counter = 1
  let result = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      counter++
    } else {
      result += counter + str[i]
      counter = 1
    }
  }
  return result
}
//console.log(strCompress(str1))

/*###### decToBinary ######*/
function decToBinary(num) {
  let stack = []
  let str = ''
  while (num > 0) {
    let rem = num % 2
    stack.push(rem)
    num = Math.floor(num / 2)

    while (stack.length) {
      str = str + stack.pop()
    }
  }
  return str
}
//console.log(decToBinary(123))

/*###### 2cc ######*/
function toBinary(decnum) {
  return parseInt(decnum, 10).toString(2)
}
//console.log(toBinary(123))

function toDecimal(binary) {
  return parseInt(binary, 2).toString(10)
}
//console.log(toDecimal(1111011))

/*###### hello world.repeating(3) -> hello world hello world hello world ######*/
String.prototype.repeating = function (num) {
  var res = ''
  for (let i = 0; i < num; i++) {
    res += this + ' '
  }

  return res
}
//console.log('hello world'.repeating(3))

/*###### Palindrom ######*/
function checkPalindrom(str) {
  str = str.toLowerCase().replace(/\s/g, '')
  return str == str.split('').reverse().join('')
}

function palindrome2(str) {
  const len = Math.floor(str.length / 2)
  for (let i = 0; i < len; i++)
    if (str[i] !== str[str.length - i - 1]) {
      return false
    }
  return true
}
//console.log(checkPalindrom('dovod'))

/*###### fizzBuzz  ######*/
const fizzBuzz = (num) => {
  for (let i = 1; i <= num; i++) {
    // Проверяем, кратно ли число 3 и 5
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz')
    } // Проверяем, кратно ли число 3
    else if (i % 3 === 0) {
      console.log('fizz')
    } // Проверяем, кратно ли число 5
    else if (i % 5 === 0) {
      console.log('buzz')
    } else {
      console.log(i)
    }
  }
}

/*###### fizzBuzz  ######*/
const fibonacci1 = (num) => {
  // Сохраняем последовательность Фибоначчи, которую собираемся сгенерировать,
  // внутри массива и инициализируем массив первыми двумя числами последовательности
  const result = [0, 1]

  for (let i = 2; i <= num; i++) {
    // Поместим сумму двух чисел, предшествующих позиции i в массиве результатов,
    // в конец этого массива
    const prevNum1 = result[i - 1]
    const prevNum2 = result[i - 2]
    result.push(prevNum1 + prevNum2)
  }
  // Вернём последнее значение из массива результатов
  return result[num]
}

const fibonacci2 = (num) => {
  // Если num равно 0 или 1, возвращаем num
  if (num < 2) {
    return num
  }
  // Рекурсия здесь
  return fibonacci2(num - 1) + fibonacci2(num - 2)
}

const fibonacci3 = (num) => {
  let a = 1
  let b = 1
  for (let i = 3; i <= num; i++) {
    let c = a + b
    a = b
    b = c
  }
  return b
}

//console.log(fibonacci3(7))

/*###### sum(1)(2)(3)  ######*/
function sum(a) {
  let res = a
  function f(b) {
    res += b
    console.log(res)
    return f
  }
  // console.log(res)
  return f
}
//sum(1)(2)(3)(4)(5)
/*#############################*/

/*###### Anagram  ######*/
function anagram(first, second) {
  return (
    first.toLowerCase().split('').sort().join() ===
    second.toLowerCase().split('').sort().join()
  )
}

//console.log(anagram('friend', 'finder'))

/*###### binarySearch  ######*/
function binarySearch(arr, item) {
  // O(log n)
  let start = 0
  let end = arr.length
  let middle
  let found = false
  let position = -1
  while (found === false && start <= end) {
    middle = Math.floor((start + end) / 2)
    if (arr[middle] === item) {
      found = true
      position = middle
    }

    if (item < arr[middle]) {
      end = middle - 1
    } else {
      start = middle + 1
    }
  }

  return position
}

//console.log(binarySearch(arrSort, 5))

// Benary Search Tree
function workWithBST() {
  // Вспомогательный класс
  class Node {
    constructor(value) {
      this.value = value // значение текущего узла
      this.parent = null // ссылка на родителя
      this.left = null // ссылка на левого потомка
      this.right = null // ссылка на правого потомка
    }
  }

  class BinarySearchTree {
    constructor() {
      this.root = null // корень никуда не ссылается
    }

    add(value) {
      this.root = addWithin(this.root, value)

      function addWithin(node, value) {
        if (!node) {
          return new Node(value)
        }

        if (node.value === value) {
          return node
        }

        if (value < node.value) {
          node.left = addWithin(node.left, value)
        } else {
          node.right = addWithin(node.right, value)
        }

        return node // вернем наш узел который мы добавили
      }
    }

    has(value) {
      return searchWithin(this.root, value) // начинаем поиск с корня дерева

      function searchWithin(node, value) {
        if (!node) {
          return false
        }

        if (node.value === value) {
          return true
        }

        return value < node.value
          ? searchWithin(node.left, value)
          : searchWithin(node.right, value)
      }
    }

    remove(value) {
      this.root = removeNode(this.root, value)

      function removeNode(node, value) {
        if (!node) {
          // если нет поддеревьев
          return null
        }

        if (value < node.left) {
          node.left = removeNode(node.left, value) // иди удали влево
          return node
        } else if (node.value < value) {
          node.right = removeNode(node.right, value) // иди удали  вправо
          return node
        } else {
          // равно node
          if (!node.left && !node.right) {
            // у текущего узла нет потомков
            return null
          }

          if (!node.left) {
            node = node.right // если нету левого то мы ссылаемся на прового потомка
            return node
          }

          if (!node.right) {
            node = node.left
            return node
          }

          // если есть оба потомка то мы находим миниму на правом поддереве

          let minFromRight = node.right
          while (minFromRight.left !== null) {
            // идем до конца влево, пока кто то есть слева
            minFromRight = minFromRight.left
          }

          node.value = minFromRight.value

          node.right = removeNode(node.right, minFromRight.value)

          return node
        }
      }
    }

    min() {
      if (!this.root) {
        return null
      }

      // идем до конца влево
      let node = this.root
      while (node.left) {
        node = node.left
      }

      return node.value // возвращаем листок
    }

    max() {
      if (!this.root) {
        return null
      }

      // идем до конца вправо
      let node = this.root
      while (node.right) {
        node = node.right
      }

      return node.value // возвращаем листок
    }
  }

  function addItem() {
    console.log('\nAdd Item')
    console.log('add 13, 15, 14, 9, 20, 19, 21, 6, 11')

    bst.add(13)
    bst.add(15)
    bst.add(14)
    bst.add(9)
    bst.add(20)
    bst.add(19)
    bst.add(21)
    bst.add(6)
    bst.add(11)
  }

  function getItem() {
    console.log('\nGet Item')

    console.log('has 10', bst.has(10))
    console.log('has 15', bst.has(15))
    console.log('\n', bst)

    console.log('\nLeft Traverse:')
    bst.leftTraverse((val) => console.log(val))

    console.log('\nRight Traverse:')
    bst.rightTraverse((val) => console.log(val))

    console.log('min:', bst.min())
    console.log('max:', bst.max())
  }

  function removeItem() {
    console.log('\nRemove Item')

    bst.remove(15)
    console.log('remove 15')
    console.log(bst)

    console.log('\nLeft Traverse:')
    bst.leftTraverse((val) => console.log(val))
  }

  console.log('\n\n---Binary Search Tree---')
  const bst = new BinarySearchTree()

  addItem()
  getItem()
  removeItem()
}

// Own flat arr function
const arrflat = [2, 2, 5, [5, [5, [6, [5, 6, 7]]], 7]]

const flatArr = (arr) => {
  return arr.reduce((acc, el) => {
    return acc.concat(Array.isArray(el) ? flatArr(el) : el)
  }, [])
}

//console.log(flatArr(arrflat))

// на знание event loop
// console.log('script start')

// setTimeout(function () {
//   console.log('setTimeout')
// }, 0)

// Promise.resolve()
//   .then(function () {
//     console.log('promise1')
//   })
//   .then(function () {
//     console.log('promise2')
//   })

// console.log('script end')

// Own map arr function
Array.prototype.mymap = function (callback) {
  const resultArray = []
  for (let i = 0; i < this.length; i++) {
    resultArray.push(callback(this[i], i, this))
  }
  return resultArray
}

// Сумма всех вершин дерева
const binaryTree = {
  value: 1,

  left: {
    value: 10,
    left: {
      value: 45,
      left: {
        value: 20,
      },
      right: {
        value: 1,
      },
    },
    right: {
      value: 55,
    },
  },

  right: {
    value: 19,
    left: {
      value: 4,
    },
    right: {
      value: 5,
    },
  },
}

const sumTree = (tree) => {
  let count = tree.value
  if (tree.left) {
    count = count + sumTree(tree.left)
  }
  if (tree.right) {
    count = count + sumTree(tree.right)
  }

  return count
}

//console.log(sumTree(binaryTree)) // 160

/*###### Из массива в объект ######*/
var arr4 = [
  { name: 'width', value: 10 },
  { name: 'height', value: 20 },
]

function getObj(arr) {
  var obj = {}

  arr.forEach(function (item) {
    obj[item.name] = item.value
  })

  return obj
}
//console.log(getObj(arr4)) // {width: 10, height: 20}
/*###################################*/

/*###### В массиве парных положительных чисел найти непарное число ######*/
function findWithoutPair(arr) {
  const col = new Set()

  for (let i = 0; i < arr.length; i++) {
    if (!col.has(arr[i])) {
      col.add(arr[i])
    } else {
      col.delete(arr[i])
    }
  }

  return [...col][0]
}

//console.log(findWithoutPair([1, 8, 4, 5, 1, 4, 8])) // 5
/*###################################*/

/*###### В массиве парных положительных чисел найти непарное число ######*/
// function removeDuplicate(arr) {
//   return [...new Set(arr)]
// }

function removeDuplicate(arr) {
  return [...new Set(arr)]
}

//console.log(removeDuplicate([1, 8, 4, 5, 1, 4, 8])) // 5
/*###################################*/

var search = function (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i
    } else {
      return -1
    }
  }
}

console.log(search([-1, 0, 3, 5, 9, 12], 9))

/*######
Согласно григорианскому календарю,
I век н. э. начался 1 января 1 года и закончился 31 декабря 100 года.
II век начался в 101 году, III век — в 201 и т. д.
нужно написать функцию, которая возвращает век, которому соответствует заданный год
 ######*/
function centuryFromYear(year) {
  return Math.ceil(year / 100)
}

centuryFromYear(1705) // 18
centuryFromYear(1900) // 19
centuryFromYear(1601) // 17
centuryFromYear(2000) // 20
/*###################################*/

/*######
 Есть два сортированных массива с числами.
 Нужно написать функцию, которая возвращает новый массив,
 содержащий элементы, которые встречаются в обоих массивах.
######*/
function findEqualElements(arr1, arr2) {
  const res = arr1.filter((element) => arr2.includes(element))

  return console.log(res)
}

// Примеры
findEqualElements([1, 2, 3], [2]) // => [2]
findEqualElements([2], [1, 2, 3]) // => [2]
findEqualElements([1, 2, 2, 3], [2, 2, 2, 2]) // => [2, 2]
/*###################################*/

/***************************/
// var n = 1;

// function f(n) {
//   n = 3;
// }
// f(n);

// console.log(n); // 1 в функцию попал примитив и мы сделали копию этого n
/***************************/

// var obj = { a: 1 };

// function f1(o) {
//   o.a = 5;
// }
// f1(obj);

// console.log(obj); // { a: 5 }
/***************************/

// var obj = { a: 1 };

// function f2(o) {
//   o = { hello: 1 };
// }

// f2(obj);

// console.log(obj); // { a: 1 };

/*#######################################*/
// Что будет в консоли после выполнения фрагмента кода?

var i = 10
var array = []

while (i--) {
  array.push(function () {
    return i + i
  })
}

console.log([
  array[0](), // -2
  array[1](), // -2
])
/*#######################################*/

/*#########  queueTime ###################*/
function queueTime(customers, n) {
  const arr = new Array(n).fill(0)

  for (let i = 0; i < customers.length; i++) {
    const minIndex = arr.indexOf(Math.min(...arr))
    arr[minIndex] = arr[minIndex] + customers[i]
  }

  return Math.max(...arr)
}

//console.log(queueTime([5, 3, 4], 1)); // => 12
//console.log(queueTime([10, 2, 3, 3], 2)); // => 10
//console.log(queueTime([2, 3, 10], 2)); // => 12
//console.log(queueTime([16, 14, 10, 3, 13, 9, 8, 19, 18, 20, 3, 7, 4, 16, 3], 6)); //=> 32
/*#######################################*/
