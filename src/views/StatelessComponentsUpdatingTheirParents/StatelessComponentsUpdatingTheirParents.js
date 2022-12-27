//Codecademy-React CHILD COMPONENTS UPDATE THEIR PARENTS' STATE

import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';

class StatelessComponentsUpdatingTheirParents extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: 'Frarthur' };
    this.changeName = this.changeName.bind(this);
  }

  changeName(newName) {
    this.setState({
      name: newName
    })
  }

  render() {
    return <Child onChange={this.changeName} name={this.state.name} />
  }
}

// ReactDOM.render(
//   <StatelessComponentsUpdatingTheirParents />,
//   document.getElementById('app')
// );

export default StatelessComponentsUpdatingTheirParents