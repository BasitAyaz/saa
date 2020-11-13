import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyRoute from "./route";
import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyCAutC_9cb-6H03b3uhQSKt5xXURvMOe-g",
  authDomain: "saaonline-f764e.firebaseapp.com",
  databaseURL: "https://saaonline-f764e.firebaseio.com",
  projectId: "saaonline-f764e",
  storageBucket: "saaonline-f764e.appspot.com",
  messagingSenderId: "182056806506",
  appId: "1:182056806506:web:ac03c91e888910597d8213",
  measurementId: "G-SHBTMQPPT9",
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
function App() {
  return (
    <div className="App">
      <MyRoute />
    </div>
  );
}

export default App;
