<template>
  <div class="three_main">
      <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';


@Component
export default class ThreeMain extends Vue {
    @Prop() private msg!: string;private name:string="list page";
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" scoped>
.three_main{
	height:auto;
}
</style>
