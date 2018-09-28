<template>
<div>
    <b-navbar class="nav" toggleable="md" type="dark" fixed="top">

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-collapse is-nav id="nav_collapse">

            <b-button size="sm" id="popoverButton-event" variant="info" type="submit">Basic</b-button>
            <b-button size="sm" variant="info" class="button" type="submit" v-on:click="main">Main</b-button>

            <b-navbar-nav class="ml-auto">
                <b-button size="sm" variant="danger" class="my-2 my-sm-0" type="submit" v-on:click="logOut">Logout</b-button>
            </b-navbar-nav>

            <b-popover target="popoverButton-event" title="Login Basic">
                <b-form-input class="form" type="text" size="sm" v-model="username" placeholder="Username" />
                <b-form-input class="form" type="password" size="sm" v-model="password" placeholder="Password" />
                <b-button size="sm" class="button" variant="primary" v-on:click="savebasic">Save</b-button>
            </b-popover>

        </b-collapse>
    </b-navbar>

    <editor v-model:value="content" @init="editorInit" theme="chrome" width="auto" height="500"></editor>
    <b-button size="sm" class="button" variant="primary" v-on:click="saveeditor">Save</b-button>

</div>
</template>

<script>
import firebase from 'firebase'

export default {
    data() {
        return {
            content: '',
            username: '',
            password: ''
        }
    },

    mounted() {
        this.$http.get('https://dummy-hash.azurewebsites.net/azure/resources', {
            headers: {
                token: window.localStorage.getItem('token')
            }
        }).then((response) => {
            console.log(response.data);
            this.content = JSON.stringify(response.data, null, 3);
        });
    },

    components: {
        editor: require('vue2-ace-editor'),
    },

    methods: {
        logOut() {
            firebase.auth().signOut().then((logout) => {
                localStorage.removeItem("token");
                this.$router.push('/');
            })
        },

        main() {
            this.$router.push('/main')
        },

        savebasic() {
            console.log('username :' + this.username)
            console.log('password :' + this.password)
            this.$http.post('https://dummy-hash.azurewebsites.net/azure/auth', {
                headers: {
                    token: window.localStorage.getItem('token')
                },
                username: this.username,
                password: this.password,
            }).then(
                (user) => {
                    console.log(user)
                },
                (err) => {
                    console.log(err)
                }
            );
        },

        saveeditor() {
            this.$http.post('https://dummy-hash.azurewebsites.net/azure/resources', {
                headers: {
                    token: window.localStorage.getItem('token')
                }
            }).then((response) => {
                alert('Berhasil disimpan')
            })
        },

        editorInit: function () {
            require('brace/ext/beautify') //language extension
            require('brace/mode/yaml') //language
            require('brace/theme/monokai') //theme
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.form {
    margin: 10px;
}

.button {
    margin-left: 10px;
}

.cardgrup {
    margin: 10px;
}

h3 {
    text-transform: uppercase;
    line-height: 1.8;
}

h1 {
    margin-top: 30px;
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

.nav {
    background-color: #000000;
    color: blue;
}
</style>
