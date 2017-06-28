import React, { Component } from 'react';
import 'bulma/css/bulma.css';

import * as Components from './components';

const testComponentConfiguration = [
  {
    type: 'Type1'
  },
  {
    type: 'Type2'
  },
  {
    type: 'Type3'
  }
];

const mapPropsToComponent = ( component, props ) => {

  return { ...(component.props || props), type: component.type };

};

class App extends Component {
  render() {
    return (
      <div>

        <div className="box">
          <div className="level">
            <h1 className="level-item title">Switched Components</h1>
          </div>
          <p className="notification">This component uses <code>switch</code> and <code>case</code> to choose based on 'type'.</p>
          <Components.SwitchedComponent
            { ...testComponentConfiguration[0] }
            />
          <Components.SwitchedComponent
            { ...testComponentConfiguration[1] }
            />
        </div>

        <div className="box">
          <div className="level">
            <h1 className="level-item title">Dynamic Component Type</h1>
          </div>
          <p className="notification">This component specifies the possible component types as <code>import</code>s and adds references to the component types to an object for later reference by key matching 'type'.</p>
          <Components.DynamicComponentType
            { ...testComponentConfiguration[0] }
            />
          <Components.DynamicComponentType
            { ...testComponentConfiguration[1] }
            />
        </div>

        <div className="box">
          <div className="level">
            <h1 className="level-item title">Dynamic Component Type (Externals)</h1>
          </div>
          <p className="notification">This component brings in the possible component types from <code>
            props.components</code>, which is easily provided by something
            like <code>import * as Components from './components'</code>
            where all possible components are exported in
            <code>index.js</code>.</p>
          <Components.DynamicComponentTypeExternals
            components={ Components }
            { ...testComponentConfiguration[0] }
            />
          <Components.DynamicComponentTypeExternals
            components={ Components }
            { ...testComponentConfiguration[1] }
            />
        </div>

        <div className="box">
          <div className="level">
            <h1 className="level-item title">Dynamic Component Type Collection (Externals)</h1>
          </div>
          <p className="notification">This component renders a collection of components specified by
          a configuration object.</p>
          <Components.DynamicComponentTypeCollectionExternals
            components={ Components }
            collection={ testComponentConfiguration }
            mapPropsToComponent={ mapPropsToComponent }
            />
        </div>

      </div>
    );
  }
}

export default App;
