import React from 'react';
import TextInput from './text-input.js';
import filter from '../util/filter.js';
import {debounce} from 'throttle-debounce';
import { Link } from 'react-router';
const streamRepository = require('../repositories/stream-repository');


export default class StreamComponent extends React.Component {

  constructor (props) {
    super(props);
  }

  componentDidMount () {
    // this.streamRepository = streamRepository;
    // this.streamRepository.getStreams()
    //   .then((response) => {
    //     console.log(response);
    //     this.setState({
    //       streams: response
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }


    render () {
      //validate the present state here
      if (true) {
        return (
        <div>
        TODO: Insert the video player! <br></br>
Should display the stream of {this.props.params.name}


        </div>
        );
      } else {
        return (<div>Een ogenblik geduld...</div>);
      }
    }
}
