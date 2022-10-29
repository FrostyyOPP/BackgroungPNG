import React, { Component } from 'react'
import axios from 'axios';

export class Wallpapers extends Component {
    state ={
        wallpapers:[],
        isLoaded: false
    }

    componentDidMount(){
        axios.get(`https://hd.backgroundspng.com/wp-json/wp/v2/wallpapers`)
        .then(res => this.setState({
            wallpapers: res.data,
            isLoaded: true
        }))
        .catch(err => console.log(err));
    }
  render() {
    console.log(this.state);
    return (
      <div>

      </div>
    )
  }
}

export default Wallpapers