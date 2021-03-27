<template>
    <div class="text-complete">
        <label><span class="index">{{index}}: </span><span class="value">{{value}}</span></label>
    </div>
</template>

<script>
    export default {
        name: "FlagItem",
        props:['index','value'],
        data(){
            return{
                
            }
        }
        
    }
</script>

<style scoped>
.index{
    font: 18px Calibri, sans-serif ;
    font-weight: bold;
    color: #000;
}

.value{
    font: 16px Calibri, sans-serif ;
    font-weight: normal;
    color: #000;
}

.text-complete{
    text-align: left;
}
</style>