<template>
    <div class="page_block">
        <div class="page_content_block">
            <div class="page_left_content_block width500">
                <section v-if="isShow_Info_List_Group_Component">
                    <Info_List_Group_Component :InfoListname=foodnameTitle :Cuisines_List_Data=Data_Food_cuisines_list 
                                                @on_click_Cuisines_List="show_Cuisines_List_Info"
                                                @on_click_add_Favo_Cuisine="show_add_Favo_Cuisine"/>
                </section>
                <section>
                    <Info_List_Group_Component :InfoListname=hotnameTitle :Cuisines_List_Data=Data_All_cuisines_list 
                                                @on_click_Cuisines_List="show_Cuisines_List_Info"
                                                @on_click_add_Favo_Cuisine="show_add_Favo_Cuisine"/>
                </section>
            </div>
            <div class="page_right_content_block width500">
                <aside>
                    <Infodetail_Component :Cuisines_List_Infodetail_Data=Data_Food_Cuisines_Detail
                                            @on_click_add_Favo_Cuisine="show_add_Favo_Cuisine"/>
                </aside>
            </div>
        </div>
    </div>
    
</template>



<script>
    import Infodetail_Component from './../components/cuisine_page/Infodetail_Component.vue'
    import Info_List_Group_Component from './../components/cuisine_page/Info_List_Group_Component.vue'
    import axios from 'axios';

    const api_url = 'https://49128c62-de13-44c0-ab91-190411737159.mock.pstmn.io/api/';

    export default {
        name: 'Cuisine_Page',
        data() {
            return {
                var_search_food_name: '',
                foodnameTitle: '',
                hotnameTitle: '熱門',
                Data_Food_cuisines_list: {},
                Data_All_cuisines_list: {},
                Data_Food_Cuisines_Detail: {},
                isShow_Info_List_Group_Component: false
            }
        },
        components: {
            Infodetail_Component,
            Info_List_Group_Component
        },
        methods:{
            show_Cuisines_List_Info(param_Data_Food_cuisines_list){
                this.Data_Food_Cuisines_Detail = param_Data_Food_cuisines_list;
                // console.log('this.Data_Food_Cuisines_Detail', this.Data_Food_Cuisines_Detail);
            },
            async fetchData_all_cuisines_list(param_all_cuisines_list) {
                try {
                    const Data_all_cuisines_list_url = await axios.get(api_url + param_all_cuisines_list);
                    this.Data_All_cuisines_list = Data_all_cuisines_list_url.data;
                    // console.log('Data_All_cuisines_list', this.Data_All_cuisines_list);
                    this.Data_Food_Cuisines_Detail = this.Data_All_cuisines_list.cuisines[0];
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            },
            async fetchData_food_cuisines_list(param_all_cuisines_list) {
                try {
                    const Data_food_cuisines_list_url = await axios.get(api_url + param_all_cuisines_list + '?foodname=' + this.var_search_food_name);
                    this.Data_Food_cuisines_list = Data_food_cuisines_list_url.data;
                    this.foodnameTitle = this.var_search_food_name;
                    console.log('this.var_search_food_name', this.var_search_food_name);
                    console.log('Data_food_cuisines_list', this.Data_Food_cuisines_list);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            },
            show_add_Favo_Cuisine(param_favo_cuisine_item){
                console.log('param_favo_cuisine_item', param_favo_cuisine_item);
                this.post_favo_cuisine_list_Data('favo_cuisine_list','person_1', param_favo_cuisine_item.cuisine_id);
            },
            post_favo_cuisine_list_Data(param_favo_cuisine_list, param_person_id, param_favo_cuisine_item) {
                let testurl = api_url + param_favo_cuisine_list + '?person_id=' + param_person_id + '&food_id=' + param_favo_cuisine_item;
                console.log('testurl',testurl);
                axios.post(api_url + param_favo_cuisine_list + '?person_id=' + param_person_id + '&food_id=' + param_favo_cuisine_item, {
                    person_id: param_person_id,
                    cuisine_id: param_favo_cuisine_item
                }).then(response => {
                    // Handle successful response
                    console.log('post_favo_cuisine response data' , response.status , response.data);
                    // this.fetch_favo_food_list_Data('favo_food_list');
                }).catch(error => {
                    // Handle errors
                    console.error(error);
                });
            }
        },
        watch: {
            '$route.query': {
                handler(newQuery) {
                    console.log('cuisine page Query changed:', newQuery);
                    if(newQuery.foodname){
                        this.isShow_Info_List_Group_Component = true;
                        this.var_search_food_name = newQuery.foodname;
                    }else{
                        this.isShow_Info_List_Group_Component = false;
                    }   
                    // For example, fetch data based on the new query
                    // this.fetchData(newQuery);
                },
                deep: true, // Watch for changes within the query object
                immediate: true // Execute handler on component creation
            }
        },
        mounted() {
            this.fetchData_all_cuisines_list('all_cuisines_list');
            this.fetchData_food_cuisines_list('all_food_cuisine_list');
        }
    }
</script>



<style scoped>

</style>