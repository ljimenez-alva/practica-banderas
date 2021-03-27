<template>
    <div class="row">
        <ul class="list-group">
                <div class="col-md-3">
                    <li v-for="f in flags" :key="f.alpha3Code" class="list-group-item">
                        <FlagsList :flag = "f"></FlagsList>
                    </li>
                </div>
        </ul>
    </div>
</template>

<script>
import Services from "../services"
import FlagsList from "../components/FlagsList"

    export default {
        name: "Flags",
        components:{
            FlagsList
        },
        data(){
            return{
                flags: []
            }
        },
        async mounted(){
            try{
                let response = await Services.getAll();
                this.flags = response.data;
            }catch(e){
                console.log(e)
            }
        }
    }
</script>

<style scoped>
.div-margin{
    margin: 0%
}


</style>