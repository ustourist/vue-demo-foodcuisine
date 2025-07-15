<template>
    <div class="Favo_List_Component">
        <div class="title">
            <p>我的 <span class="highlight">{{ props.FavoFoodCuisine }}</span> 收藏清單</p>
        </div>
        <div class="content_block">
            <ul class="ul_items">
                <li class="ul_li_items" v-for="item_favo_food of props.Favo_list" :key="item_favo_food.list_name">
                    <a alt="" @click="Navigation_to_page(item_favo_food.list_name)">{{item_favo_food.list_name}}</a>
                </li>
            </ul>
        </div>
    </div>
</template>



<script>
    export default {
        name: 'Favo_List_Component'
    }
</script>

<script setup>
    import { defineProps } from "vue";
    import { useRouter } from 'vue-router';

    const router = useRouter();
    function Navigation_to_page(param_query){
        let toPage = '';
        if(props.FavoFoodCuisine == '食物'){
            toPage = 'Food_Page';
        }else{
            toPage = 'Cuisine_Page';
        }
        router.push({
            name: toPage,
            query: { foodname: param_query },
        });
    }

    const props = defineProps({
        FavoFoodCuisine: {
            type: String,
            default: () => ''
        },
        Favo_list: {
            type: Array,
            default: () => []
        }
    });
    
</script>



<style scoped>
@import './Favo_List_Component.css';
</style>