import React from 'react'

function Section({children, ...props}) {
  return (
    <div {...props}>
        {children}
    </div>
  )
}

export default Section