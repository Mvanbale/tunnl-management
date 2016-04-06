import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute} from 'react-router';

import StreamListingComponent from './statecomponents/stream-listing-component';
import StreamViewerComponent from './statecomponents/stream-viewer-component';


import Layout from './statecomponents/layout';

const app = document.getElementById('app');
ReactDOM.render(
  <Router>
   <Route path='/' component= { Layout }>
     <IndexRoute component={StreamListingComponent}></IndexRoute>
     <Route path = 'streamListing' component={StreamListingComponent}></Route>
     <Route path = 'watch/:name' component={StreamViewerComponent}></Route>
   </Route>
  </Router>,
  app);
