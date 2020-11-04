import firebase from 'firebase/app';
import 'firebase/auth';

import environment from './environment';

const config = {
    //Datos de configuración
    apiKey: environment.FIREBASE_API_KEY,
    authDomain: environment.FIREBASE_AUTH_DOMAIN,
    databaseURL: environment.FIREBASE_DATABASE_URL,
    projectId: environment.FIREBASE_PROJECT_ID,
    storageBucket: environment.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: environment.FIREBASE_MESSAGING_SENDER_ID,
    appId: environment.FIREBASE_APP_ID,
    measurementId: environment.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(config);

const auth = firebase.auth();

export {
    auth
};