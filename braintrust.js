/*
Link on task https://github.com/gabo-cs/JS-Exercism/blob/92b4cdc6964c07907acf7ae4c638c3ea4f69c6a2/seating-students(CB)/README.md

Have the function SeatingStudents(arr) read the array of integers stored in arr which will be in the following format:
[K, r1, r2, r3, ...] where K represents the number of desks in a classroom, and the rest of the integers in the array
will be in sorted order and will represent the desks that are already occupied. All of the desks will be arranged in 2 columns,
where desk #1 is at the top left, desk #2 is at the top right, desk #3 is below #1, desk #4 is below #2, etc.
Your program should return the number of ways 2 students can be seated next to each other. This means 1 student
is on the left and 1 student on the right, or 1 student is directly above or below the other student.
For example: if arr is [12, 2, 6, 7, 11] then this classrooms looks like the following picture:

Based on above arrangement of occupied desks, there are a total of 6 ways to seat 2 new students next to each other.
The combinations are: [1, 3], [3, 4], [3, 5], [8, 10], [9, 10], [10, 12]. So for this input your program should return 6.
K will range from 2 to 24 and will always be an even number. After K, the number of occupied desks in the array can
range from 0 to K
*/

function SeatingStudents(arr) {
  // code goes here
  const [K, ...occupied] = arr
  let combs = 0

  const classroom = Array(K + 1)
  classroom.fill(true, 1)
  occupied.forEach((seat) => {
    classroom[seat] = false
  })

  classroom.forEach((seat, i) => {
    const isOdd = i % 2
    const right = isOdd && classroom[i + 1]
    const below = classroom[i + 2]

    if (seat) {
      if (right) combs++
      if (below) combs++
    }
  })
  return combs
}

// keep this function call here
SeatingStudents(readline())
