import firebase from 'firebase'
var config = {
  apiKey: 'AIzaSyB-pm6Lb4SWg6-2ABfBJmSY0dBMMnE4Ee0',
  authDomain: 'chatroom-d512f.firebaseapp.com',
  databaseURL: 'chatroom-d512f.firebaseio.com/',
  projectId: 'chatroom-d512f',
  storageBucket: 'chatroom-d512f.appspot.com'
}
var fire = firebase.initializeApp(config)
export default fire
