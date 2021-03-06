const $ = require('jquery');
var config = require('../../../config.json');

const streamRepository = {

  getStreams: () => {
    return new Promise((resolve, reject) => {
      console.log(config.tunnelServerIP + '/getStreams');
      $.get(config.tunnelServerIP + '/getStreams')
        .promise()
        .done((response) => {
          resolve(response);
        });
    });
  }

};

module.exports = streamRepository;
