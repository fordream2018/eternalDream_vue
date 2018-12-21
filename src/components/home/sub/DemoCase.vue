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
                        <div class="_inner_img">

                        </div>
                        <div class="_inner_content">

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

        private caseItems:Array=[];

        private init():void{
            this.caseItems=[{
                //backSrc:require(""),
                name:"",
                title:""
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
                        background: red;
                        margin: 0 auto;

                        ._inner_img {
                            width: 100%;
                            height: 60%;
                            background: black;
                        }
                    }
                }
                .moudle_each:HOVER {

                }

            }

        }
    }
</style>