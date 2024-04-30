import React from 'react'

function TabContent({examples}) {
  return (
    <div id="tab-content">
        <h3>{examples?.title}</h3>
        <p>{examples?.description}</p>
        <pre>
          <code>
            {examples?.code}
          </code>
        </pre>
    </div>
  )
}

export default TabContent