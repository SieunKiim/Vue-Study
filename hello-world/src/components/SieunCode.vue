<template>
  <div>
    <h1>{{title}}</h1>
    <button @click="updateName">바꾼다</button>
  </div>
</template>

<script>
export default{
    props:['title'],

    data(){
        return{
            name : "시은이다.",
        }
    
    },
    methods : {
        updateName(){
            this.name = "시은 Update";
        } 
    }
}
</script>

<style scoped> 
h1 {
    color : red;
}
</style>