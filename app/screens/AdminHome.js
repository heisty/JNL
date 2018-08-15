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
  loginState
} from '../actions/customerActions';
import {
  Dimensions,
  Text,
  ScrollView,
  FlatList,
  Image
} from 'react-native';
import {populateDispatcher,populateCustomer,populateStaff} from '../actions/PopulateDispatcher';
import {getRecords} from '../actions/PopulateDispatcher';
import {StackActions,NavigationActions} from 'react-navigation';
class AdminHome extends Component {
	componentDidMount(){
		setInterval(()=>{
			this.props.dispatch(populateDispatcher());
			this.props.dispatch(populateStaff());
			this.props.dispatch(populateCustomer());
			this.props.dispatch(getRecords());
		},3000)
	}
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	isTransaction: false,
      isOpenTransaction: false
	  };
	}

  logout = () =>{
      this.props.dispatch(loginState(null));
      const resetActions = StackActions.reset({
        index:0,
        key: null,
        actions: [
            NavigationActions.navigate({
            routeName: "customerAuthNavigation",
          }),
        ]
      });
      this.props.navigation.dispatch(resetActions);
    }
  render() {
  	const { width,height } = Dimensions.get('window');
  	const {records} = this.props;
    const {navigate} = this.props.navigation;
    return (
      <Container>
      <ScrollView>
      	<Card width={width} alignItems="center" justifyContent="space-between" flexDirection="row" height={50} backgroundColor="white" borderWidth={1}>
      		<Text style={[styles.header,{color: '#000000',fontSize: 14,textAlign: 'center'}]}>ADMINISTRATOR ACCOUNT</Text>
      	 <Button onPress={()=> this.logout()} alignItems="center" justifyContent="center" width={60} borderRadius={8} height={30} backgroundColor="white" borderWidth={1}>
          <Text style={[styles.header,{color: '#000000',fontSize: 14,textAlign: 'center'}]}>Logout</Text>
        </Button>
        </Card>
      	<Card >
      	<Button onPress={()=>navigate('Transactions')} alignItems="center" flexDirection="row" justifyContent="flex-start" width={width} borderBottomWidth={1} borderBottomColor="gray"  height={60} backgroundColor="white">
      		<Image resizeMode="contain" style={{width: 48,height: 48,marginLeft:10}} source={require('./icons/note.png')}/>
          <Text style={[styles.header,{color: '#000000',fontSize: 25,textAlign: 'center',marginLeft:30}]}>Transaction Logs</Text>
      	</Button>
      	</Card>

        <Card>
        <Button onPress={()=>navigate('Employee')} alignItems="center" flexDirection="row" justifyContent="flex-start" width={width} borderBottomWidth={1} borderBottomColor="gray"  height={60} backgroundColor="white">
          <Image resizeMode="contain" style={{width: 48,height: 48,marginLeft:10}} source={require('./icons/employee.png')}/>
          <Text style={[styles.header,{color: '#000000',fontSize: 25,textAlign: 'center',marginLeft:30}]}>Employee</Text>
        </Button>
        </Card>

        <Card>
        <Button onPress={()=>navigate('Users')} alignItems="center" flexDirection="row" justifyContent="flex-start" width={width} borderBottomWidth={1} borderBottomColor="gray"  height={60} backgroundColor="white">
          <Image resizeMode="contain" style={{width: 48,height: 48,marginLeft:10}} source={require('./icons/avatar.png')}/>
          <Text style={[styles.header,{color: '#000000',fontSize: 25,textAlign: 'center',marginLeft:30}]}>Users</Text>
        </Button>
        </Card>

        <Card>
        <Button onPress={()=>navigate('XServices')} alignItems="center" flexDirection="row" justifyContent="flex-start" width={width} borderBottomWidth={1} borderBottomColor="gray"  height={60} backgroundColor="white">
          <Image resizeMode="contain" style={{width: 48,height: 48,marginLeft:10}} source={require('./icons/services.png')}/>
          <Text style={[styles.header,{color: '#000000',fontSize: 25,textAlign: 'center',marginLeft:30}]}>Services</Text>
        </Button>
        </Card>


      	
      
         

        </ScrollView>
      </Container>
    );
  }
}

let mapStateToProps = (state) =>{
	return{
		
	}
}

module.exports = connect(mapStateToProps)(AdminHome);