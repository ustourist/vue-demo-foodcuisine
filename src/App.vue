<template>
    <Header_Component/>
    <router-view/>
</template>



<script>
    import Header_Component from './components/header_component/Header_Component.vue'
    

    export default {
        name: 'App',
        components: {
            Header_Component
            
        }
    }
</script>



<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
    *{
        list-style: none;
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        letter-spacing: 0.7px;
    }

    .page_block{
        margin-top: 68px;
    }
    .page_content_block{
        display: flex;
        background-color: #eee;
    }
    .page_left_content_block.width250{
        width: calc(100% - 250px);
    }
    .page_right_content_block.width250{
        width: 250px;
    }
    .page_left_content_block.width500{
        width: calc(100% - 500px);
    }
    .page_right_content_block.width500{
        width: 500px;
    }
    section{
        margin-bottom: 80px;
    }
    .Combine_Template_Style{
        box-shadow: 0 0 10px #ccc;
        background-color: #fff;
        padding: 30px 40px 50px 40px;
        margin: 20px ;
        border-radius: 10px;
    }
    .highlight{
        color: #e00;
        font-weight: bold;
    }

</style>


