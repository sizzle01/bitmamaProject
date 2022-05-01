import React from 'react'
import './Tabs.css'
const Tabs = () => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="nav-link mb-0"
        href="#"
      >
        <i class="fa fa-columns nav-link mb-0"></i>
        Overview
      </a>
    </li>
    <li className="nav-item">
      <p className="nav-link mb-0 active">Repositories</p>
    </li>
    <li className="nav-item">
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="nav-link mb-0"
        href="#"
      >
        <i class="fa fa-window-maximize nav-link mb-0"></i>
        Projects
      </a>
    </li>
    <li className="nav-item">
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="nav-link mb-0"
        href="#"
      >
        Packages
      </a>
    </li>
    <li className="nav-item">
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="nav-link mb-0"
        href="#"
      >
        <i class="fa fa-star-o nav-link mb-0"></i>
        stars
      </a>
    </li>
  </ul>
)

export default Tabs
