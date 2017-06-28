import React from 'react'; // required to use JSX

export const DynamicComponentTypeExternals = (props) => {

  // get references to all possible components
  // that this component might render
  let Components = props.components;

  // make a Capitalized reference to a specific component
  // which we'll render
  let Component = Components[ props.type ];

  // render the component
  return(
    <div>
      <p>I'm wrapped!</p>
      <Component { ...props } />
    </div>
  );
};

export default DynamicComponentTypeExternals;
