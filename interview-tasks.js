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

/*###### Полифилл для Object.create() ######*/
if (!Object.create) {
  Object.create = function (o) {
    function F() {}
    F.prototype = o
    return new F()
  }
}

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
    //console.log(res)
    return f
  }
  // console.log(res)
  return f
}
sum(1)(2)(3)

/*###### Polyffil Bind  ######*/

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

/*###### Anagram  ######*/
function anagram(first, second) {
  return (
    first.toLowerCase().split('').sort().join() ===
    second.toLowerCase().split('').sort().join()
  )
}

//console.log(anagram('friend', 'finder'))

/*###### Цикл for и SetTimeOut  ######*/
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i)
//   }, 100)
// }

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i)
//   }, 100)
// }

// for (var i = 0; i < 3; i++) {
//   ;(function (i) {
//     setTimeout(() => {
//       console.log(i)
//     }, 100)
//   })(i)
// }

// Можно передать аргументы которые будут прокинуты в качестве аргументов callback функции
// for (var i = 0; i < 3; i++) {
//   setTimeout(
//     (i) => {
//       console.log(i)
//     },
//     100,
//     i
//   )
// }

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

/*###### Selection sort  ######*/
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }

    let swap = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = swap
  }
  return arr
}

//console.log(selectionSort(arr))

/*###### Quick Sort ######*/
function quickSort(arr) {
  if (arr.length < 2) return arr
  let left = []
  let right = []
  let p = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < p) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return quickSort(left).concat(p, quickSort(right))
}

//console.log("quickSort", quickSort([6, 34, 8, 1, 41, 59, 764, 3]));

/*###### Bubble sort ######*/
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j - 1] > arr[j]) {
        let swap = arr[j - 1]
        arr[j - 1] = arr[j]
        arr[j] = swap
      }
    }
  }

  return arr
}
//console.log(bubbleSort(arr))

/*###### Merge Sort ######*/
function merge(left, right) {
  //Вспомогательная функция.
  let result = []

  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }

  return result.concat(left, right)
}

function mergeSort(array) {
  //Функция сортировки слиянияем.
  if (array.length < 2) {
    return array
  }

  let middle = Math.floor(array.length / 2)
  let left = array.slice(0, middle)
  let right = array.slice(middle)

  return merge(mergeSort(left), mergeSort(right))
}

//console.log('mergeSort', mergeSort([6, 34, 8, 1, 41, 59, 764, 3]))

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

      // идем до конца впра во
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

console.log(flatArr(arrflat))

// на знание event loop
console.log('script start')

setTimeout(function () {
  console.log('setTimeout')
}, 0)

Promise.resolve()
  .then(function () {
    console.log('promise1')
  })
  .then(function () {
    console.log('promise2')
  })

console.log('script end')

// Own map arr function
Array.prototype.mymap = function (callback) {
  const resultArray = []
  for (let index = 0; index < this.length; index++) {
    resultArray.push(callback(this[index], index, this))
  }
  return resultArray
}
