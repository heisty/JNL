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

import {deleteStaff,registerStaff} from '../../actions/staffActions';

class Employee extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	isActiveId: null,
	  	isActiveUser: null,
	  	isOpenAdd: false,
	  };


	}

	deleteById=(staffid)=>{
		this.props.dispatch(deleteStaff(staffid));
	}

	handleStaffPress=(id,username)=>{
		this.setState({
			isActiveId: id,
			isActiveUser: username,
			username: null,
			password: null,
		})

		Alert.alert(
	  	`What would you want to do with staff ${username}`,
	  	`Please click your desired action below.`,
	  	[
	  		{
	  			text: "Delete",onPress: ()=> this.deleteById(id)
	  		},
	  		{
	  			text: "Cancel",onPress: ()=> null
	  		}
	  	]
	  	),
	  	{
	  		cancellable: false
	  	}
	}

	addPress=()=>{
		let username = this.state.username;
		let password = this.state.password;



		if(this.state.isOpenAdd){
			if(username && password){
			this.props.dispatch(registerStaff(username,password));
			}
			else{
				Alert.alert(
	  	`Missing Inputs`,
	  	`Please review.`,
	  	[
	  		{
	  			text: "Okay",
	  		},
	  		
	  	]
	  	),
	  	{
	  		cancelable: true
	  	}
			}
			
		}

		this.setState({
			isOpenAdd: !this.state.isOpenAdd,
		})


	}
  render() {
  	const {width,height} = Dimensions.get('window');
  	const {staff} = this.props;
    return (
      <Container>
      <Card marginTop={10} alignItems="flex-end" justifyContent="flex-end" flexDirection="row">

      <Button onPress={()=> this.addPress()} width={width/4} height={60} borderWidth={1} borderRadius={8} alignItems="center" justifyContent="center">
      <Text>ADD</Text>
      </Button>
      </Card>

   	{this.state.isOpenAdd &&
   		<Card marginTop={10} alignItems="center" justifyContent="center">
   	   			<Input onChangeText={(text)=>this.setState({username:text})} width={width-40} height={60} borderWidth={1} borderRadius={8} textAlign="center" color="#000000" placeholder="Username"/>
   	   			<Input onChangeText={(text)=>this.setState({password:text})} marginTop={10} width={width-40} height={60} borderWidth={1} borderRadius={8} textAlign="center" color="#000000" placeholder="Password"/>
   	   		</Card>
   	}
     

      {/*<Button width={width/4} height={60} borderWidth={1} borderRadius={8} alignItems="center" justifyContent="center">
      <Text>Edit</Text>
      </Button>*/}
      	
      
      	<FlatList
      		data={staff}
      		renderItem={({item})=> {
      			let id = item._id;
      			let username = item.username;
      			return(
      				<Button onPress={()=>this.handleStaffPress(id,username)} width={width} height={60} borderBottomWidth={1} alignItems="center" justifyContent="center">
      				<Text>Staff {item.username}</Text>
      				</Button>
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
		staff: state.customer.staff,
	}
}


module.exports = connect(mapStateToProps)(Employee);