<template>
    <div class="read_mode_component">
            <div class="txt">
                <p>閱覽模式</p>
            </div>
            <div class="btnnn">
                <button :class="[store_readmode === 'list' ? 'Cardactive': '' ]" @click="on_read_mode('list')">List</button>
                <button :class="[store_readmode === 'card' ? 'Cardactive': '' ]" @click="on_read_mode('card')">Card</button>
            </div>
    </div>
    <div class="info_cardlist_group_component" :class="{ Cardactive: CardisActive }">
        <div class="info_cardlist_component" v-for="item_food of All_foods_list" :key="item_food.foodname">
            <div class="pic_block">
                <div class="pic">
                    <img src="" alt="">
                </div>
            </div>
            <div class="content_block">
                <div class="name">
                    <p>{{item_food.foodname}}</p>
                </div>
                <div class="items_group">
                    <div class="items">
                        <div class="item_name">
                            <p>營養成分</p>
                        </div>
                        <ul class="ul_items">
                            <li class="ul_li_items" v-for="item_nutrition of item_food.data.nutritions" :key="item_nutrition.nutrition_name">
                                <!-- <a href="" alt="">{{item_nutrition.nutrition_name}}</a> -->
                                <p>{{item_nutrition.nutrition_name}}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="button_block">
                <div class="btnnn">
                    <button @click="Emit_Foods_List(item_food)">更多資訊</button>
                </div>
                <div class="btnnn">
                    <button @click="Navigation_to_cuisine_page('Cuisine_Page', item_food.foodname)">相關食譜</button>
                </div>
                <div class="btnnn">
                    <button @click="Emit_add_Favo_Food(item_food)">加入最愛</button>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
    export default {
        name: 'Info_Cardlist_Group_Component',
    }
</script>


<script setup>
    import { ref , defineProps , defineEmits } from "vue";
    import { useRouter } from 'vue-router';

    let CardisActive = ref(false);
    let store_readmode = ref('list');
    
    const router = useRouter();
    function Navigation_add_query(param_query){
        router.push({
            query: { foodname: param_query },
        });
    }
    function Navigation_to_cuisine_page(param_page, param_query){
        router.push({
            name: param_page,
            query: { foodname: param_query },
        });
    }


    defineProps({
        foodname: {
            type: String
        },
        All_foods_list: {
            type: Array,
            default: () => []
        }
    });


    const emit = defineEmits(['on_click_Foods_List','on_click_add_Favo_Food']);
    function Emit_Foods_List(param_item_food) {
        emit('on_click_Foods_List', param_item_food);
        Navigation_add_query(param_item_food.foodname);
    }

    function Emit_add_Favo_Food(param_item_food) { 
        emit('on_click_add_Favo_Food', param_item_food);
    }
    

    function on_read_mode(param_list_card) {
        if(param_list_card === 'list'){
            CardisActive.value = false;
        }else{
            CardisActive.value = true;
        }
        store_readmode.value = param_list_card;
    }


    
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import './Info_Cardlist_Group_Component.css';

</style>
    