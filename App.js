import React from 'react';
import { StyleSheet, Text, View, Button, TextInput,Image,Alert, StatusBar } from 'react-native';
import { StackNavigator, TabNavigator} from 'react-navigation';



class ConnectionScreen extends React.Component {


  constructor(props){
    super(props);
    this.state = { email:"monemail@gmail.com",password:"mot de passe"}
  }


_onPressButtonSignIn(email,password){

}

_onPressButtonFb(){
  Alert.alert('Information','Fonctionnalité non disponible pour le moment')
}



updateEmail (text) {
  this.setState({email:text})
}

updatePassword (text) {
  this.setState({password:text})
}

  render() {
    const { navigate } = this.props.navigation;
    return (
      // Try setting `alignItems` to 'flex-start'
      // Try setting `justifyContent` to `flex-end`.
      // Try setting `flexDirection` to `row`.
<View style={{
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor:'transparent'
  }}>

      <Image
          source={require('./image/amiriant.jpg')}
          resizeMode="cover"
          style={{flex:1, flexDirection: 'column',alignItems: 'center',justifyContent:'center'}}
        >


        <Text style={{color:'white',fontSize:20, textAlign:"center",fontWeight:'bold'}}>
          Saisissez vos identifiants
        </Text>

        <TextInput style={{height:40,width:200,fontSize:18, color:'gainsboro'}}
          value={this.state.email}
          onChangeText={(text) => this.updateEmail(text)}
        >
        </TextInput>

        <TextInput style={{height:40,width:200,fontSize:18, color:'gainsboro'}}
        value={this.state.password}
        onChangeText={(text) => this.updatePassword(text)}
        >
        </TextInput>



          <Button

          onPress={() => navigate('Connected')}
          title="Se connecter"
          color="violet"
          style={{height:40,width:200}}
        />
        <Button
          onPress={this._onPressButtonFb}
          title="Sign in with facebook"

        />

      </Image>
      </View>
    );
  }
}

class ConnectedScreen extends React.Component {

    render() {
    const { navigate } = this.props.navigation;
    return (
        <View style={{flex: 1}}>
          <TabNav />
        </View>
    );
  }
}

class MondeScreen extends React.Component {

    render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'transparent'
        }}>
          <Image source={require('./image/MondeScreen.png')}></Image>
      </View>

    );
  }
}

class PersonnalScreen extends React.Component {

    render() {
      return(
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'transparent'
        }}>
        <Image source={require('./image/PersonnalScreen.png')}></Image>
      </View>
    );
  }
}

class ProfilScreen extends React.Component {

    render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'transparent'
        }}>
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor:'transparent'
          }}>
        <Image source={require('./image/ProfilScreen.png')}>
        </Image>
        </View>

      </View>

    );
  }
}

const SimpleApp = StackNavigator({
  Connection : {screen:ConnectionScreen},
  Connected : {screen:ConnectedScreen},

});

const TabNav = TabNavigator({

  Personnal : {screen:PersonnalScreen},
  Profil : {screen:ProfilScreen},
  Monde : {screen:MondeScreen}

});

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
