import React from 'react'
import './Repositories.css'
const Repository = () => (
  <div className="repo">
    <div>
      <div className="title">
        <i className="fa fa-book pr-1" />
        <a href="#" target="_blank" rel="noopener norefferer">
          <span>repository</span>
        </a>
      </div>
      <span className="description">repository</span>
    </div>
    <div className="d-flex">
      <div className="subitem">
        <i className="fa fa-code pr-1" />
        <span>Language</span>
      </div>
      <div className="subitem">
        <i className="fa fa-star pr-1" />
        <span>watchCount</span>
      </div>
      <div className="subitem">
        <i className="fa fa-code-fork pr-1" />
        <span>Fork Number</span>
      </div>
    </div>
  </div>
)

export default Repository
