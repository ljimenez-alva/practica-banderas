<template>
    <div class="row">
        <div class="col link">
            <router-link :to="{ name : 'flag-details', params : { id: flag.alpha3Code }}">
                <div>
                <img
                    :src="flag.flag"
                    alt=""
                    class="img-fluid border"
                >
                </div>
                <div>
                    <FlagTitle :name = "flag.name"></FlagTitle>
                </div>
                <div>
                    <FlagElement index = "Population" :value = "flag.population"></FlagElement>
                </div>
                <div>
                    <FlagElement index = "Región" :value = "flag.region"></FlagElement>
                </div>
                <div>
                    <FlagElement index = "Capital" :value = "flag.capital"></FlagElement>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import FlagTitle from "./FlagTitle"
import FlagElement from "./FlagElement"

    export default {
        name: "FlagsList",
        components:{
            FlagTitle,
            FlagElement
        },
        data(){
            return{}
        },
        props:{
            flag : Object
        }
    }
</script>

<style  scoped>
.link{
    text-decoration:none;
}

</style>