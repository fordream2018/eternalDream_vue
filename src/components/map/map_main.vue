<template>
  <div class="map_main">
     {{msg}}+++++{{name}}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MapMain extends Vue {
  @Prop() private msg!: string;
  private name:string="list page";
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.map_main{

}
</style>
