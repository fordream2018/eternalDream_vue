<template>
  <div class="list_main">
     {{name}}
     <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ListMain extends Vue {
  @Prop() private msg!: string;
  private name:string="list page";
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.list_main{
    width: 100%;
    height: 100%;
}
</style>
