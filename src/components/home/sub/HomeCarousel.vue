<template>
    <div class="page_carousel">
        <el-carousel :interval="5000000" height="750px" ref="carousel">
            <el-carousel-item v-for="item in homeItems" :key="item.index">
                <div class="carousel-every">
                    <img :src="item.backSrc"/>
                    <div class="carousel_hander">
                        {{item.content}}
                    </div>
                </div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script scoped lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import * as Three from 'three'
    import {CreateElement} from "vue";
    import Footter from "../public/footter";
    import Handder from "../public/handder";

    @Component({
        components: {},
    })
    export default class HomeCarousel extends Vue {
        @Prop() private msg: string;
        private homeItems: Array;
        private isShowHander: Boolean = false;

        private init(): void {
            this.homeItems = [
                {
                    title: "首页",
                    index: 1,
                    backSrc: require("../../../assets/images/back1.jpg"),
                    router: "/home",
                    content: "For One Dream"
                },
                {
                    title: "列表",
                    index: 2,
                    backSrc: require("../../../assets/images/back2.jpeg"),
                    router: "/list",
                    content: "For One Dream"
                },
                {
                    title: "图形",
                    src: "xxx",
                    index: 3,
                    backSrc: require("../../../assets/images/back3.jpeg"),
                    router: "/graph",
                    content: "For One Dream"
                },
            ];
        };

        /**
         * 钩子函数调用
         */
        created() {
            this.init();
        };

        mounted() {

        }

        destroyed() {
            console.log("destroyed");
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less">

    .page_carousel {
        width: 100%;
        height: 800px;
        .carousel-every {
            width: 100%;
            height: 100%;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .carousel_hander {
            height: 100px;
            width: 100%;
            position: absolute;
            margin-top: 100px;
            opacity: 0.6;
            z-index: 10000;
            top: 60%;
            color: white;
            font-size: 50px;
            font-weight: 500;
        }
    }

    .el-carousel__arrow {
        width: 100px !important;
        height: 100px !important;
        font-size: 50px !important;
    }
</style>