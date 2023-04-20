<template>
  <div>
    <h1>시은 home</h1>
    <p>{{name}}</p>
    <SieunCode title="홈"/>
    {{name}}
    <InputFeild :name="name"/>
  </div>
</template>

<script>
import SieunCode from '@/components/SieunCode.vue';
import InputField from '@/components/inputField.vue';

export default{
  components:{
    SieunCode,
    InputField
  },

  data(){
    return{
      name : "시은"
    }
  }
}
</script>

<style scoped> 
h1{
  color : red;
}
</style>