
export function Sum(a: number, b: number): number {
  return a + b
}


export type SumObjType = { value: number }


export function SumObj(a?: SumObjType, b?: SumObjType): number {
  return (a?.value || 0) + (b?.value || 0)
}
