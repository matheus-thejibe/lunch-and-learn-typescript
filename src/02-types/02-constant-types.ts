


export type ConstantString = 'this is a constant'


export function checkConstantString(param: ConstantString) {
  console.log(param)
}

// ## Only the constant value is accepted
checkConstantString("this is a constant")

// ## Convert string into a constant

const s = "this is a constant"
checkConstantString(s)



// ## anythign can be used as a constant type, even numbers!
export type Seven = 7


// ## I will talk about how this is useful in the next tutorial
