


const value: unknown = 10


function log(data: unknown) {
  // IF
  if (typeof data === 'string') {
    console.log(data.trim())
  }

  // SWITCH 
  switch (typeof data) {
    case "string":
      console.log(data.trim())
      break;
    case "number":
      console.log(data.toFixed(2))
      break;
    case "boolean":
      console.log(data ? `YES` : `NO`)
      break;
    // ETC
    case "bigint":
    case "symbol":
    case "undefined":
    case "object":
    case "function":
      console.log(`Cannot log ${typeof data} type`)
      break;
  }

  // type guard function
  if (isString(data)) {
    console.log(data.trim())
  }
}


function isString(data: unknown): data is string {
  return typeof data === 'string'
}
