import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Grid from '@material-ui/core/Grid';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      restaurants: [],
    }
  }

  componentDidMount() {
    fetch('https://recruiting-datasets.s3.us-east-2.amazonaws.com/data_melp.json')
      .then(response=> response.json())
      .then(data => {this.setState({ restaurants: data})});
  }


  render() {
    const { restaurants} = this.state;
    const ainfo = restaurants;
    return !restaurants.length ?
      <h1 className='loading'>Loading</h1> :
      (
        <div>
          <nav className='banner'>
            <h1 className='title'>Melp.</h1>
          </nav>
          <div className='tc'>
            <Scroll>
                <CardList restaurants={ainfo} />
            </Scroll>
          </div>
        </div>
      );
  }
}

export default App;