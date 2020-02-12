const template = Component => `import React from 'react'
import '${Component}.scss'

export default function ${Component}(props) {
  return (
    <div className="${Component}">
      <p>${Component}</p>
    </div>
  )
}`

module.exports = template