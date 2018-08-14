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

class Users extends Component {
handleCustomer=(username)=>{
	Alert.alert(

		`What do you want to do with customer ${username}`,
		`Please select your desired action`,
		[
			{
				text: 'Delete',
			},
			{
				text: 'View',
			},
			{
				text: 'Cancel',
			}
		]

		);
}
  render() {
  	const {width,height} = Dimensions.get('window');
  	const {customer} = this.props;
  	return (
      <Container>
      	<FlatList
      		data={customer}
      		renderItem={({item})=> {
      			let id = item._id;
      			let username = item.username;
      			return(
      				<Card flexDirection="row" justifyContent="space-between">
      				<Button onPress={()=> this.handleCustomer(username)} width={width} height={60} borderBottomWidth={1} alignItems="center" justifyContent="center">
      				<Text>Customer {item.username}</Text>
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
		customer: state.customer.customer,
	}
}

module.exports = connect(mapStateToProps)(Users);