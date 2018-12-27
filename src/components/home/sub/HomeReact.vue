<template>
    <div class="page_rect">
        <div class="rect_hander">
            <h3>技术支持</h3>
            <p>我们期待能够为您提供全面的技术支持</p>
            <div class="rect_detail">
                <div class="detail_inner">了解更多</div>
            </div>
        </div>
        <div class="rect-wrap">
            <div class="container">
                <div class="top slide">top </div> <!--立方体的六个面-->
                <div class="bottom slide">bottom</div>
                <div class="left slide" v-on:mouseenter="showMore('left')">left
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div class="right slide" v-on:mouseenter="showMore('right')">right</div>
                <div class="front slide" v-on:mouseenter="showMore('front')">font</div>
                <div class="back slide" v-on:mouseenter="showMore('back')">back</div>
            </div>
            <!--<div class="rect-content" :key="1">
                fuck
            </div>-->
        </div>


    </div>
</template>

<script scoped lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component({
        components: {},
    })
    export default class HomeReact extends Vue {
        @Prop() private msg: string;
        private isShowMore: boolean = false;


        /**
         * 钩子函数调用
         */
        created() {
        };

        mounted() {

        }

        destroyed() {
            console.log("destroyed");
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

    .page_rect {
        width: 100%;
        height: auto;
        margin: 0 auto;
        /*background: #1a1a1a;*/
        margin-top: 100px;
        position: relative;

        .rect_hander{
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

            .rect_detail {
                width: 100%;
                height: 100px;
                margin-top: 30px;
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
                    transition: all .6s;
                }
                .detail_inner:HOVER {
                    font-size: 21px;
                    background: green;
                    color: white;

                }
            }
        }


        .rect-wrap {
            width: 100%;
            position: relative;
            perspective: 2000px;
            margin: 0 auto;
            .rect-content {
                width: 100%;
                height: 70%;
                background: red;
                position: absolute;
                top: 0px;
                left: 0px;
                opacity: 0.8;
                margin-top: 7%;
            }
        }

    }

    .container {
        width: 800px;
        height: 800px;
        margin: 0 auto;
        transform-style: preserve-3d;
        transform-origin: 50% 50% 200px; /*设置3d空间的原点在平面中心再向Z轴移动200px的位置*/
    }

    .slide {
        width: 400px;
        height: 400px;
        position: absolute; //定位
        cursor: pointer;
        transition: all .6s;
        background-color: #05040d;
        border-radius: 20px;
        color:white;
    }
    .slide:HOVER{
        background: #d0ffbf;
        color: black;
    }

    .top {
        left: 200px;
        top: -200px;
        transform: rotateX(-90deg);
        transform-origin: bottom;

    }

    .bottom {
        left: 200px;
        bottom: -200px;
        transform: rotateX(90deg);
        transform-origin: top;
    }

    .left {
        left: 200px;
        top: 200px;
        transform: rotateY(90deg);
        transform-origin: right;
    }

    .right {
        left: 200px;
        top: 200px;
        transform: rotateY(-90deg);
        transform-origin: left;
    }

    .front {
        left: 200px;
        top: 200px;
        transform: rotateY(-180deg);
    }

    .back {
        left: 200px;
        top: 200px;
        transform: translateZ(400px);
    }

    @keyframes rotate-frame {

        0% {
            transform: rotateX(0deg) rotateY(0deg);
        }

        50% {
            transform: rotateX(0deg) rotateY(180deg);
        }

        100% {
            transform: rotateX(0deg) rotateY(360deg);
        }

    }

    .container {
        animation: rotate-frame 40s linear infinite;
    }


</style>