import { CircularProgress } from '@mui/material'
import React from 'react'
import { Container } from './styled'

export default function Loading() {
  return (
    <Container>
        <CircularProgress color="success" />
    </Container>
  )
}
