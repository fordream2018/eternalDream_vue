<template>
  <div class="map_main">
     <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';


@Component
export default class MapMain extends Vue {
    @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.map_main{
    width:100%;
	height:100%;
}
</style>
