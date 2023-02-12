import React from 'react'
import Jxcheckbox from 'jx-checkbox'
import { IItem, IItemsList } from './types'

const Jxmultiselect = ({ itemList }: IItemsList) => {
  return (
    <div>
      <input type='text' />
      {itemList.length ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {React.Children.toArray(
            itemList.map((item: IItem) => {
              return <span>{item.label}</span>
            }),
          )}
        </div>
      ) : (
        <span>nothing to show</span>
      )}
      <Jxcheckbox />
    </div>
  )
}

export { Jxmultiselect, IItem, IItemsList }
