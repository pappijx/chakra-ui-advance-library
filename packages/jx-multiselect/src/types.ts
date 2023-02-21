type TItem = {
  label: string | number
  value: string | number
}

type TSize = {
  sm: string
  md: string
  lg: string
}

type TItemsList = {
  itemList: TItem[]
  size?: any
  setListData: (data: any) => void
}

export { TItem, TSize, TItemsList }
