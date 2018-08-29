import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC5swgqG0Bb3eiaQmzMuFtNaUQDgm07sGA",
    authDomain: "math-game-b10df.firebaseapp.com",
    databaseURL: "https://math-game-b10df.firebaseio.com",
    projectId: "math-game-b10df",
    storageBucket: "math-game-b10df.appspot.com",
    messagingSenderId: "253755425295"
  };
  
export default ()=>{
    firebase.initializeApp(firebaseConfig);
  }

