<template>
    <h1>"Welcome Everyone"</h1>
    <h2>Login Form</h2>
    <input type="text" placeholder="Enter email" v-model="email"/><br><br>
    <input type="password" placeholder="Enter password" v-model="password"/><br><br>
    <button v-on:click="btn()" type="button">Click </button>
</template>


<script>
export default{
    name: 'Home',
    data(){
        return{
            email: null,
            password: null,
            
        }
    },
    methods:{
        btn(){
            console.warn("values:",this.email,this.password);
            alert("Button chal raha");
        },
    }
}
</script>

<style scoped>
h1{
    color: rgb(119, 0, 255);
    font-size : 1.5em;
}
button{
    background-color: rgb(221, 245, 9);
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    cursor: pointer;
    transition: border-color 0.25s;
}
button:hover{
    color: rgb(255, 255, 255);
    border-color: #000000;
    background-color: blueviolet;
}
</style>