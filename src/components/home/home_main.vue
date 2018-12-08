<template>
    <div class="home_main">
        <div class="sub_carousel" ref="carousel">
            <el-carousel :interval="3000" type="card" :height="fullHeight+'px' ">
                <el-carousel-item v-for="item in homeItems" :key="item.index">
                    <h3>{{ item.title }}</h3>
                </el-carousel-item>
            </el-carousel>
        </div>

    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import * as Three from 'three'
    import {CreateElement} from "vue";

    @Component
    export default class HomeMain extends Vue {
        @Prop() private msg: string;

        private name: string = "11111";
        private homeItems: Array;
        private fullHeight: number;
        private fullWidth: number;
        private carouselTop: number = 100;
        private carouselHeight: number;

        private init(): void {
            this.homeItems = [
                {
                    title: "首页",
                    src: "xxx",
                    index: 1
                },
                {
                    title: "列表",
                    src: "xxx",
                    index: 2
                },
                {
                    title: "图形",
                    src: "xxx",
                    index: 3
                },
                {
                    title: "地图",
                    src: "xxx",
                    index: 4
                },
                {
                    title: "三维",
                    src: "xxx",
                    index: 5
                },
                {
                    title: "关于",
                    src: "xxx",
                    index: 6
                },
            ];

            let tempHeight=document.documentElement.clientHeight;
            let tempWidth=document.documentElement.clientWidth;
            this.fullHeight = tempHeight / 1.5 ;
            this.fullWidth = tempWidth;
        };

        //定位函数
        private postited(): void {
//            let tempHeight=document.documentElement.clientHeight;
//            let tempWidth=document.documentElement.clientWidth;
//            this.fullHeight = tempHeight / 1.5 ;
//            this.fullWidth = tempWidth;
//            this.carouselHeight = tempHeight;
//            this.carouselTop = (tempHeight  - this.$refs['carousel'].clientHeight) / 2;
        };

        /**
         * 钩子函数调用
         */
        created() {
            console.log("created");
            this.init();
        };

        mounted() {
            this.carouselTop = (this.fullHeight  - this.$refs['carousel'].style.height) / 2;
            const _this = this;
            console.log("mounted");
            window.onresize = () => {
                return (() => {
                    _this.postited();
                })();
            };
        }

        destroyed() {
            console.log("destroyed");
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .home_main {
        font-size: 30px;
        .sub_carousel {
            width: 100%;
            position: fixed;
            left: 0px;
            top:100px;
        }
    }

    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>