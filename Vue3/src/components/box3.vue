<template>
 <h1>"Check Box"</h1>
<label for="java1"> JAVA</label>
<input type="checkbox" value="java" v-model="tech" id="java1">
<label for="python1"> Python</label>
<input type="checkbox" value="python" v-model="tech" id="python1">
<label for="C++1"> C++</label>
<input type="checkbox" value="C++" v-model="tech" id="C++1">
<label for="javascript1"> JAVASCRIPT</label>
<input type="checkbox" value="javascript" v-model="tech" id="javascript1">
<label for="Oop1"> Oop</label>
<input type="checkbox" value="Oop" v-model="tech" id="Oop1">
<h4>Selected:{{ tech }}</h4><br>

<h1>"Radio Button"</h1>
<label for="Stud">Student</label>
<input type="radio" value="Student" v-model="who" name="who" id="Stud">
<label for="tec">Teacher</label>
<input type="radio" value="Teacher" v-model="who" name="who" id="tec">
<h4>I am a :{{ who }}</h4>

</template>
    
<script>
    export default{
      name: 'box3',
      data(){
        return{
         tech:[],
         who:null
        }
        }
      }
    //   methods:{
       
    //     }
    //   }
    
    </script>
    
    
    
    <style scoped>

    </style>
    