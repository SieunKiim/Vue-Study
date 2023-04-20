<template>
    <div>
        <label for="">Name</label>
        <input 
            type="text" 
            :value="name"
            style="padding: 30px; border: 2px solid green;"
        >
    </div> 
</template>

<script>
export default{
    props:{
        name:{
            type : String,
            required: true
        }
    }
}
</script>