<template>
    <div class="page_block">
        <div class="confirm_modal_component">
            <div class="confirm_modal_bg"></div>
            <div class="confirm_modal_block">
                <div class="title">
                    <p>訊息通知</p>
                </div>
                <div class="content_block">
                    <p>已成功加入！</p>
                </div>
                <div class="btnnn">
                    <button class="">確認</button>
                </div>
            </div>
        </div>

        <div class="page_content_block">
            <div class="page_left_content_block width250">

            </div>
            <div class="page_right_content_block width250">
                
            </div>
        </div>
    </div>
</template>



<script>
    


    export default {
        name: 'Nutrition_Page',
        data(){
            return {
                
            }
        },
        methods:{
            

        },
        watch:{
            
        },
        mounted() {
            
        }
    }

</script>



<style scoped>
.confirm_modal_component{
    position: relative;
}
.confirm_modal_bg{
    background-color: rgba(0,0,0,0.3);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    z-index: -1;
}
.confirm_modal_component .confirm_modal_block{
    width: 400px;
    height: 300px;
    background-color: #fff;
    box-shadow: 0px 0px 5px #555;
    position: absolute;
    left: 0;
    right: 0;
    top: 70px;
    margin: auto;
    border-radius: 10px;
    overflow: hidden;
}
.confirm_modal_component .confirm_modal_block .title{
    padding: 20px;
    background-color: rgb(236, 251, 175);
}
.confirm_modal_component .confirm_modal_block .title p{
    font-size: 16px;
    font-weight: bold;
    color: #000;
}
.confirm_modal_component .confirm_modal_block .content_block{
    padding: 40px 20px;
    margin-bottom: 30px;
}
.confirm_modal_component .confirm_modal_block .content_block p{
    font-size: 14px;
    font-weight: bold;
    color: #333;
    text-align: center;
}
.confirm_modal_component .confirm_modal_block .btnnn{
    padding: 20px;
    text-align: center;
}
.confirm_modal_component .confirm_modal_block .btnnn button{
    font-size: 12px;
    font-weight: bold;
    color: #333;
    background-color: #fff;
    border: 1px solid #ddd;
    padding: 10px 30px;
    border-radius: 3px;
    cursor: pointer;
    background-color: rgb(179, 235, 94);
}

</style>