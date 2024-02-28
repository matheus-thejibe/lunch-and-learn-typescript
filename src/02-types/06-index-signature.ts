


export type Keys = `color` | `brand` | `size`

export type Metafields = {
  // [k: string]: string
  // [k in Keys]: string
  [k in Keys]?: string
}



export type Product = {
  title: string
  price: string
  tags: string[]
  metafields: Metafields
}


export const product: Product = {
  title: 'Notebook',
  price: '$500',
  tags: [],
  metafields: {
    // color: 'grey',
    brand: 'Samsumg',
    // size: '13'
  },
}


// ## keyof
type CommerceProvider = {
  productList: (first: number, after: string) => Promise<Product[]>
  product: (handle: string) => Promise<Product>
}

type CommerceServices = keyof CommerceProvider

// const serviceName: CommerceServices = 'product'







type MF = {
  metafields: {
    key: string
  }[]
}

// ## access type key

type ProductTags = MF["metafields"][number]["key"]

// const tags: ProductTags = ["sale", "summer"]
