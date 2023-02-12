import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import Jxmutliselect from '../src/index'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(<Jxmutliselect name='ayush' />)
  })
})
