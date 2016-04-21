import React from 'react';
import TextInput from './text-input.js';
import filter from '../util/filter.js';
import {debounce} from 'throttle-debounce';
import { Link } from 'react-router';
var config = require('../../../config.json');
const streamRepository = require('../repositories/stream-repository');


export default class StreamComponent extends React.Component {

  constructor(props) {
    super(props);
    this.assetURL;
    this.mimeCodec;
    this.counter = 0;
    this.sourceBuffer;
    this.mediaSource;
    this.assetURL = `${config.tunnelServerIP}/${this.props.params.name}/getsegment/`;
    this.mimeCodec = 'video/webm;codecs=vp8';
  }

  componentDidMount() {
    this.mediaSource = new window.MediaSource;
    video.src = URL.createObjectURL(this.mediaSource);
    setTimeout(function () {
      if ('MediaSource' in window && window.MediaSource.isTypeSupported(this.mimeCodec)) {
        this.mediaSource.addEventListener('sourceopen', this.sourceOpen(this));
      } else {
        console.error('Unsupported MIME type or codec: ', this.mimeCodec);
      }
    }.bind(this), 800);


  }


  render() {
    //validate the present state here
    if (true) {
      return (
        <div>
          <div class="camera">
            <video id="video" autoPlay>Video stream not available.</video>
          </div>
          <canvas id="canvas">
          </canvas>
          <div class="output">

          </div>
        </div>
      );
    } else {
      return (<div>Een ogenblik geduld...</div>);
    }
  }


  //meuk


  playBlob() {
    console.log('Playblob');
  }

  sourceOpen(self) {
    if (!self.SourceBuffer) {
      self.sourceBuffer = self.mediaSource.addSourceBuffer(self.mimeCodec);
      self.sourceBuffer.addEventListener('updateend', function (_) {
        self.mediaSource.endOfStream();
        document.getElementById("video").play();
        self.fetchAB(self.assetURL, self.resultCallBack.bind(self));
      });

      self.sourceBuffer.addEventListener('error', function (_) {
        console.log(_);
      })

      self.fetchAB(self.assetURL, self.resultCallBack.bind(self));
    }


  };

  resultCallBack(buf) {

    this.sourceBuffer.appendBuffer(buf);
  }

  fetchAB(url, cb) {
    var xhr = new XMLHttpRequest;
    xhr.open('get', url + this.counter);
    this.counter++;
    xhr.responseType = 'arraybuffer';
    xhr.onload = function () {
      if (xhr.status == 200)
        cb(xhr.response);
    };
    xhr.send();
  };


  playVideo(self) {
    self.playBlob();
  };

}
