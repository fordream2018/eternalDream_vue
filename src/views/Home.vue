<template>
  <div class="home">
    <HomeMain msg="这个我们的主场"/>
  </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { Action, Mutation, Getter, namespace } from 'vuex-class';
    import HomeMain from '@/components/home/home_main.vue'; // @ is an alias to /src
    @Component({
        components: {
            HomeMain,
        },
    })
    export default class Home extends Vue {
        @Getter('getIsShowRouter') isShowRouter;
        @Action('changeIsShowRouter') changeIsShowRouter;
        private created(){
            this.changeIsShowRouter({ value: false })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .three{
    width: 100%;
    height: auto;
    background: black;
  }
</style>
