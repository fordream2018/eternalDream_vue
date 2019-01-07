<template>
    <div class="footter">
        <div class="footter_inner">
            <div class="inner_content">
                <div class="inner_list_one inner_list">
                    <div class="_list_one _list">
                        <h3>关于我们</h3>
                        <ul>
                            <li>企业简介</li>
                            <li>企业文化</li>
                            <li>联系我们</li>
                        </ul>
                    </div>
                    <div class="_list_one _list">
                        <h3>开发案例</h3>
                        <ul>

                            <li>商城网站</li>
                            <li>工业网站</li>
                            <li>教育网站</li>
                            <li>旅游网站</li>
                            <li>. . .</li>
                        </ul>
                    </div>

                    <div class="_list_two _list">
                        <h3>新闻动态</h3>
                        <ul>
                            <li>商城网站</li>
                            <li>工业网站</li>
                            <li>教育网站</li>
                            <li>旅游网站</li>
                            <li>. . .</li>
                        </ul>
                    </div>
                    <div class="_list_three _list">
                        <h3>加入我们</h3>
                    </div>
                </div>
                <div class="inner_list_two inner_list">
                    <div _list_t>
                        <h3>发现科技有限公司</h3>
                        <ul>
                            <li>服务电话</li>
                            <li>15291858911 转　1314</li>
                        </ul>
                    </div>
                    <div _list_t></div>
                </div>
            </div>
            <div class="inner_bootm">
                <p>发现科技 版权所有 2008-2058</p>
                <p>Copyright © 2018 Company Name - FaxianTec</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';


    @Component
    export default class Footter extends Vue {
        @Prop() private msg:string;
        private name: string = "footer page";
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" scoped>
    .footter {
        width: 100%;
        height: 300px;
        background: #1a1a1a;
        margin-top: 50px;
        color: white;
        ul {
            list-style: none;
            margin-block-start: 1em;
            margin-block-end: 1em;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
            padding-inline-start: 0px;
            li {
                cursor: pointer;
            }
        }
        .footter_inner {
            width: 90%;
            height: 100%;
            margin: 0 auto;
            .inner_content {
                width: 90%;
                height: 60%;
                margin: 0 auto;
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                justify-content: center;
                font-family: 'Montserrat', sans-serif;
                .inner_list {
                    width: 48%;
                    height: 100%;
                }

                .inner_list_one {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: nowrap;
                    justify-content: center;
                    border-right: 1px solid white;

                    ._list {
                        width: 30%;
                        height: 100%;
                    }
                }

                .inner_list_two {

                }
            }
        }

        .inner_bootm {
            width: 100%;
            height: 30%;
            color: white;
            margin-top: 30px;
            p {
                height: 25px;
                font-size: 14px;
                padding: 0;
                margin: 0;
            }
        }
    }
</style>
