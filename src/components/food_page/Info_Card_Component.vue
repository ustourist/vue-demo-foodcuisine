<template>
    <div class="info_card_component">
        <div class="title_block">
            <div class="pic">
                <img src="" alt="">
            </div>
            <div class="btnnn">
                <button @click="Navigation_to_cuisine_page('Cuisine_Page', Foods_List_Infodetail_Data.foodname)">相關食譜</button>
            </div>
            
        </div>
        <div class="content_block">
            <div class="name">
                <p>{{Foods_List_Infodetail_Data.foodname}}</p>
            </div>
            <div class="label">
                <p v-for="seasons_item in Foods_List_Infodetail_Data_data.seasons" :key="seasons_item.season_name">{{seasons_item}}</p>
            </div>
            <div class="items_group">
                <div class="items">
                    <div class="item_name">
                        <p>營養成分</p>
                    </div>
                    <ul class="ul_items">
                        <li class="ul_li_items" v-for="nutritions_item in Foods_List_Infodetail_Data_data.nutritions" :key="nutritions_item.nutrition_name">
                            <a href="" alt="">{{nutritions_item.nutrition_name}}</a>
                        </li>
                    </ul>
                </div>
                <div class="items">
                    <div class="item_name">
                        <p>中醫</p>
                    </div>
                    <ul class="ul_items">
                        <li class="ul_li_items" v-for="organs_item in Foods_List_Infodetail_Data_data.organs" :key="organs_item.organ_name">
                            <a href="" alt="">{{organs_item.organ_name}}</a>
                        </li>
                    </ul>
                </div>
                <div class="items">
                    <div class="item_name">
                        <p>禁忌</p>
                    </div>
                    <ul class="ul_items">
                        <li class="ul_li_items" v-for="taboos_item in Foods_List_Infodetail_Data_data.Taboos" :key="taboos_item.value">
                            <a href="" alt="">{{taboos_item}}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
    export default {
        name: 'Info_Card_Component',
    }
</script>

<script setup>
    import { defineProps } from "vue";
    import { useRouter } from 'vue-router';

    const router = useRouter();
    function Navigation_to_cuisine_page(param_page, param_query){
        router.push({
            name: param_page,
            query: { foodname: param_query },
        });
    }

    defineProps({
        Foods_List_Infodetail_Data: {
            type: Object,
            default: () => {}
        },
        Foods_List_Infodetail_Data_data: {
            type: Object,
            default: () => {}
        }
    });

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import './Info_Card_Component.css';

</style>
    