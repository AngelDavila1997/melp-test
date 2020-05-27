import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Grid from '@material-ui/core/Grid';
import './App.css';

var _ = require('lodash');

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
    }
  }

  componentDidMount() {
    fetch('https://recruiting-datasets.s3.us-east-2.amazonaws.com/data_melp.json')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
  }


  render() {
    const { robots} = this.state;
    const ainfo = robots;
    return !robots.length ?
      <h1 className='loading'>Loading</h1> :
      (
        <div>
          <nav className='banner'>
            <h1 className='title'>Melp.</h1>
          </nav>
          <div className='tc'>
            <Scroll>
                <CardList robots={ainfo} />
            </Scroll>
          </div>
        </div>
      );
  }
}

export default App;