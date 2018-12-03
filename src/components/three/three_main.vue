<template>
  <div class="three_main">
      <span>this is a home main page</span>
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
<style scoped lang="less">
.three_main{
	height:auto;
}
</style>
