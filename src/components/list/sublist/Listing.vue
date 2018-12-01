<template>
  <div class="list_main">
     {{name}}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ListMain extends Vue {
  @Prop() private msg!: string;
  private name:string="可拖动的列表";
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.list_main{

}
</style>
