
type inferFunctionResponse<T> = T extends () => infer U ? U : never
type inferPromiseValue<T> = T extends Promise<infer U> ? U : never
type inferAsyncResponse<T> = inferPromiseValue<inferFunctionResponse<T>>

function getProduct() {
  return Promise.resolve({
    price: '$20',
    title: 'Exaple'
  })
}


async function tryGetProduct() {
  let product: inferAsyncResponse<typeof getProduct> // let`s fix this type

  try {
    product = await getProduct()
  } catch (err) {
    console.error(err)
    return {
      notFound: true,
    }
  }

  return { product }
}










// type inferReturnType<T> = T extends (...args: any[]) => infer U ? U : never
// type inferPromiseResult<T> = T extends Promise<infer U> ? U : never






