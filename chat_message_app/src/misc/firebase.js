import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const config = {
    apiKey: "AIzaSyDqyGhnUcYpl452TJT8GbeecjlPM5Uhn5w",
    authDomain: "chat-message-app-df799.firebaseapp.com",
    databaseURL: "https://chat-message-app-df799-default-rtdb.firebaseio.com",
    projectId: "chat-message-app-df799",
    storageBucket: "chat-message-app-df799.appspot.com",
    messagingSenderId: "49442851575",
    appId: "1:49442851575:web:320af64fddae3dad31a1f2"
  };

  const app = firebase.initializeApp(config);
  export const auth= app.auth();
  export const database= app.database() 