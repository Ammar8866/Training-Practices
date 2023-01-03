<template>
<h1>"Count Function"</h1>
 <button v-on:click="getdata()" type="button">Click </button>
 <h2>{{ count }}</h2>


</template>


<script>
export default{
  name: 'HelloWorld',
  // props:{
  //   msg: String,
  //   msg2: String,
  // },
  data(){
    return{
      count:0
    }
  },
  methods:{
    getdata(){
      this.count=this.count+1;
    }
  }
}
</script>



<style scoped>
h1{
  color: black;
  font-size : 2.0em;
}

h2{
  color: black;
  font-size : 2.5em;
}

button{
    background-color: rgb(250, 137, 7);
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
