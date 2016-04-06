import React from 'react';
import TextInput from './text-input.js';
import filter from '../util/filter.js';
import {debounce} from 'throttle-debounce';
import { Link } from 'react-router';
const streamRepository = require('../repositories/stream-repository');


export default class StreamComponent extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      filterOptions: {
        name: null},
      streams: []
    };
  }

  componentDidMount () {
    this.streamRepository = streamRepository;
    this.streamRepository.getStreams()
      .then((response) => {
        this.setState({
          streams: response
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidUpdate () {

  }

  updateName (name) {
    this.setState({filterOptions: {
      name: name,
      upperBound: this.state.filterOptions.upperBound,
      lowerBound: this.state.filterOptions.lowerBound,
      unit: this.state.filterOptions.unit
    }
    });
  }


    render () {
      const streams = filter(this.state.streams)(this.state.filterOptions);
      if (this.state.streams.length > 0) {
        return (
        <div>
            <div className='row'>
              <div className='filters col-md-3'>
                <TextInput placeHolder = 'Filter by Name' updateState = {debounce(500, this.updateName.bind(this))}></TextInput>
              </div>
            </div>

            <table className='dashboard-table'>
                <thead>

                    <tr>
                        <th className='width-10'>
                          Streamer
                        </th>

                        <th className='width-10'>
                          Link to stream
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {streams.length === 0 ? 'No results found.' : streams.map((stream) => {
                      return <tr className= 'stream' key = {stream.name + stream.quantity}>
                          <td>{stream.name}</td>
                          <td><Link streamName = {stream.name} to={`/watch/${stream.name}`}><span>Visit the stream!</span></Link></td>
                      </tr>;
                    }
                    )}
                </tbody>
            </table>


        </div>
        );
      } else {
        return (<div>Please wait...</div>);
      }
    }
}
