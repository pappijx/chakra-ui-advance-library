import React, { useEffect, useRef, useState } from 'react'
import { Jxcheckbox } from 'jx-checkbox'
import { TItem, TItemsList } from './types'
import styled from 'styled-components'

const sizeObj: any = {
  sm: '28px',
  md: '36px',
  lg: '44px',
}

const Div: any = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
  height: ${(props: any) => sizeObj[props.size]};

  .trigger {
    border: solid 1px grey;
    cursor: pointer;
    border-radius: 0.5rem;
    height: ${(props: any) => sizeObj[props.size]};
    padding: 0px 0.8em;
    display: flex;
    align-items: center;
    overflow: auto;
    p {
      font-size: 1em;
    }
  }

  .dropdownlist {
    height: 20vh;
    width: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    input {
      border: solid 1px grey;
      padding: 1rem 0.5rem;
      border-radius: 0.3rem;
      height: 28px;
      font-size: 12px;
      margin-right: 5px;
    }

    ::-webkit-scrollbar {
      width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 5px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
`

const ListContainer: any = styled.div`
  padding: 0.5rem;
  box-shadow: 0px 0px 10px #0000002d;
  border-radius: 0.5rem;
  position: absolute;
  width: 100%;
  top: calc(${(props: any) => sizeObj[props.size]} + 8px);
`

const Tag: any = styled.div`
  background-color: #00a2ff53;
  font-size: 0.6em;
  font-weight: bold;
  padding: 2px 4px;
  border-radius: 4px;
`

const Jxmultiselect = ({ itemList, size = 'sm', setListData }: TItemsList) => {
  const [isOpen, onOpen] = useState<boolean>(false)
  const selectedElements = useRef<any[]>([])

  const selectItem = (e: any) => {
    const value = e.target.value
    const resultantArray: any[] = [...selectedElements.current]
    if (resultantArray.indexOf(value) === -1) {
      resultantArray.push(value)
    } else {
      resultantArray.splice(resultantArray.indexOf(value), 1)
    }

    selectedElements.current = resultantArray
    setListData(() => resultantArray)
  }

  return (
    <Div size={size}>
      <div onClick={() => onOpen((prev: boolean) => !prev)} className='trigger'>
        {selectedElements.current.length ? (
          selectedElements.current.map((item, index) => {
            return <Tag key={index}>{item}</Tag>
          })
        ) : (
          <p>Click</p>
        )}
      </div>
      {isOpen && (
        <ListContainer size={size}>
          <div className='dropdownlist'>
            <input type='text' onChange={selectItem} placeholder='search item here...' />
            {itemList.length ? (
              React.Children.toArray(
                itemList.map((item: TItem) => {
                  return (
                    <Jxcheckbox
                      label={item.label}
                      value={item.value}
                      checked={selectedElements.current.indexOf(item.value) !== -1}
                      onChange={selectItem}
                    />
                  )
                }),
              )
            ) : (
              <span>nothing to show</span>
            )}
          </div>
        </ListContainer>
      )}
    </Div>
  )
}

export { Jxmultiselect, TItem, TItemsList }
