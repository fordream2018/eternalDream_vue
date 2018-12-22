<template>
    <div class="home_page">
        <!--头部-->
        <Handder />
        <!--走马灯-->
        <HomeCarousel/>
        <!--开发案例-->
        <DemoCase/>
        <HomeReact/>
        <SolutionTech/>
        <Footter/>
    </div>

</template>

<script scoped lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import * as Three from 'three'
    import {CreateElement} from "vue";
    import Footter from "../public/footter";
    import Handder from "../public/handder";
    import HomeCarousel from "./sub/HomeCarousel";
    import DemoCase from "./sub/DemoCase";
    import SolutionTech from "./sub/SolutionTech";
    import HomeReact from "./sub/HomeReact";

    @Component({
        components: {
            Footter,
            Handder,
            HomeCarousel,
            DemoCase,
            SolutionTech,
            HomeReact,
        },
    })
    export default class HomeMain extends Vue {
        @Prop() private msg: string;
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
<style lang="less">
    .home_page {
        width: 100%;
        height: auto;
    }
</style>