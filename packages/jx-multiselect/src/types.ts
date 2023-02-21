type IItem = {
  label: string | number
  value: string | number
}

type ISize = {
  sm: string
  md: string
  lg: string
}

type IItemsList = {
  itemList: IItem[]
  size?: any
}

export { IItemsList, IItem, ISize }
