<template>
  <div class="home">
    <HomeMain msg="这个我们的主场"/>
  </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { publicModule } from "../store/moudles/public";
    import HomeMain from '@/components/home/home_main.vue'; // @ is an alias to /src
    @Component({
        components: {
            HomeMain,
        },
    })
    export default class Home extends Vue {
        created(){
            publicModule.changeIsShowRouter({isShow:false});
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .home{
    width: 100%;
    height: auto;
    background: #FFFFFF;
  }
</style>
