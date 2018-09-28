<template lang="html">
<div>
    <b-card class="card" id="firebaseui-auth-container">
        <h3 slot="header">LOGIN</h3>
        <b-form-input type="text" v-model="email" name="email" placeholder="Enter your email"></b-form-input>
        <br>
        <b-form-input type="password" v-model="password" name="password" placeholder="Password"></b-form-input>
        <b-button variant="primary" class="btn" v-on:click="login">Login</b-button>
        <hr>
    </b-card>
</div>
</template>

<script>
import firebase from 'firebase';
import firebaseui from 'firebaseui';
import {config} from '../helpers/firebaseConfig';


export default {
    data: function () {
        return {
            email: '',
            password: ''
        }
    },

    methods: {
        login: function () {
            this.$http.post('https://dummy-hash.azurewebsites.net/auth/login', {
                email: this.email,
                password: this.password
            }).then(
                (user) => {
                    console.log(user);
                    localStorage.setItem('token', user.data.token);
                    this.$router.push('main')
                },
                (err) => {
                    console.log('error: ' + err.response)
                }
            );
        }

    },
    mounted() {
        var vue = this;
        var uiConfig = {
            callbacks: {
                signInSuccessWithAuthResult: function (authResult, redirectUrl) {
                    var user = authResult.user;
                    var credential = authResult.credential;
                    var isNewUser = authResult.additionalUserInfo.isNewUser;
                    var providerId = authResult.additionalUserInfo.providerId;
                    var operationType = authResult.operationType;

                    vue.$http.post('https://dummy-hash.azurewebsites.net/auth/check', {
                        email: authResult.additionalUserInfo.profile.email,
                        password: ''
                    }).then(
                        (user) => {
                            window.localStorage.setItem('token', user.data.token);
                        },
                        (err) => {
                            console.log('error: ' + err.response)
                        }
                    ).then(() => {
                        vue.$router.replace('/main')
                    })
                },
                signInFailure: function (error) {
                    //return handleUIError(error);
                    console.log(error);
                }
            },

            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                {
                    provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,

                    recaptchaParameters: {
                        type: 'image',
                        size: 'normal',
                        badge: 'bottomleft'
                    }
                }
            ]
        };
        var ui = firebaseui.auth.AuthUI.getInstance();
        if (!ui) {
            ui = new firebaseui.auth.AuthUI(firebase.auth());
        }
        ui.start('#firebaseui-auth-container', uiConfig);
    },

}
</script>

<style scoped>
.card {
    margin-left: 36%;
    width: 30%;
}

.btn {
    margin-top: 15px;
}
</style>
