<template>
    <div class="infodetail_component">
        <div class="pic_block">
            <div class="pic">
                <img src="" alt="">
            </div>
            <div class="name">
                <p>{{Cuisines_List_Infodetail_Data.cuisine_name}}</p>
            </div>
        </div>
        <div class="content_block">
            <div class="items_group">
                <div class="items">
                    <div class="item_name">
                        <p>材料</p>
                    </div>
                    <ul class="ul_items">
                        <li class="ul_li_items" v-for="Cuisines_item in Cuisines_List_Infodetail_Data.cuisine_foodname" :key="Cuisines_item.value">
                            <a href="" alt="">{{Cuisines_item}}</a>
                        </li>
                    </ul>
                </div>
                <div class="items">
                    <div class="item_name">
                        <p>作法</p>
                    </div>
                    <div class="txt">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime dicta, debitis iste ex molestias nobis similique quaerat iusto ullam, unde esse soluta autem repudiandae. Itaque cumque deleniti aspernatur inventore commodi!</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="button_block">
            <div class="btnnn">
                <button @click="Emit_add_Favo_Cuisine(cuisine_id)">加入最愛</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {  
        name: 'Infodetail_Component'
    }
</script>


<script setup>
    import { defineProps , defineEmits } from "vue";
    
    defineProps({
        Cuisines_List_Infodetail_Data: {
            type: Object,
            default: () => {}
        }
    });

    const emit = defineEmits(['on_click_add_Favo_Cuisine']);
    function Emit_add_Favo_Cuisine(param_item_cuisine) { 
        emit('on_click_add_Favo_Cuisine', param_item_cuisine);
    }

</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
@import './Infodetail_Component.css';

</style>
    