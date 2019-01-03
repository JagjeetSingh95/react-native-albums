import React, { Component } from 'react';
import {
  ScrollView
} from 'react-native';
import axios from 'axios';

import AlbumDetails from './AlbumDetails';

class AlbumList extends Component {
  constructor(props){
    super(props);
    this.state = {
      albums: [ ]
    }
  }

  componentDidMount() {
    axios.get('http://rallycoding.herokuapp.com/api/music_albums')
         .then(res => this.setState({ albums: res.data  }))
  }

  render () {
    let { albums } = this.state;

    return (
      <ScrollView>
        {
          albums.map(album => <AlbumDetails key={album.title} album={album} />)
        }
      </ScrollView>
    )
  }
}

export default AlbumList;