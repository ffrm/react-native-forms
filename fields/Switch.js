import React, { Component } from 'react';
import { Switch } from 'react-native';
import {
  FormLabel
 } from '../';

const initialState = {
  value: false
};

export default class FormSwitch extends Component {

  constructor() {
    super();
    this.state = initialState;
  }

  getValue() {
    return !!this.state.value;
  }

  clearValue() {
    return this.setState({
      ...this.state,
      value: false
    });
  }

  _handleValueChange(value) {
    this.setState({ value });
  }

  render() {
    return (
      <FormLabel label={this.props.label}>
        <Switch
          value={this.state.value}
          onValueChange={this._handleValueChange.bind(this)} />
      </FormLabel>
    );
  }
  
}