import React from 'react'
import { render } from 'react-dom'
import Cornerstone from './components/cornerstone-app'
import  './index.css'

const reactRendersHere = document.querySelector("#react-renders-here")
render(<Cornerstone/>, reactRendersHere )