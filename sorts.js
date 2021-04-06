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
/*####################################################################*/

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
/*####################################################################*/

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
/*####################################################################*/

/*###### Selection sort / Сортировка выбором  ######*/
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
/*####################################################################*/
