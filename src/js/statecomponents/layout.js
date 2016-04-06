import React from 'react';
import { Link } from 'react-router';
import Footer from '../layoutcomponents/Footer';
import Header from '../layoutcomponents/Header';
import '../../style.css';
var SideNav = require('react-sidenav');

export default class Layout extends React.Component {
  render() {
    return (
      <div className = 'container' >
        <div className = 'sidenavwrapper' >
          <SideNav.Menu
            path='#'
            itemHeight = '32px'
            className = 'sidenav' >

            <span className = 'sidenav-header' > Menu </span>

            <SideNav.MenuItem itemKey= 'streamListing' >
              <SideNav.ILeftItem className='fa fa-stream-listing-component' >
                Stream Listings
              </SideNav.ILeftItem>
            </SideNav.MenuItem>



          </SideNav.Menu>
        </div>

        <div className = 'contentpane' >
          <Header />
          { this.props.children }
          <Footer />
        </div>

      </div>
    );
  }
}
