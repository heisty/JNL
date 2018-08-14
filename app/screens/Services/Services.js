'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Button from '../../components/Button';
import Container from '../../components/Container';
import Input from '../../components/Input';
import Pic from '../../components/Pic';
import Card from '../../components/Card';
import styles from './../styles';

import {
 Text,
 FlatList,
 Dimensions,
 Alert
 
} from 'react-native';

class Services extends Component {
  render() {
    const {width,height} = Dimensions.get('window');
  	const {services} = this.props;
  	return (
      <Container>
      <Text>aa</Text>
      	<FlatList
      		data={services}
      		renderItem={({item})=> {
      			// let id = item._id;
      			// let username = item.username;
      			return(
      				<Card flexDirection="row" justifyContent="space-between">
      				<Button onPress={()=> null} width={width} height={60} borderBottomWidth={1} alignItems="center" justifyContent="center">
      				<Text>Service {item.title}</Text>
      				</Button>

      				</Card>
      				);
      		}
      	}
      		keyExtractor={(item)=>item._id}
      	/>
      </Container>
    );
  }
}

let mapStateToProps = (state) =>{
	return {
		services: state.customer.services,
	}
}



module.exports = connect(mapStateToProps)(Services);