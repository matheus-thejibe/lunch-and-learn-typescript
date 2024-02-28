


type AllOptional = {
  color?: string
  brand?: string
}


type MakeAllRequired<T> = {
  [K in keyof T]-?: T[K]
}

type AllRequired = MakeAllRequired<AllOptional>

const allOptional: AllOptional = {
  color: 'Blue'
}

const allRequired: AllRequired = {
  brand: 'TheJibe',
  color: 'Blue'
}
