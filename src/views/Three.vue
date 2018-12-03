<template>
  <div class="three">
    <ThreeMain msg="this is about three page"/>
  </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import ThreeMain from '@/components/three/three_main.vue'; // @ is an alias to /src

    @Component({
        components: {
            ThreeMain,
        },
    })
    export default class Three extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .three{
    width: 100%;
    height: auto;
  }
</style>
