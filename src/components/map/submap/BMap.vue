<template>
  <div class="map_main">
     <baidu-map id="allmap" class="map" @ready="initMap"></baidu-map>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';


@Component
export default class MapMain extends Vue {
    @Prop() private msg!: string;
    private name:string="list page";

    private map:any;

    private geolocation:any;

    initMap():void{
        // 百度地图API功能
        this.map = new BMap.Map("allmap");    // 创建Map实例
        this.goToYourLocation();

        // this.map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
        //添加地图类型控件
        this.map.addControl(new BMap.MapTypeControl({
            mapTypes:[
                BMAP_NORMAL_MAP,
                BMAP_HYBRID_MAP
            ]}));
        // this.map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
        this.map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    }
    goToYourLocation():void{
    	let _this=this;
    	_this.geolocation = new BMap.Geolocation();
		_this.geolocation.getCurrentPosition(function(r){
			if(this.getStatus() == BMAP_STATUS_SUCCESS){
				let mk = new BMap.Marker(r.point);
				_this.map.addOverlay(mk);
				_this.map.centerAndZoom(r.point,12);
			}
			else {
				alert('failed'+this.getStatus());
			}        
		},{enableHighAccuracy: true})
    }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.map{
	height:600px;
}
</style>
