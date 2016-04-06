const R = require('ramda');

//filters, can always be extended with more, for example based on duration of stream, or viewercount.
const filterOnName = (options) => (options.name != null
  ? (streams) => streams.filter(stream => stream.name.toUpperCase().includes(options.name.toUpperCase()))
  : (streams) => streams
);



//builds filters into 1, takes an options object and an array of streams.
const filterBuilder =
  streams =>
    options => {
      return R.pipe(
        filterOnName(options))(streams);
    };

module.exports = filterBuilder;
