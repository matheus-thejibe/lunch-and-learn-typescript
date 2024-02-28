

function log(value: string) {
  console.log(value.trim())
}


const anyData: any = 1234
const unknownData: unknown = `a valid string`

log(anyData) // will throw "trim is not a function"
// log(unknownData) // TypeError


if (typeof unknownData === 'string') { // ## More about type guards 
  log(unknownData)
}


// ## We can't assign any values to a `never` type variable
// const neverData: never = 1234

export type ThisWillNeverHappen = string & number

