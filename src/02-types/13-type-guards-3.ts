


const val: unknown = {
  message: `hello!`
}


if (
  val !== null &&
  typeof val === 'object' &&
  'message' in val &&
  typeof val.message === 'string'
) {
  console.log(val.message.trim())
}



