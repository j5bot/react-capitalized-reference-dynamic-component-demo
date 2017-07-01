import React from 'react'; // required to use JSX

export const CapitalizedReferenceComponentExternals = (props) => {

  // get references to all possible components
  // that this component might render
  const { type, components: Components } = props;

  // make a Capitalized reference to a specific component
  // which we'll render
  let Component = Components[ type ];

  // render the component
  return(
    <div>
      <p>I'm wrapped!</p>
      <Component { ...props } />
    </div>
  );
};

export default CapitalizedReferenceComponentExternals;
