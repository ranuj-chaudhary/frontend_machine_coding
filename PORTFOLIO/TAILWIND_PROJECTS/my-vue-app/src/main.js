import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
   <h1 class="text-4xl text-red-600 font-bold underline">
        Hello world!
      </h1>
`

setupCounter(document.querySelector('#counter'))
