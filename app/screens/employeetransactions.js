'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Button from '../components/Button';
import Container from '../components/Container';
import Input from '../components/Input';
import Pic from '../components/Pic';
import Card from '../components/Card';
import styles from './styles';

import {
 Text,
 FlatList,
 Dimensions
} from 'react-native';

class employeetransactions extends Component {

  render() {
  	const {width,height} = Dimensions.get('window');
    return (
      <Container>
      	
      </Container>
    );
  }
}


module.exports = employeetransactions;