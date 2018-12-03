<template>
  <div class="sub_demo1">
      <h1>demo1</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';


@Component
export default class SubDemo1 extends Vue {
  @Prop() private msg!: string;private name:string="list page";

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.sub_demo1{
	height:600px;
}
</style>
