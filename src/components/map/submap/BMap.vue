<template>
  <div class="bmap">
     <baidu-map  id="allmap" :center="center" :zoom="zoom" class="bmapDemo" @ready="initMap">
         <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP','BMAP_PERSPECTIVE_MAP','BMAP_SATELLITE_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
     </baidu-map>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MapMain extends Vue {
    @Prop() private msg: string;
    private map:any;
    private zoom:number= 3;
    private center={lng: 0, lat: 0};
    private geolocation:any;
    initMap({BMap, map}):void{
        this.center.lng = 116.404;
        this.center.lat = 39.915;
        this.zoom = 15;

        // 百度地图API功能
        //this.map = new this.BMap.Map("allmap");    // 创建Map实例
        this.goToYourLocation(BMap,map);

        map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
        //添加地图类型控件
        /*map.addControl(new BMap.MapTypeControl({
            mapTypes:[
                BMAP_NORMAL_MAP,
                BBMAP_HYBRID_MAP
            ]}));*/
        // this.map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    }
    goToYourLocation(BMap,map):void{
    	let _this=this;
    	_this.geolocation = new BMap.Geolocation();
		_this.geolocation.getCurrentPosition(function(r){
			/*if(this.getStatus() == BMAP_STATUS_SUCCESS){
				let mk = new this.BMap.Marker(r.point);
				map.addOverlay(mk);
				map.centerAndZoom(r.point,12);
			}
			else {
				alert('failed'+this.getStatus());
			}*/
		},{enableHighAccuracy: true})
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.bmapDemo{
	height:600px;
}
</style>
