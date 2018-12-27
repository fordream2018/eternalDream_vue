<template>
    <div class="page_solution">
        <div class="solution_hander">
            <h3>解决方案</h3>
            <p>专业的事情交给专业的人来做     我们为您提供更为专业的解决方案</p>
        </div>
        <div class="solution_detail">
            <div class="detail_inner">了解更多</div>
        </div>
        <div class="solution_content">
            <el-carousel :interval="5000" type="card" height="350px">
                <el-carousel-item v-for="item in solutionItems" :key="item.index">
                    <div class="carousel-every"
                         v-bind:style="{backgroundImage:'url('+item.backSrc+')',backgroundRepeat:'no-repeat', backgroundSize: '100% 100%'}">
                        <div class="info">
                            <div class="title">{{ item.title }}</div>
                            <div class="more" 　v-on:click="enterEvery(item)">点击进入</div>
                        </div>
                        <div class="content">

                        </div>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script scoped lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component({
        components: {},
    })
    export default class SolutionTech extends Vue {

        private solutionItems: Array<Object> = [];
        private isShowMore: boolean = false;

        private init(): void {
            this.solutionItems = [
                {
                    title: "列表",
                    src: "xxx",
                    index: 2,
                    backSrc: require("../../../assets/images/list.jpeg"),
                    router: "/list"
                },
                {
                    title: "图形",
                    src: "xxx",
                    index: 3,
                    backSrc: require("../../../assets/images/graph.gif"),
                    router: "/graph"
                },
                {
                    title: "地图",
                    src: "xxx",
                    index: 4,
                    backSrc: require("../../../assets/images/map.jpeg"),
                    router: "/map"
                },
                {
                    title: "三维",
                    src: "xxx",
                    index: 5,
                    backSrc: require("../../../assets/images/three.gif"),
                    router: "/three"
                },
                {
                    title: "关于",
                    src: "xxx",
                    index: 6,
                    backSrc: require("../../../assets/images/about.gif"),
                    router: "/about"
                },
            ];
        }

        private enterEvery(item): void {
            this.$router.push(item.router)
        }



        /**
         * 钩子函数调用
         */
        created() {

        };

        mounted() {
            this.init();
        }

        destroyed() {
            console.log("destroyed");
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .page_solution {
        width: 100%;
        height: auto;
        background: #f2f2f2;
        margin-top: 50px;

        .solution_hander {
            width: 100%;
            height: auto;
            margin-bottom: 50px;
            h3 {
                font-size: 30px;
                font-weight: 500 !important;
                color: #333333;
            }
            p {
                margin: 0;
            }
        }

        .solution_content {
            width: 80%;
            height: auto;
            margin: 0 auto;
            .content_inner {
                width: 100%;
                height: 500px;
                margin: 0 auto;
            }
            ._inner {

            }

            .carousel-every {
                width: 100%;
                height: 100%;
                border-radius: 20px;

            }
            .info {
                width: 100%;
                height: 50px;
                display: flex;
                flex-direction: column;
                //justify-content:center;
                //align-items:center;
                line-height: 50px;
                font-size: 25px;
                font-family: "Times New Roman", Times, serif;
                color: #ffffff;
                .more {
                    height: 30px;
                    width: 100%;
                    font-size: 15px;
                    color: #ffcad1;
                    cursor: pointer;
                    line-height: 30px;
                }
                .more:HOVER {
                    font-size: 17px;
                    background: #3b1e20;
                }
            }
            .icon {
                width: 30px;
                height: 30px;
                border-radius: 10px;
                background: #ffffff;
            }
            img {
                width: 100%;
                height: 100%;
            }
        }

        .solution_detail {
            width: 100%;
            height: 100px;
            margin-bottom: 30px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .detail_inner {
                width: 20%;
                height: 60px;
                font-size: 20px;
                cursor: pointer;
                line-height: 60px;
                border-radius: 30px;
                border: 1px solid green;
            }
            .detail_inner:HOVER {
                font-size: 21px;
                background: green;
                color: white;
            }
        }
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>