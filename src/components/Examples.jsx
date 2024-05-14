import React from "react";
import { EXAMPLES } from "../data";
import TabButton from "../TabButton";
import TabContent from "../TabContent";
import { useState } from "react";
import Section from "./Section";
import Tabs from "./Tabs";

function Examples() {
  // for tabs, selectedvalue shows the state of the tabs.
  const [selectedValue, setSelectedValue] = useState();

  /**
   * So this is how we can manage a state. State ek value store karta hai jo ki hum component level me use kar skte hai.
   * useState 2 paraeter return karte hai phela state dusra function jiski help se hum state update kar skte hai.
   *
   * setState karne k baad agar hum console karenge toh prev state dikhega reason being react async way me state update karta hai.
   *
   * @param {*} stateName
   */

  // for handling which tab should be active, this funtion will be passed on to the child for tab button
  const handleSelect = (stateName) => {
    // we set selectedvalue so we know which tab's related data to show
    setSelectedValue(stateName);
    // console won't give the updated value at once because on state update it gived re-evaluated value.
    console.log("selectedValue", selectedValue);
  };
  return (
    <Section id="examples">
      <h2>Examples</h2>
     
      <Tabs buttons={ <>
        {/* all tab buttons */}
        {/* isSelected is the passed on state based on which tab is active for dynamic styling */}
        {/*  by () => fn('') we can easily send the value to any function through onProps events*/}
        <TabButton
          isSelected={selectedValue === "components"}
          onSelect={() => handleSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedValue === "jsx"}
          onSelect={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedValue === "props"}
          onSelect={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedValue === "state"}
          onSelect={() => handleSelect("state")}
        >
          State
        </TabButton>
      </>}>
        {selectedValue ? (
        <TabContent examples={EXAMPLES[selectedValue]} />
      ) : (
        <TabContent examples={EXAMPLES["jsx"]} />
      )}
      </Tabs>
      {/* conditionally showing the data tabs content */}
      {/* Examples[selectedValue] because examples is an array and it has different objects under names (selectedvalue) */}
      
    </Section>
  );
}

export default Examples;
