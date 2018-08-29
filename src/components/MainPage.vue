<template>
<div class="hello">
    <h3>MainPage</h3>
    <b-button v-on:click='logOut'>LogOut</b-button>
    <b-card>
        <div v-for="deploy in deploys">
            <h4>{{deploy.id}}. {{deploy.author}}</h4>
        </div>
    </b-card>
</div>
</template>

<script>
import firebase from 'firebase'

export default {
    data() {
        return {
            deploys: []
        }
    },

    created() {
        /* this.$http.get('http://jsonplaceholder.typicode.com/todos').then((response) => {
            console.log(response.data)
            this.deploys = response.data;
        }); */
        this.$http.get('https://dummy-hash.azurewebsites.net/azure/deployments').then((response) => {
            this.deploys = response.data;
        });
    },

    methods: {
        logOut() {
            /* localStorage.removeItem("tokennya");*/
            this.$router.replace('/');
            /* firebase.auth().signOut(); */
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin-bottom: 10px;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
