import { Link } from "gatsby"
import React from "react"
import parser from "html-react-parser"

const FromBlog = props => {
  let { data } = props
  return data.map((index, key) => {
    return (
      <Link to={index.url} key={key}>
        <div>
          <h4>{index.title}</h4>
          {parser(index.body.slice(0, 80))}
        </div>
      </Link>
    )
  })
}

export default FromBlog
