add a timeout to actions axios 
add in pinging google

{this.state.isTransaction &&
      		
      		<Card flex={1} alignItems="center" justifyContent="center">
      		
      			<FlatList
      		data={records}
      		renderItem={({item})=>{
      		 let userid = item._id;
      		 return(
             
      		        <Card alignItems="center" justifyContent="center">
                   
      		      		<Button  alignItems="center" justifyContent="center" marginTop={10} width={width-60} height={50} borderRadius={5} backgroundColor="white" borderWidth={1}>
                      <Text style={[styles.header,{color:'darkgreen',fontSize:15}]}>{item.staffname}</Text>
                    </Button>
                  
                
                  <Card alignItems="center" justifyContent="center"  width={width-60} height={150} borderRadius={5} backgroundColor="white" borderWidth={1}>
                  <Text style={[styles.header,{color:'darkgreen',fontSize:20}]}>
                    {item.servicename} Service
                  </Text>
                  <Text style={[styles.header,{color:'darkgreen',fontSize:20}]}>
                    Type: {item.servicetype}
                  </Text>
                  <Text style={[styles.header,{color:'darkgreen',fontSize:20}]}>
                    Customer {item.username}
                  </Text>
                  <Text style={[styles.header,{color:'darkgreen',fontSize:20}]}>
                    On August 10, 2018
                  </Text>
                  </Card>
                 
                  </Card>
                  
      		
      		      			);
      		}
      		}
      		keyExtractor={(item)=> item._id}
      		/>
        </Card>

      		
      		
      		
      		
      	}