<template>
<h1>If-Else</h1>
<h2 v-if="show">If Condition</h2>
<h2 v-else>else Condition</h2>
 <button v-on:click="show=!show" type="button">Toogle</button>
</template>


<script>
export default{
    name: 'ifelse',
    data(){
        return{
            show:true
        }
    }

    }

</script>

<style scoped>
h1{
    color: rgb(119, 0, 255);
    font-size : 2.5em;
}
h3{
    color: rgb(0, 0, 0);
    font-size : 1.5em;
}

button{
    background-color: rgb(27, 47, 224);
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    cursor: pointer;
    transition: border-color 0.25s;
    color: #1dd1e9;
}
button:hover{
    color: rgb(255, 255, 255);
    border-color: #db2b2b;
    background-color: blueviolet;
}
</style>