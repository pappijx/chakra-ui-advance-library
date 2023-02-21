import React from 'react'
import { ICheckBox } from './types'
import styled from 'styled-components'

const Div: any = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  padding: 0.4rem;
  z-index: 0;
  cursor: pointer;
  border-radius: 0.5rem;
  :hover {
    background-color: #0091ff15;
  }
  input {
    cursor: pointer;
    z-index: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    left: 0;
    top: 0;
  }
  span {
    width: 16px;
    height: 16px;
    border: solid 1px grey;
    border-radius: 0.3rem;
    color: white;
  }

  p {
    font-size: 14px;
    margin-top: -1px;
  }

  input:checked ~ span {
    position: relative;
    border: solid 1px #28a5ff;
    background-color: #28a5ff;
  }
  input:checked ~ span::before {
    content: '✔';
    font-size: 10px;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
  }
`

const Jxcheckbox = ({ label, value, onChange, ...props }: any) => {
  return (
    <Div>
      <input type='checkbox' onChange={onChange} {...props} value={value} />
      <span></span>
      <p>{label}</p>
    </Div>
  )
}

export { Jxcheckbox, ICheckBox }
