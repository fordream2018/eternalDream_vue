<template>
    <div class="about_us">
        <div class="about_hander">
            <h3>关于我们</h3>
            <p>期待能够为您提供更健全的服务</p>
        </div>
        <div class="abou_content" id="abou_content">
　　
        </div>
    </div>
</template>

<script scoped lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component({
        components: {},
    })
    export default class AboutUs extends Vue {

        private name: string = 'lifei';
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
    .about_us {
        margin-top: 50px;
        width: 100%;
        height: 500px;
        border: 1px solid red;
        .about_hander{
            width: 100%;
            height: auto;
            h3 {
                font-size: 30px;
                font-weight: 500 !important;
                color: #333333;
            }
            p {
                margin: 0;
            }
        }

    }

</style>