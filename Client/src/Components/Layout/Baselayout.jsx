import React from 'react'
import { Header } from './Header'


export const Baselayout = ({children}) => {
  return (
    <div>
<Header/>
{children}
    </div>
  )
}
