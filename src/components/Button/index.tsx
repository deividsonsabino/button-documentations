import React from 'react'
import { ButtonStyle } from './style'

interface ButtonProps {
    name: string
}

export default function Button({name}:ButtonProps) {
  return (
      <ButtonStyle>{name}</ButtonStyle>
  )
}
