// Functional composition like you learned in math class
const f = x => x + 1
const g = x => x * 2
const x = 3

const result1 = f(g(x)) // 7

// Slightly more useful functions
const scream = str => str.toUpperCase()
const exclaim = str => `${str}!`
const repeat = str => `${str} ${str}`

const string = 'Egghead.io is awesome'

// Nested
const result2 = repeat(exclaim(scream(string)))
// EGGHEAD.IO IS AWESOME! EGGHEAD.IO IS AWESOME!

const compose = (...fns) => x =>
  fns.reduceRight((acc, fn) => fn(acc), x)

// Instead of nesting, compose your functions into a new function
const enhance = compose(repeat, exclaim, scream)

console.log(enhance(string))
// EGGHEAD.IO IS AWESOME! EGGHEAD.IO IS AWESOME!
