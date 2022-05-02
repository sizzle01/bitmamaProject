import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchReposAction } from '../../Redux/slices/reposSlice'
import './Repositories.css'

const Repository = ({ repo }) => (
  <>
    <div className="repo">
      <div className="repo-info">
        <div className="title-wrapper">
          <div className="title">
            <i className="fa fa-book pr-1" />
            <a href={repo?.html_url} target="_blank" rel="noopener norefferer">
              <span className="repo-name">{repo?.name}</span>
            </a>
          </div>
          <span className="repo-security">{repo?.visibility}</span>
        </div>
        <span className="description">{repo?.description}</span>
      </div>
      <div className="d-flex repo-stats">
        <div className="subitem">
          <i className="fa fa-code pr-1" />
          <span>{repo?.language}</span>
        </div>
        <div className="subitem">
          <i className="fa fa-star pr-1" />
          <span> {repo?.watchers_count}</span>
        </div>
        <div className="subitem">
          <i className="fa fa-code-fork pr-1" />
          <span>{repo?.forks}</span>
        </div>
      </div>
    </div>
  </>
)

export default Repository
