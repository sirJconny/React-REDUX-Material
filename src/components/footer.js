import React, {Component} from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import Scroll, {Element} from 'react-scroll';
import {Sticky} from 'react-sticky';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

export default class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 3
    };
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <ToolbarTitle text="Footer"/>
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarTitle text="Options"/>
          <FontIcon className="muidocs-icon-custom-sort"/>
          <ToolbarSeparator/>
          <RaisedButton label="email me yo!" primary={true}/>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}
