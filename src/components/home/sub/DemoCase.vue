<template>
    <div class="page_content">
        <div class="content_inner">
            <div class="inner_hander">
                <h3>开发案例精选</h3>
                <p>经汝之手，晓后世之荣耀，吾等世界终将拨乱反正，永垂不朽</p>
            </div>
            <div class="inder_moudle">
                <div class="moudle_each" v-for="item in 4">
                    <div class="_inner">
                        <div class="inner_inner">
                            <div class="_inner_title">
                                <p>沧海一声笑</p>
                                <i>2018/12/23</i>
                            </div>
                            <div class="_inner_content">
                                <p>
                                    沧海一声笑<br/>
                                    滔滔两岸潮　浮沉随浪只记今朝<br/>
                                    苍天笑<br/>
                                    纷纷世上潮 谁负谁胜出天知晓<br/>

                                    江山笑<br/>
                                    烟雨遥 涛浪淘尽红尘俗世几多娇<br/>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script scoped lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component({
        components: {},
    })
    export default class DemoCase extends Vue {

        private caseItems: Array = [];

        private init(): void {
            this.caseItems = [{
                //backSrc:require(""),
                name: "",
                title: ""
            }];
        }

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

    .page_content {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        font-family: 'Montserrat', sans-serif;
        .content_inner {
            width: 90%;
            height: 100%;
            background: #FFFFFF;
            .inner_hander {
                width: 100%;
                height: auto;
                h3 {
                    font-size: 30px;
                    font-weight: 500 !important;
                    color: #333333;
                }

            }

            .inder_moudle {
                width: 100%;
                height: auto;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: center;
                .moudle_each {
                    width: 25%;
                    height: 350px;
                    margin-top: 50px;
                    ._inner {
                        width: 90%;
                        height: 100%;
                        background: #e6e6e6;
                        position: relative;
                        display: block;
                        margin: 0 auto;
                        transition: all .8s;

                        .inner_inner {
                            width: 80%;
                            height: 300px;
                            margin: 0 auto;
                            p {
                                margin: 0;
                                height: 30px;
                                text-align: center;
                            }
                            i{
                                text-align: center;
                                font-size: 12px;
                            }
                            ._inner_title {
                                width: 100%;
                                height: 40%;
                                line-height: 60px;
                            }
                            ._inner_content {
                                width: 100%;
                                height: 60%;
                            }
                        }

                    }

                    ._inner:HOVER {
                        box-shadow: -15px -15px 0px #9c9c9c;
                        border: 0px solid rgba(129, 129, 129, 0.1);
                        background: #202020;
                        margin: 0 auto;
                        width: 100%;
                        color: white;
                    }

                }
                .moudle_each:HOVER {

                }

            }

        }
    }
</style>