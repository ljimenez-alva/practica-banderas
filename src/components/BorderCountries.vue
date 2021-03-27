<template>
    <div>
        <button class="button button-text" @click="redirect">{{border}} </button>
    </div>
</template>

<script>
    export default {
        name: "BorderCountries",
        props:['border'],
        data(){
            return{}
        },
        methods:{
            redirect(){
                this.$router.push({name: 'flag-details', params:{ id: this.border}})
            }
        }
    }
</script>

<style  scoped>

.button{
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 7px;
    padding-top: 7px;

    margin-left: 3px;
    margin-right: 3px;

    border-color: white;
    background-color: white;
}

.button-text{
    font: 13px Calibri, sans-serif ;
    text-decoration-line:underline;
}


</style>