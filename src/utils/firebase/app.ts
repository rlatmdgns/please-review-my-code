import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAIdm9HpdjsMFeDkAaaqFVhRbGJg_Hd9AQ',
  authDomain: 'pleview-898b3.firebaseapp.com',
  databaseURL: 'https://pleview-898b3-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'pleview-898b3',
  storageBucket: 'pleview-898b3.appspot.com',
  messagingSenderId: '625184737839',
  appId: '1:625184737839:web:0b71a0a5e36465955b14da',
  measurementId: 'G-X5X5WP4JXC',
};

export const firebaseApp = initializeApp(firebaseConfig);
