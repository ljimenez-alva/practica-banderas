<template>
    <div class="title-div">
        <label class="title">{{name}}</label>
    </div>
</template>

<script>
    export default {
        name: "FlagTitle",
        props:['name'],
        data(){
            return{
                
            }
        }
        
    }
</script>

<style scoped>
.title{
    font: 25px Calibri, sans-serif ;
    font-weight: bold;
    color: #000;
}   

.title-div{
    text-align: left;
}
</style>