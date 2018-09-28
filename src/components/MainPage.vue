<template>
<div>
    <b-navbar class="nav" toggleable="md" type="dark" fixed="top">

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-collapse is-nav id="nav_collapse">

            <b-button size="sm" id="popoverButton-event" variant="info" type="submit">Basic</b-button>
            <b-button size="sm" variant="info" class="button" type="submit" v-on:click="editor">Editor</b-button>

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

    <h1>Service Dummy Hash</h1>
    <h3>DUMMY-HASH</h3>

    <b-container class="border">
        <b-row>
            <b-col class="border">
                <div v-for="(dummyhash, key) in dummys.slot[0]">
                    <h5>{{key}}</h5>
                </div>
                <div v-for="(dummy, key) in dummys.slot[0].responseData">
                    <strong>{{key}}</strong>
                    <p>{{dummy}}</p>
                </div>
            </b-col>
            <b-col class="border">
                <div v-for="(dummyhash, key) in dummys.slot[1]">
                    <h5>{{key}}</h5>
                </div>
                <div v-for="(dummy, key) in dummys.slot[1].responseData">
                    <strong>{{key}}</strong>
                    <p>{{dummy}}</p>
                </div>
            </b-col>
            <b-col class="border">
                <div v-for="(dummyhash, key) in dummys.slot[2]">
                    <h5>{{key}}</h5>
                </div>
                <div v-for="(dummy, key) in dummys.slot[2].responseData">
                    <strong>{{key}}</strong>
                    <p>{{dummy}}</p>
                </div>
            </b-col>
            <b-col class="border">
                <div v-for="(dummyhash, key) in dummys.slot[3]">
                    <h5>{{key}}</h5>
                </div>
                <div v-for="(dummy, key) in dummys.slot[3].responseData">
                    <strong>{{key}}</strong>
                    <p>{{dummy}}</p>
                </div>
            </b-col>
        </b-row>
    </b-container>
    <hr>
    <h3>BUYERS-UI</h3>

    <b-container class="border">
        <b-row>
            <b-col class="border">
                <div v-for="(dummyscm, key) in buyers.slot[0]">
                    <h5>{{key}}</h5>
                </div>
                <div v-for="(dummy, key) in buyers.slot[0].responseData">
                    <strong>{{key}}</strong>
                    <p>{{dummy}}</p>
                </div>
            </b-col>
            <b-col class="border">
                <div v-for="(dummyscm, key) in buyers.slot[1]">
                    <h5>{{key}}</h5>
                </div>
                <div v-for="(dummy, key) in buyers.slot[1].responseData">
                    <strong>{{key}}</strong>
                    <p>{{dummy}}</p>
                </div>
            </b-col>
            <b-col class="border">
                <div v-for="(dummyscm, key) in buyers.slot[2]">
                    <h5>{{key}}</h5>
                </div>
                <div v-for="(dummy, key) in buyers.slot[2].responseData">
                    <strong>{{key}}</strong>
                    <p>{{dummy}}</p>
                </div>
            </b-col>
            <b-col class="border">
                <div v-for="(dummyscm, key) in buyers.slot[3]">
                    <h5>{{key}}</h5>
                </div>
                <div v-for="(dummy, key) in buyers.slot[3].responseData">
                    <strong>{{key}}</strong>
                    <p>{{dummy}}</p>
                </div>
            </b-col>
            <b-col>
                <div v-for="(dummyscm, key) in buyers.slot[4]">
                    <h5>{{key}}</h5>
                </div>
                <div v-for="(dummy, key) in buyers.slot[4].responseData">
                    <strong>{{key}}</strong>
                    <p>{{dummy}}</p>
                </div>
            </b-col>
        </b-row>
    </b-container>
    <hr>
    <h3>DUMMY-HASH-SCM</h3>
    <b-container class="border">
        <b-row>
            <b-col class="border">
                <div v-for="(dummyscm, key) in dummyscms.slot[0]">
                    <h5>{{key}}</h5>
                </div>
                <div v-for="dummyscm in dummyscms.slot[0].responseData.slice(0,1)">
                    <strong>author</strong>
                    <p>{{dummyscm.author}}</p>
                    <strong>message</strong>
                    <p>{{dummyscm.message}}</p>
                    <strong>start time</strong>
                    <p>{{dummyscm.start_time}}</p>
                    <strong>end time</strong>
                    <p>{{dummyscm.end_time}}</p>
                </div>
            </b-col>
            <b-col class="border">
                <div v-for="(dummyscm, key) in dummyscms.slot[1]">
                    <h5>{{key}}</h5>
                </div>
                <div v-for="dummyscm in dummyscms.slot[1].responseData.slice(0,1)">
                    <strong>author</strong>
                    <p>{{dummyscm.author}}</p>
                    <strong>message</strong>
                    <p>{{dummyscm.message}}</p>
                    <strong>start time</strong>
                    <p>{{dummyscm.start_time}}</p>
                    <strong>end time</strong>
                    <p>{{dummyscm.end_time}}</p>
                </div>
            </b-col>
            <b-col class="border">
                <div v-for="(dummyscm, key) in dummyscms.slot[2]">
                    <h5>{{key}}</h5>
                </div>
                <div v-for="dummyscm in dummyscms.slot[2].responseData.slice(0, 1)">
                    <strong>author</strong>
                    <p>{{dummyscm.author}}</p>
                    <strong>message</strong>
                    <p>{{dummyscm.message}}</p>
                    <strong>start time</strong>
                    <p>{{dummyscm.start_time}}</p>
                    <strong>end time</strong>
                    <p>{{dummyscm.end_time}}</p>
                </div>
            </b-col>
            <b-col>
                <div v-for="(dummyscm, key) in dummyscms.slot[3]">
                    <h5>{{key}}</h5>
                </div>
                <div v-for="dummyscm in dummyscms.slot[3].responseData.slice(0,1)">
                    <strong>author</strong>
                    <p>{{dummyscm.author}}</p>
                    <strong>message</strong>
                    <p>{{dummyscm.message}}</p>
                    <strong>start time</strong>
                    <p>{{dummyscm.start_time}}</p>
                    <strong>end time</strong>
                    <p>{{dummyscm.end_time}}</p>
                </div>
            </b-col>
        </b-row>
    </b-container>

</div>
</template>

<script>
import firebase from 'firebase'

export default {
    data() {
        return {
            services: [],
            dummys: [],
            buyers: [],
            dummyscms: [],
            username: '',
            password: ''
        }
    },

    created() {
        this.$http.get('https://dummy-hash.azurewebsites.net/azure/deployments', {
            headers: {
                token: window.localStorage.getItem('token')
            }
        }).then((response) => {
            console.log(response.data[0]);
            this.services = response.data;
            this.dummys = response.data[0];
            this.buyers = response.data[1];
            this.dummyscms = response.data[2];
        });
    },

    methods: {
        logOut() {
            firebase.auth().signOut().then((logout) => {
                localStorage.removeItem("token");
                this.$router.push('/');
            })
        },

        editor() {
            this.$router.push('/editor')
        },

        savebasic() {
            this.$http.put('http://dummy-hash.azurewebsites.net/azure/auth', {
                headers: {
                    token: window.localStorage.getItem('token')
                },
                username: this.username,
                password: this.password
            }).then(
                (user) => {
                    console.log(user)
                },
                (err) => {
                    console.log(err)
                }
            );
        }
    },
}
</script>

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

.border {
    border-style: solid;
}

h3 {
    text-transform: uppercase;
    line-height: 1.8;
}

h5 {
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

.border {
    border-style: solid;
}
</style>
