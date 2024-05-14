import React from 'react'
import {CORE_CONCEPTS} from '../data.js'
import CoreConcept from './CoreConcept.jsx'
import Section from './Section.jsx'

function CoreConcepts() {
  return (
    <Section id="core-concepts">
        <ul >
        {/* for all core concepts there should be different divs */}
         {CORE_CONCEPTS.map((ele) => {
          //  ...ele props sends props altogether by using spread operator
           return <li><CoreConcept {...ele} /></li>
         })}
       </ul>
      </Section>
  )
}

export default CoreConcepts