<template>
    <LayoutDefault>
        <DetailsFlag :details = 'details'></DetailsFlag>
    </LayoutDefault> 
</template>

<script>
import DetailsFlag from '../components/DetailsFlag'
import LayoutDefault from "../layouts/LayoutDefault"
import Services from "../services"

    export default {
        name: "FlagDetails",
        components: {
            DetailsFlag,
            LayoutDefault
        },
        props:['id'],
        data(){
            return{
                details: []
            }
        },
        async mounted(){
            try{
                let response = await Services.getDetails(this.id);
                this.details = response.data;
            }catch(e){
                console.log(e)
            }
        },
        async beforeRouteUpdate(to,from,next)
        {
          try{
                let response = await Services.getDetails(to.params.id);
                this.details = response.data;
                next()
          }
          catch(e){
            next()
          }
        }
    }
</script>

<style lang="scss" scoped>

</style>