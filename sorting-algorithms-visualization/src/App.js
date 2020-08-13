import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      array : []
    }
  }

  componentDidMount() {
    this.randomNoGenerator();
  }

  randomNoGenerator = () => {
    const arr = [];
    for(let i=1; i<=200; i++) {
      const no = Math.random() * (300 - 5) + 5;
      arr.push(Math.floor(no));
    }

    this.setState({
      array: arr
    })
  }

  createBars = () => {
    const bars = this.state.array.map(no => {
      return <div className="bar" style={{ height: `${no}px` }}>{no}</div>
    })

    return bars;
  }

  render() {
    return (
      <div className="App">
        {this.createBars()}
      </div>
    )
  }
}

export default App;
