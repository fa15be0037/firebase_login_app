import React, { Component } from "react";
import { View, Text } from "react-native";
// import the firebase third party lib
import firebase from "firebase";
// Custom Components to be used in the app
import {
Header,
CustomButton,
CardSection,
Card,
Spinner
} from "./components/common";
// Import our LoginForm component to be displayed on the screen
import LoginForm from "./components/LoginForm";

class App extends Component {
state = { loggedIn: null };
// Life cycle method to init the firebase
componentWillMount() {
firebase.initializeApp({
  apiKey: "AIzaSyD2hoV-qiSSRRCHooI8CCD67dNxyz2TCkM",
  authDomain: "fir-loginapp-ef7ed.firebaseapp.com",
  databaseURL: "https://fir-loginapp-ef7ed.firebaseio.com",
  projectId: "fir-loginapp-ef7ed",
  storageBucket: "fir-loginapp-ef7ed.appspot.com",
  messagingSenderId: "416958996610",
  appId: "1:416958996610:web:da2abe52c22a9960"
});

//Handle the Application when it's logged in or logged out
firebase.auth().onAuthStateChanged(user => {
if (user) {
this.setState({ loggedIn: true });
} else {
this.setState({ loggedIn: false });
}
});
}

renderContent() {
switch (this.state.loggedIn) {
case true:
return (
<Card>
<CardSection>
<CustomButton onPress={() => firebase.auth().signOut()}>
Logout
</CustomButton>
</CardSection>
</Card>
);
case false:
return <LoginForm />;
default:
return <Spinner size="large" />;
}
}
render() {
return (
<View>
<Header headerText="Signup and login" />
<Text>
Niaz Babar Bahadur
</Text>
{this.renderContent()}
{/* 
Before the renderContent Handling
<LoginForm /> */}
</View>
);
}
}

export default App;