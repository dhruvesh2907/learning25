import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
 <div>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link class="navbar-brand" to="/">Navbar</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to ="/home">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/movies">Movies</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo1">Form1</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo2">Form2</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo3">Form3</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo4">Form4</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo5">Form5</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo6">Form6</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo7">Form7</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo8">Form8</Link>
      </li>
      <li class="nav-item">
              <Link class="nav-link" to="/apidemo1">
              apidemo1
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/searchmovie">
              search movie
              </Link>
            </li>
      
      
    </ul>
    
  </div>
</nav>
          
    </div>
    
  )
}
