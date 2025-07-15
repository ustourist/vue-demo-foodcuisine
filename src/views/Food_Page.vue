<template>
    <div class="page_block">
        <Filter_Component @on_Filter_Foods_List="show_Filter_Foods_List"/>
        <div class="page_content_block">
            <div class="page_left_content_block width250">
                <section v-if="isShow_Info_Card_Component">
                    <Info_Card_Component :Foods_List_Infodetail_Data="Data_Foods_Detail"
                                            :Foods_List_Infodetail_Data_data="Data_Foods_Detail_data"/>
                </section>
                <section>
                    <Info_Cardlist_Group_Component :All_foods_list="Data_all_food_list"
                                                    @on_click_Foods_List="show_Foods_List_Info"
                                                    @on_click_add_Favo_Food="show_add_Favo_Food"/>
                </section>
            </div>
            <div class="page_right_content_block width250">
                <aside>
                    <Favo_List_Component FavoFoodCuisine="食物" :Favo_list="Data_favo_food_list.favo_food_list"/>
                    <Favo_List_Component FavoFoodCuisine="食譜" :Favo_list="Data_favo_cuisine_list.favo_cuisine_list"/>
                </aside>
            </div>
        </div>
    </div>
    
    
</template>



<script>
    import axios from 'axios';
    import Filter_Component from './../components/food_page/Filter_Component.vue'
    import Info_Card_Component from './../components/food_page/Info_Card_Component.vue'
    import Info_Cardlist_Group_Component from './../components/food_page/Info_Cardlist_Group_Component.vue'
    import Favo_List_Component from './../components/food_page/Favo_List_Component.vue'
    

    const api_url = 'https://49128c62-de13-44c0-ab91-190411737159.mock.pstmn.io/api/';


    export default {
        name: 'Food_Page',
        data(){
            return {
                var_search_food_name: '',
                Original_Data_all_food_list:{},
                Data_all_food_list: {},
                Data_Foods_Detail: {},
                Data_Foods_Detail_data: {},
                data_is_Ready: false,
                Info_Card_Component: false,
                Data_favo_food_list: {},
                Data_favo_cuisine_list: {}
            }
        },
        components: {
            Filter_Component,
            Info_Card_Component,
            Info_Cardlist_Group_Component,
            Favo_List_Component
        },
        methods:{
            async fetch_all_food_list_Data(param_all_food_list) {
                try {
                    const res = await axios.get(api_url + param_all_food_list);
                    this.Data_all_food_list = res.data;
                    this.Original_Data_all_food_list = res.data;
                    // console.log('Data_all_food_list', res.data);
                    
                    if(this.var_search_food_name){
                        this.Foodname_search_mapping_Foods_List(this.var_search_food_name,this.Data_all_food_list);
                    }else{
                        this.Data_Foods_Detail = this.Data_all_food_list[0];
                        this.Data_Foods_Detail_data = this.Data_all_food_list[0].data;
                    }
                    
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
                
            },
            async fetch_favo_food_list_Data(param_favo_food_list) {
                try {

                    const res = await axios.get(api_url + param_favo_food_list);
                    this.Data_favo_food_list = res.data;
                    this.Data_favo_food_list.favo_food_list = this.transfer_API_key_Favo_List(this.Data_favo_food_list.favo_food_list,'food');
                    console.log('Data_favo_food_list', this.Data_favo_food_list);
                    
                } catch (error) {
                    // console.error('Error fetching data:', error);
                }
                
            },
            async fetch_favo_cuisine_list_Data(param_favo_cuisine_list) {
                try {

                    const res = await axios.get(api_url + param_favo_cuisine_list);
                    this.Data_favo_cuisine_list = res.data;
                    this.Data_favo_cuisine_list.favo_cuisine_list = this.transfer_API_key_Favo_List(this.Data_favo_cuisine_list.favo_cuisine_list,'cuisine');
                    console.log('Data_favo_cuisine_list', this.Data_favo_cuisine_list);
                    
                } catch (error) {
                    // console.error('Error fetching data:', error);
                }
                
            },
            show_Foods_List_Info(param_Data_Foods_list){
                this.Data_Foods_Detail = param_Data_Foods_list;
                this.Data_Foods_Detail_data = param_Data_Foods_list.data;
                // console.log('this.Data_Foods_Detail',this.Data_Foods_Detail);
            },
            Foodname_search_mapping_Foods_List(param_var_search_food_name, param_Data_all_food_list){
                console.log('param_Data_all_food_list',param_Data_all_food_list);
                this.Data_Foods_Detail = param_Data_all_food_list.find((item) => {
                    if (item.foodname == param_var_search_food_name){
                        // console.log(item);
                        return item;
                    } 
                });
                this.Data_Foods_Detail_data = this.Data_Foods_Detail.data;
            },
            show_Filter_Foods_List(var_filter_data){
                this.Data_all_food_list = this.Original_Data_all_food_list;
            
                let store_filter_Data_all_food_list = [];
                this.Data_all_food_list = this.Data_all_food_list.filter(function(ele){
                    return ele;
                }).filter(function(item){
                        console.log('var_filter_data', var_filter_data);
                        // console.log('item.data.nutritions',item.data.nutritions);
                        for(var i=0; i<var_filter_data.length; i++){
                            let Exist_boolean = item.data.nutritions.some(function(nutritions_ele){
                                if(nutritions_ele.nutrition_name == var_filter_data[i]){
                                    return true;
                                }else{
                                    return false;
                                }
                            });
                            if(Exist_boolean){
                                console.log('item',item);
                                store_filter_Data_all_food_list.push(item);
                                return store_filter_Data_all_food_list;
                            }
                        }
                        
                    })
                
                if(!var_filter_data.length){
                    this.Data_all_food_list = this.Original_Data_all_food_list;
                }


                    
            },
            transfer_API_key_Favo_List(param_data, param_listname){
                param_data = param_data.map(item => {
                    if(param_listname == 'food'){
                        return {
                            list_name: item.foodname,
                            list_id: item.food_id
                        };
                    }else{
                        return {
                            list_name: item.cuisinename,
                            list_id: item.cuisine_id
                        };
                    }
                    
                });
                return param_data;
            },

            show_add_Favo_Food(param_favo_food_item){
                this.post_favo_food_list_Data('favo_food_list','person_1', param_favo_food_item.food_id);
            },
            post_favo_food_list_Data(param_favo_food_list, param_person_id, param_favo_food_item) {
                axios.post(api_url + param_favo_food_list + '?person_id=' + param_person_id + '&food_id=' + param_favo_food_item, {
                    person_id: param_person_id,
                    food_id: param_favo_food_item
                }).then(response => {
                    // Handle successful response
                    console.log('post_favo_food response data' , response.status , response.data);
                    // this.fetch_favo_food_list_Data('favo_food_list');
                }).catch(error => {
                    // Handle errors
                    console.error(error);
                });
            }

        },
        watch:{
            '$route.query': {
                handler(newQuery) {
                    console.log('food page Query changed:', newQuery);
                    if(newQuery.foodname){
                        this.isShow_Info_Card_Component = true;
                        this.var_search_food_name = newQuery.foodname;
                    }else{
                        this.isShow_Info_Card_Component = false;
                    }   
                    
                    // For example, fetch data based on the new query
                    this.fetch_all_food_list_Data('all_food_list');
                },
                deep: true, // Watch for changes within the query object
                immediate: true // Execute handler on component creation
            }
        },
        mounted() {
            this.fetch_all_food_list_Data('all_food_list');
            this.fetch_favo_food_list_Data('favo_food_list');
            this.fetch_favo_cuisine_list_Data('favo_cuisine_list');
        }
    }

</script>



<style scoped>




</style>