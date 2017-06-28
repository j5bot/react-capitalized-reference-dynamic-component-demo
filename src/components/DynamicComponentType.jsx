import React from 'react'; // required in order to use JSX

import Type1 from './Type1'; // load one type of component
import Type2 from './Type2'; // load a second type of component

// make references to the components by type
const Components = {
  Type1: Type1,
  Type2: Type2
};

// a component that will render one or more components
// that it doesn't explicitly include in it's JSX
export const DynamicComponentType = (props) => {

  // make a reference using a Capitalized variable name
  // to the component you need to render
  // where props.type is one of 'Type1' or 'Type2'
  let Component = Components[ props.type ];

  // use the reference to the component with the
  // Capitalized variable name to render it
  return (<Component { ...props } />);

};

export default DynamicComponentType;
