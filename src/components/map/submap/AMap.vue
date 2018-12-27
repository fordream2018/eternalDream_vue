<template>
  <div class="amap">
    <el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amapDemo">
      <el-amap-marker v-for="marker in markers" :center="marker.center" :radius="marker.radius" :fill-color="marker.fillColor" :fill-opacity="marker.fillOpacity" :events="marker.events"></el-amap-marker>
    </el-amap>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';


@Component
export default class MapMain extends Vue {
    @Prop() private msg: string;
    private zoom:number= 11;
    private center:Array<Number>=[109,34.3];
    private markers:Array<Object>= [
        {
          center: [109,34.3],
          radius: 20,
          fillOpacity: 1,
          fillColor: 'rgba(0,0,255,1)',
          events: {
            click: () => {
              alert('this is a point');
            }
          }
        }
    ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.amapDemo{
	height:600px;
}
</style>
