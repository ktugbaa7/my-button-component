import React from 'react'

import { Button } from 'blushui'
import 'blushui/dist/index.css'

const App = () => {
  return (
    <>
      <Button type='primaryBtn' text='Primary Button' /> 
      <Button type='defaultBtn' text='Default Button' /> 
      <Button type='dashedBtn' text='Dashed Button' /> 
      <Button type='textBtn' text='Text Button' /> 
      <Button type='linkBtn' text='Link Button' /> 
    </>
  )
}

export default App
