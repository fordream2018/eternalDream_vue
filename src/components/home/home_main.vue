<template>
    <div class="home_main">
        <h1>this is a home main page</h1>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import * as Three from 'three'
    import {CreateElement} from "vue";

    @Component
    export default class HomeMain extends Vue {
        @Prop() private msg!:string;

        private name: string = "11111";

        /**
         * 钩子函数调用
         */
        created() {
            console.log("created");
        };

        mounted() {
            console.log("mounted");
        }

        destroyed() {
            console.log("destroyed");
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .home_main {

    }
</style>