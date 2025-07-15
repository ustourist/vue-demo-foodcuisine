<template>
    <div class="Combine_Template_Style">
        <div class="title_component">
            <p><span class="highlight">{{ InfoListname }}</span> 食譜</p>
        </div>
        <div class="info_list_group_component">
            <div class="info_list_component" v-for="Cuisines_item in Cuisines_List_Data.cuisines" :key="Cuisines_item.cuisine_name"
                                                    @click="Emit_Cuisines_List(Cuisines_item)">
                <div class="pic_block">
                    <div class="pic">
                        <img src="" alt="">
                    </div>
                </div>
                <div class="content_block">
                    <div class="name">
                        <p>{{ Cuisines_item.cuisine_name }}</p>
                    </div>
                    <div class="items_group">
                        <div class="items">
                            <div class="item_name">
                                <p>食材</p>
                            </div>
                            <ul class="ul_items">
                                <li class="ul_li_items" v-for="item in Cuisines_item.cuisine_foodname" :key="item">
                                    <a href="" alt="">{{item}}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="button_block">
                    <div class="btnnn">
                        <button @click="Emit_add_Favo_Cuisine(Cuisines_item.cuisine_id)">加入最愛</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>


<script>
    export default {
        name: 'Info_List_Group_Component',
    } 
</script>


<script setup>
    import { defineProps , defineEmits } from "vue";
    
    defineProps({
        InfoListname: {
            type: String,
            default: () => ''
        },
        Cuisines_List_Data: {
            type: Object,
            default: () => {}
        }
    });


    const emit = defineEmits(['on_click_Cuisines_List' , 'on_click_add_Favo_Cuisine']);
    function Emit_Cuisines_List(param_Cuisines_item) {
        emit('on_click_Cuisines_List', param_Cuisines_item);
    }
    function Emit_add_Favo_Cuisine(param_item_cuisine) { 
        console.log('param_item_cuisine', param_item_cuisine);
        emit('on_click_add_Favo_Cuisine', param_item_cuisine);
    }
    
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import './Info_List_Group_Component.css';

</style>