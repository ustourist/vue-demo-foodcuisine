<template>
    <header>
        <div class="header_component">
            <ul class="ul_items">
                <li class="ul_li_items">
                    <router-link to="/Food_Page">Food</router-link>
                </li>
                <li class="ul_li_items">
                    <router-link to="/Cuisine_Page">Cuisine</router-link>
                </li>
                <li class="ul_li_items">
                    <router-link to="/Nutrition_Page">Nutrition</router-link>
                </li>
            </ul>
        </div>
    </header>
</template>


<script>
    
    export default {
        name: 'Header_Component',
        props: {
            
        }
        
    }

</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
@import './Header_Component.css';

</style>
    