import React from 'react'
import {Link} from 'react-router-dom'
import '../style/myCSS.css'

export default function Menu() {

return (
  <div className='Menu'>
      <Link to='/'>My Kitchen</Link>
      <Link to='/recipes'>Create new recipe</Link>
      <Link to='/ingredients'>Create new ingredient</Link>
  </div>
)
}

