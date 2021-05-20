import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBiiBE_S-a71KdCjaHCv9pEM-RxXF6_hUk',
  authDomain: 'netflix-clone-a79e6.firebaseapp.com',
  projectId: 'netflix-clone-a79e6',
  storageBucket: 'netflix-clone-a79e6.appspot.com',
  messagingSenderId: '101852428472',
  appId: '1:101852428472:web:a2dc070c24235e0c76dc4d',
};

const firebase = Firebase.initializeApp(config);

export { firebase };
