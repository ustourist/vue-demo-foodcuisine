<template>
    <div class="filter_component">
        <div class="items_group">
            <div class="items">
                <div class="title">
                    <p>食譜</p>
                </div>
                <div class="content_block">
                    <div class="addtolist_component">
                        <div class="input_block">
                            <input type="text" v-model="SearchList_food_name" placeholder="番茄">
                            <button @click="on_AddSearchList_food_name(SearchList_food_name)">加入</button>
                        </div>
                        <div class="list_block">
                            <ul class="ul_items" v-if="SearchListArray">
                                <li class="ul_li_items" v-for="item in SearchListArray" :key="item">
                                    <p>{{item}}</p>
                                    <button @click="on_RemoveSearchList_food_name(item)">Ｘ</button>
                                </li>
                            </ul>
                            <div class="txt" v-if="SearchListArray.length==0">
                                <p>尚未加入食物名稱</p>
                            </div>
                        </div>
                        <div class="button_block">
                            <button @click="on_SearchList_food_name()">搜尋</button>
                        </div>
                        <span v-if="TestStatus">{{SearchListArray}}</span>
                    </div>
                </div>
            </div>
            <div class="items">
                <div class="title">
                    <p>營養成分</p>
                </div>
                <div class="content_block">
                    <div class="checkbox_group_component">
                        <div class="checkbox_items">
                            <input type="checkbox" id="vitaminA" value="維生素A" v-model="Nutrition_checkedNames">
                            <label for="vitaminA">維生素A</label>
                        </div>
                        <div class="checkbox_items">
                            <input type="checkbox" id="vitaminB" value="維生素B" v-model="Nutrition_checkedNames">
                            <label for="vitaminB">維生素B</label>
                        </div>
                        <div class="checkbox_items">
                            <input type="checkbox" id="vitaminC" value="維生素C" v-model="Nutrition_checkedNames">
                            <label for="vitaminC">維生素C</label>
                        </div>
                        <span v-if="TestStatus">{{ Nutrition_checkedNames }}</span>
                    </div>
                </div>
            </div>
            <div class="items">
                <div class="title">
                    <p>季節</p>
                </div>
                <div class="content_block">
                    <div class="checkbox_group_component">
                        <div class="checkbox_items">
                            <input type="checkbox" id="spring" value="春" v-model="Season_checkedNames">
                            <label for="spring">春</label>
                        </div>
                        <div class="checkbox_items">
                            <input type="checkbox" id="summer" value="夏" v-model="Season_checkedNames">
                            <label for="summer">夏</label>
                        </div>
                        <div class="checkbox_items">
                            <input type="checkbox" id="autumn" value="秋" v-model="Season_checkedNames">
                            <label for="autumn">秋</label>
                        </div>
                        <div class="checkbox_items">
                            <input type="checkbox" id="winter" value="冬" v-model="Season_checkedNames">
                            <label for="winter">冬</label>
                        </div>
                        <span v-if="TestStatus">{{ Season_checkedNames }}</span>
                    </div>
                </div>
            </div>
            <div class="items">
                <div class="title">
                    <p>中醫健康</p>
                </div>
                <div class="content_block">
                    <div class="checkbox_group_component">
                        <div class="checkbox_items">
                            <input type="checkbox" id="heart" value="心臟" v-model="Organ_checkedNames">
                            <label for="heart">心臟</label>
                        </div>
                        <div class="checkbox_items">
                            <input type="checkbox" id="lung" value="肺臟" v-model="Organ_checkedNames">
                            <label for="lung">肺臟</label>
                        </div>
                        <div class="checkbox_items">
                            <input type="checkbox" id="liver" value="肝臟" v-model="Organ_checkedNames">
                            <label for="liver">肝臟</label>
                        </div>
                        <span v-if="TestStatus">{{ Organ_checkedNames }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="button_block">
            <div class="btnnn">
                <button @click="Emit_Filter('filter')">篩選</button>
            </div>
            <div class="btnnn">
                <button @click="Emit_Filter('cancel')">取消</button>
            </div>
        </div>
    </div>

</template>



<script>
    export default {
        name: 'Filter_Component',
    }
</script>



<script setup>
    import { ref , defineEmits} from "vue";

    let TestStatus = ref(true);

    let SearchList_food_name = ref([]);
    let SearchListArray = ref([]);
    let Nutrition_checkedNames = ref([]);
    let Season_checkedNames = ref([]);
    let Organ_checkedNames = ref([]);




    function on_AddSearchList_food_name(param_SearchList_food_name){
        this.SearchListArray.push(param_SearchList_food_name);
        this.SearchList_food_name = '';
    }
    function on_RemoveSearchList_food_name(param_RemoveSearchList_food_name){
        this.SearchListArray = this.SearchListArray.filter((item) => item !== param_RemoveSearchList_food_name);
    }
    function on_SearchList_food_name(){
        console.log(this.SearchListArray);
    }

    const emit = defineEmits(['on_Filter_Foods_List']);
    function Emit_Filter(param_status){
        if(param_status=='filter'){
            let var_filter_data = this.SearchListArray.concat(this.Nutrition_checkedNames, this.Season_checkedNames,this.Organ_checkedNames);
            console.log('var_filter_data',var_filter_data);
            emit('on_Filter_Foods_List', var_filter_data);
            // emit('on_Filter_Foods_List', this.SearchListArray, this.Nutrition_checkedNames, this.Season_checkedNames,this.Organ_checkedNames);
        }else{
            this.SearchListArray = [];
            this.SearchList_food_name = []; 
            this.Nutrition_checkedNames = [];
            this.Season_checkedNames = [];
            this.Organ_checkedNames = [];
            emit('on_Filter_Foods_List', []);
        }
        
    }



    
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import './Filter_Component.css';

</style>
    