

type PageItemText = {
  type: 'text',
  value: string
}

type PageItemImage = {
  type: 'image',
  value: {
    url: string
    width: number
  }
}

type PageItem = PageItemText | PageItemImage



function logPageItem(data: PageItem) {
  console.log(data)
}


logPageItem({
  type: 'image',
  value: {
    url: 'asdasd'
  }
} as PageItemImage)



logPageItem({
  type: 'image',
  value: {
    url: 'example.com',
    width: 123,
  }
} satisfies PageItemImage)




