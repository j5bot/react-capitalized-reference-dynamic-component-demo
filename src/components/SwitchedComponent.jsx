import React from 'react'; // required in order to use JSX

import Type1 from './Type1'; // load one type of component
import Type2 from './Type2'; // load a second type of component

// a component that will render one or more components
// based on a switch statement
export const SwitchedComponent = (props) => {

  let Output; // save the rendered JSX to return

  // check the type of the component given in props
  switch ( props.type ) {

    // render Type1 with props
    case 'Type1':
      Output = (<Type1 { ...props } />);
      break;

    // render Type2 with props
    case 'Type2':
      Output = (<Type2 { ...props } />);
      break;

    // unknown type ... output null to not render
    default:
      Output = (null); // to return nothing, use null
      break;

  }

  return Output; // return the output created in switch/case

};

export default SwitchedComponent;
