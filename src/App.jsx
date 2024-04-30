import CoreConcepts from './CoreConcepts.jsx';
import {CORE_CONCEPTS} from './data.js'
import TabButton from './TabButton.jsx';
import {useState} from 'react'
import { EXAMPLES } from './data.js';
import TabContent from './TabContent.jsx';
function Header() {

  return (
    <div>
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    </div>
  );
}
function App() {
  const [selectedValue, setSelectedValue] = useState();

  const handleSelect = (stateName) => {
    setSelectedValue(stateName);
    console.log('selectedValue', selectedValue)

  }
  return (
    <div>
      <Header/>
      <main>
        <h2>Time to get started!</h2>
      <div id="core-concepts">
        <ul >
         {CORE_CONCEPTS.map((ele) => {
           return <li><CoreConcepts {...ele}/></li>
         })}
       </ul>
      </div>
      <div id="examples">
        <h2>Examples</h2>
        <menu>
           <TabButton isSelected={selectedValue === 'components'}  onSelect={()=> handleSelect('components')} >Components</TabButton>
           <TabButton isSelected={selectedValue === 'jsx'} onSelect={()=> handleSelect('jsx')} >JSX</TabButton>
           <TabButton isSelected={selectedValue === 'props'} onSelect={()=> handleSelect('props')} >Props</TabButton>
           <TabButton isSelected={selectedValue === 'state'} onSelect={()=> handleSelect('state')} >State</TabButton>
        </menu>
         {selectedValue ? <TabContent examples={EXAMPLES[selectedValue]} /> : <TabContent examples={EXAMPLES['jsx']} />}
      </div>
    </main>

    </div>
  );
}

export default App;
