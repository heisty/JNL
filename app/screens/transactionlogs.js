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
 Dimensions,
 
} from 'react-native';

class transactionlogs extends Component {

  render() {
  	const {width,height} = Dimensions.get('window');
  	const {
  		records
  	} = this.props;
    return (
      <Container>

      	<FlatList
      		data={records}
      		renderItem={({item})=> {
      			return(
      				<Card width={width} height={60} borderBottomWidth={1} alignItems="center" justifyContent="center">
      				<Text>{item.username} ordered {item.servicename} to {item.staffname}</Text>
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
	return{
		records: state.staff.records,
	}
}

module.exports = connect(mapStateToProps)(transactionlogs);