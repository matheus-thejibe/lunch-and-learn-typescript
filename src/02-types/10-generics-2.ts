
export type Metafields = {
  metafields: {
    key: string
    value: any,
  }[]
}

export type Product = {
  title: string
  price: string
} & Metafields


export type Page = {
  title: string
  data: {
    [k: string]: any
  }
} & Metafields


function getMetafields<T extends Metafields>(data: T, key: string) {
  return data.metafields.find(m => m.key === key)
}

const product: Product = {
  title: 'Chocolate Box',
  price: `$5`,
  metafields: [
    {
      key: `brand`,
      value: `Lindt`
    }
  ]
}

const page: Page = {
  title: 'Chocolate Page',
  data: {},
  metafields: [
    {
      key: `brand`,
      value: `Lindt`
    }
  ]
}

const productBrand = getMetafields(product, 'brand')
const pageBrand = getMetafields(page, 'brand')

console.log({ productBrand, pageBrand })
