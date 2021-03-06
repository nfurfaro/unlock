import React from 'react'
import Svg from '../../svg'
import { LockButton } from '../Button'

const Upload = (props) => (
  <LockButton {...props}>
    <Svg.Upload />
  </LockButton>
)

export default Upload
