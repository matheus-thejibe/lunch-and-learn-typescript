
// ## I'm using CMS pages in this example

export type PageItemNumber = {
  type: `number`, // this is a constant string type
  value: number
}

export type PageItemText = {
  type: `text`,
  value: string
}

export type PageItemImage = {
  type: `image`,
  value: {
    url: string,
    width: number,
    height: number
  }
}

export type AnyPageItem = PageItemNumber | PageItemImage | PageItemText

export type Page = {
  title: string
  status: `PUBLISHED` | `DRAFT`   // ## Use a union type as an enumerator type
  data: AnyPageItem[]
}


export const mainPage: Page = {
  title: 'Test',
  status: `PUBLISHED`,
  data: [
    {
      type: 'number',
      value: 10,
    },
    {
      type: 'image',
      value: {
        url: 'http://example.com',
        width: 100,
        height: 100,
      }
    },
    {
      type: 'image',
      value: {
        url: 'asds',
        height: 1,
        width: 1,
      }
    }
  ]
}



