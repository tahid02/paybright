// const { initializeApp } = require('firebase/app');
// const { getFirestore, collection, addDoc } = require('firebase/firestore');
// const allShopsdata = require('./shops');
// initializeApp({
//   apiKey: 'AIzaSyCOkmoZX8RBhhQ2pFX-Vff5gUTaVNIqhl8',
//   authDomain: 'dev01-655aa.firebaseapp.com',
//   projectId: 'dev01-655aa',
//   storageBucket: 'dev01-655aa.appspot.com',
//   messagingSenderId: '141075402009',
//   appId: '1:141075402009:web:60fa419e7366913b254988',
// });
// const db = getFirestore();
// const colRef = collection(db, 'shops');
// let count = 0;

// allShopsdata.forEach((shop) => {
//   addDoc(colRef, shop)
//     .then((doc) => console.log('Document written with ID: ', doc.id))
//     .then((da) => {
//       count++;
//       console.log({ count });
//     })
//     .catch((err) => console.log(err));
// });
