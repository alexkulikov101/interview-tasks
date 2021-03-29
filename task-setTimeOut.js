/*###### Цикл for и SetTimeout  ######*/
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i)
  }, 100)
}

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

// // Можно передать аргументы которые будут прокинуты в качестве аргументов callback функции
// for (var i = 0; i < 3; i++) {
//   setTimeout(
//     (i) => {
//       console.log(i)
//     },
//     100,
//     i
//   )
// }

// for (var i = 0; i < 10; i++) {
//   setTimeout(
//     function (i) {
//       console.log(i)
//     }.bind(this, i),
//     100
//   )
// }

/*#############################*/
