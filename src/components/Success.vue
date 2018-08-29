<template>
  <div>
    <h1>Signup succeeded</h1>
    <button @click='logOut'>Log out</button>
    <hr>
    <img :src="photo" style='height: 120px'> <br>
    <p>{{name}}</p>
    <p>{{email}}</p>
    <p>{{userId}}</p>
    <p>{{token}}</p>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
 data(){
     return {
       photo: '',
       name: '',
       email: '',
       token: '',
       userId: ''
     }
   },
   created() {
     var vm = this
     firebase.auth().onAuthStateChanged(function(user) {
       if (user) {
         vm.user = user;
         vm.name = vm.user.displayName;
         vm.email = vm.user.email;
         vm.photo = vm.user.photoURL;
         vm.userId = vm.user.uid; 
         vm.user.getIdToken().then(function(idToken){
           vm.token = idToken;
         })
      }
    });
  },
  methods: {
    logOut() {
      firebase.auth().signOut();
    }
  },
};
</script>