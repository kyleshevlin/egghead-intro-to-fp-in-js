// Functional composition like you learned in math class
const f = x => x + 1
const g = x => x * 2
const x = 3

const result = f(g(x)) // 7

// Slightly more practical composition
const scream = str => str.toUpperCase()
const exclaim = str => `${str}!`
const repeat = str => `${str} ${str}`

const string = 'Egghead.io is awesome'

const compose = (...fns) => x =>
  fns.reduceRight((acc, fn) => fn(acc), x)

const enhance = compose(repeat, exclaim, scream)

enhance(string) // EGGHEAD.IO IS AWESOME! EGGHEAD.IO IS AWESOME!
