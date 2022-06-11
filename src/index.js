import React from 'react'
import ReactDom from 'react-dom'

import Hello from './components/hello'

const root = ReactDom.createRoot(document.getElementById('root'))

root.render(<Hello/>);