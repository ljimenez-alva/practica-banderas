<template>
    <div class="row">
        <div class="col-6">
            <img
                    :src="details.flag"
                    alt=""
                    class="img-fluid border"
            >
        </div>
        <div class="col-6">
            <div class="row">
                <div class="col">
                    <p>
                    <FlagTitle :name = "details.name"></FlagTitle>
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <p>
                       <FlagElement index = "Native Name" :value = "details.nativeName"></FlagElement>
                    </p>
                    <p>
                       <FlagElement index = "Population" :value = "details.population"></FlagElement>
                    </p>
                    <p>
                       <FlagElement index = "Región" :value = "details.region"></FlagElement>
                    </p>
                    <p>
                       <FlagElement index = "Sub Región" :value = "details.subregion"></FlagElement>
                    </p>
                    <p>
                       <FlagElement index = "Capital" :value = "details.capital"></FlagElement>
                    </p>
                </div>
                <div class="col-6">
                     <p>
                       <FlagElement index = "Top Level Domain" :value = "details.topLevelDomain"></FlagElement>
                    </p>
                    <p>
                       <FlagElement index = "Currencies" :value = "details.capital"></FlagElement>
                    </p>
                    <p>
                       <FlagElement index = "Languages:" :value = "details.capital"></FlagElement>
                    </p>
                    <p>
                    </p>
                    <p>
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-4">
                    <FlagElement index = "Border Countries" value = ""></FlagElement>
                </div>
                <div class="col-8">
                    <label v-for="b in details.borders" :key="b">
                        <BorderCountries :border="b"></BorderCountries>
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FlagElement from './FlagElement.vue'
import FlagTitle from './FlagTitle.vue'
import BorderCountries from './BorderCountries'

export default {
  components: { FlagElement,FlagTitle, BorderCountries },
        name: "FDetails",
        props:['details']
    }
</script>

<style scoped>

</style>