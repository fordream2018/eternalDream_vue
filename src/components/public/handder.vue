<template>
    <div class="page_hander">
        <div class="hander title">For Dream</div>
        <div class="hander_router">
            <div class="router_home sub_router">网站首页</div>
            <div class="router_case sub_router">开发案例</div>
            <div class="router_about sub_router">解决方案</div>
            <div class="router_about sub_router">技术支持</div>
            <div class="router_about sub_router">申请合作</div>
            <div class="router_conect sub_router">关于我们</div>
        </div>
        <div class="hander search"></div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    @Component
    export default class Handder extends Vue {
        @Prop() private msg:string;
        private name: string = "hander page";
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" scoped>
    .page_hander {
        width: 100%;
        height: 100px;
        margin: 0 auto;
        position: fixed;
        top:0px;
        left: 0px;
        z-index: 1000;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        background: black;
        opacity: 0.8;
        border-bottom: 2px solid #070a3b;
        color: white;
        .title {
            width: 40%;
            height: 100%;
            font-size: 50px;
            line-height: 100px;
            font-family: BlinkMacSystemFont;
            cursor: pointer;
        }
        .hander_router {
            width: 50%;
            height: 100%;
            line-height: 100px;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: center;
            padding-right: 20px;
            .sub_router {
                width: 20%;
                height: 100%;
                cursor: pointer;
                transition: all .3s;
            }
            .sub_router:HOVER {
                font-size: 18px;
            }
        }
    }
</style>
