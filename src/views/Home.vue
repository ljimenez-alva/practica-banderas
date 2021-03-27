<template>
    <LayoutDefault>
        <router-view></router-view>
        <Flags></Flags>
    </LayoutDefault> 
</template>

<script>
import Flags from '../components/Flags.vue'
import LayoutDefault from '../layouts/LayoutDefault.vue'

    export default {
        name: "Home",
        components: { 
            LayoutDefault, 
            Flags 
        },
        data(){
            return {}
        }
        
    }
</script>

<style lang="scss" scoped>

</style>