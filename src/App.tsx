import React from 'react'
import styled from '@emotion/styled'

function App() {
  return (
    <div className='App'>
      <Title>
        Swoon<Text>some text</Text>
      </Title>
    </div>
  )
}

const Title = styled.h1`
  color: #8675a9;
  background-color: #efbbcf;
`

const Text = styled.p`
  color: #c3aed6;
`

export default App
