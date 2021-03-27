<template>
    <div class="layout-default">
        <Header></Header>
        <main>
            <slot/>
        </main>
    </div>
</template>

<script>
import Header from '../components/Header.vue'

    export default {
        name: "LayoutDefault",
        components: { 
            Header 
        },
        data(){
            return{}
        }
        
    }
</script>

<style lang="scss" scoped>

</style>