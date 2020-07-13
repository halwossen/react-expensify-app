import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  };

firebase.initializeApp(config)

const database = firebase.database();

export { firebase, database as default}


// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })
//   console.log(expenses)
// })

// const expenses = {
//   description: 'Car washer',
//   note: 'Electric',
//   amount: 2500000,
//   createAt: 1000
// }
// database.ref('expenses').push(expenses)

//   database.ref().set({
//       name: 'Hailu',
//       age: 34,
//       stressLevel: 5,
//       job: {
//         title: 'Developer',
//         company: 'Uknown'
//       },
//       location: {
//           city: 'Oslo',
//           country: 'Norway'
//       }
//   }).then(() => {
//       console.log('data saved')
//   }).catch((e) => {
//       console.log('Error occured, ', e)
//   })

//   database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
//   })

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// })

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         console.log(snapshot.val())
//     })
//     .catch((e) => {
//         console.log('Error fetching the data, ', e)
//     })
