
// type vs interface

export interface IHuman {
  name: string
  age: number
  getNextBirthday(): Date
}

export type THuman = {
  name: string
  age: number
  getNextBirthday(): Date
}

// ## Classes can implement both interfaces and types
export class MyHuman implements IHuman {
  name: string = ``
  age: number = 0
  getNextBirthday(): Date {
    return new Date()
  }
}


// ## Union types (can't do with interfaces)
export type AnyHuman = THuman | IHuman

// ## Intersection types (can't do with interfaces)
export type SuperHuman = THuman & { superpower: string }


// ## We are going to use only the type syntax from now on...



