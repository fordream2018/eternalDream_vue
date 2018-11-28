<template>
  <div class="about_main">
     {{msg}}+++++{{name}}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class GraphMain extends Vue {
  @Prop() private msg!: string;
  private name:string="11111";
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .about_main{

  }
</style>
