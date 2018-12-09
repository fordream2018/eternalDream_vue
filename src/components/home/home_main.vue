<template>
    <div class="home_main">
        <div class="sub_carousel" ref="carousel">
            <el-carousel :interval="5000" type="card" :height="fullHeight+'px' ">
                <el-carousel-item v-for="item in homeItems" :key="item.index">
                    <div class="carousel-every" v-bind:style="{backgroundImage:'url('+item.backSrc+')',backgroundRepeat:'no-repeat', backgroundSize: '100% 100%'}">
                        <div class="info">
                            <div class="title">{{ item.title }}</div>
                            <div class="more"　v-on:click="enterEvery(item)">点击进入</div>
                        </div>
                        <div class="content">

                        </div>
                    </div>
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
                    src:require("../../assets/images/home.gif"),
                    index: 1,
                    backSrc:require("../../assets/images/home.gif"),
                    router:"/home"
                },
                {
                    title: "列表",
                    src: "xxx",
                    index: 2,
                    backSrc:require("../../assets/images/list.jpeg"),
                    router:"/list"
                },
                {
                    title: "图形",
                    src: "xxx",
                    index: 3,
                    backSrc:require("../../assets/images/graph.gif"),
                    router:"/graph"
                },
                {
                    title: "地图",
                    src: "xxx",
                    index: 4,
                    backSrc:require("../../assets/images/map.jpeg"),
                    router:"/map"
                },
                {
                    title: "三维",
                    src: "xxx",
                    index: 5,
                    backSrc:require("../../assets/images/three.gif"),
                    router:"/three"
                },
                {
                    title: "关于",
                    src: "xxx",
                    index: 6,
                    backSrc:require("../../assets/images/about.gif"),
                    router:"/about"
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
        private enterEvery(item):void{
            this.$router.push(item.router)
        }
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
            .carousel-every{
                width: 100%;
                height: 100%;
                border-radius: 20px;
            }
            .info{
                width: 100%;
                height: 50px;
                display: flex;
                flex-direction:column;
                //justify-content:center;
                //align-items:center;
                line-height: 50px;
                font-size: 25px;
                font-family:"Times New Roman",Times,serif;
                color:#ffffff;
                .more{
                    height: 30px;
                    width: 100%;
                    font-size: 15px;
                    color: #ffcad1;
                    cursor: pointer;
                    line-height: 30px;

                }
                .more:HOVER{
                    font-size: 17px;
                    background: #3b1e20;
                }
            }
            .icon{
                width: 30px;
                height: 30px;
                border-radius: 10px;
                background: #ffffff;
            }
            img{
                width: 100%;
                height: 100%;
            }
        }
    }

    .el-carousel__item{
        border-radius: 20px;
    }
    .el-carousel__item:nth-child(2n) {
        background-color: black;
    }

    .el-carousel__item:nth-child(2n+1) {
      background-color: black;
    }
</style>