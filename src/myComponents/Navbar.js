import React from 'react'

export default function Header() {
    return (
        <div>
        <nav >
        <ul class="nav nav-tabs ">
         <li class="nav-item">
           <a class="nav-link Home" aria-current="page" href="#">Home</a>
         </li>
         <li class="nav-item">
           <a class="nav-link About" href="#">About</a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="#">Blogs</a>
         </li>
       </ul>
       </nav>
       </div>
    )
}
