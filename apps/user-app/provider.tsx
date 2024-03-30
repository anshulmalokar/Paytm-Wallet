"use client"
import React from 'react'
import { RecoilRoot } from "recoil"
type Props = {}

export default function Provider({children}: {children:React.ReactNode}) {
  return (
    <RecoilRoot>{children}</RecoilRoot>
  )
}