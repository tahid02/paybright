const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc } = require('firebase/firestore');
const allShopsdata = require('./shops');
initializeApp({
  apiKey: 'AIzaSyCfkCLLBouHOhttUnMn0RAB1Dbn3iPbILo',
  authDomain: 'secur-rider.firebaseapp.com',
  projectId: 'secur-rider',
  storageBucket: 'secur-rider.appspot.com',
  messagingSenderId: '252768467636',
  appId: '1:252768467636:web:6d4fd358811dcfe6d675e1',
});
const db = getFirestore();
const colRef = collection(db, 'shops');
let count = 0;

allShopsdata.forEach((shop) => {
  addDoc(colRef, shop)
    .then((doc) => console.log('Document written with ID: ', doc.id))
    .then((da) => {
      count++;
      console.log({ count });
    })
    .catch((err) => console.log(err));
});
