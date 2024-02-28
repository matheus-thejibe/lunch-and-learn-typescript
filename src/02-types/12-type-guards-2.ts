

export type PageItemNumber = {
  type: `number`,
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
  status: `PUBLISHED` | `DRAFT`
  data: AnyPageItem[]
}


function renderImage(item: PageItemImage) {
  // Do some react rendering
  console.log(item)
}


function renderText(item: PageItemText) {
  // Do some react rendering
  console.log(item)
}


function renderNumber(item: PageItemNumber) {
  // Do some react rendering
  console.log(item)
}

export function renderPage(page: Page) {
  for (const item of page.data) {
    if (item.type === 'image') {
      renderImage(item)
    } else if (isTextItem(item)) {
      renderText(item)
    } else {
      renderNumber(item)
    }
  }
}




function isTextItem(item: AnyPageItem): item is PageItemText {
  return item.type === 'text'
}
