import firebase from 'firebase';

const config = {
    //Datos de configuración
    apiKey: 'AIzaSyC7mbVAZq9nHwGraTiq1oMQNTRT8Jh8w98',
    authDomain: 'prior-security-development.firebaseapp.com',
    databaseURL: 'https://prior-security-development.firebaseio.com',
    projectId: 'prior-security-development',
    storageBucket: 'prior-security-development.appspot.com',
    messagingSenderId: '759568431277',
    appId: '1:759568431277:web:96a7e1a70fdb26b7ceee24',
    measurementId: 'G-4FD1XEMGNH'
};

firebase.initializeApp(config);

const auth = firebase.auth();

export {
    auth
};