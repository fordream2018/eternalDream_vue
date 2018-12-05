<template>
  <div class="list_main">
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
    width: 98%;
    height: 100%;
    margin: 0 auto;
}
</style>
