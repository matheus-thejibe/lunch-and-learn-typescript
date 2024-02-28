


export type ConstantString = 'this is a constant'


export function checkConstantString(param: ConstantString) {
  console.log(param)
}

// ## Only the constant value is accepted
checkConstantString("this is a constant")

// ## Convert string into a constant

const person = {
  name: "this is a constant" as const
}
checkConstantString(person.name)



// ## anythign can be used as a constant type, even numbers!
export type Seven = 7


// ## I will talk about how this is useful in the next tutorial
