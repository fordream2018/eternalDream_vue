<template>
    <div class="sub_demo1">
        <span>the three demo1</span>
        <div id="sub_container"></div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import * as THREE from 'three'

    @Component
    export default class SubThreeDemo1 extends Vue {
        @Prop() private msg!:string;

        private name: string = "list page";

        private container;
        private scene: any;
        private camera: any;
        private renderer: any;
        private geometry :any;
        private material:any;
        private cube:any;

        init() {
            //初始化容器
            this.container=document.getElementById("sub_container");
            //初始化场景
            this.scene = new  THREE.Scene();
            //初始化相机
            this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            //初始化渲染器
            this.renderer = new THREE.WebGLRenderer();

            let width=this.container.offsetWidth
            let height=this.container.offsetHeight;
            this.renderer.setSize(width, height);

            // 初始化几何信息
　　　　　　　this.geometry=new THREE.BoxGeometry( 4, 4, 4);
            //初始化材料
            this.material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
            //初始化物体
            this.cube = new THREE.Mesh( this.geometry, this.material );
            this.scene.add( this.cube );


            this.camera.position.z = 8;
            this.camera.position.y = 0;
            this.camera.position.x = 0;
            //渲染界面
            this.container.appendChild(this.renderer.domElement)

            this.animate();

        };
        //动画效果
        animate(){
            requestAnimationFrame( this.animate );
            // this.cube.rotation.x += 0.01;
            this.cube.rotation.y += 0.01;
            this.renderer.render( this.scene, this.camera );
        };
        mounted() {
            debugger;
            this.init();
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"　scoped>
    .sub_demo1 {
        height: 550px;

        #sub_container {
            width: 95%;
            height: 100%;
            border: 1px solid red;
            margin: 0 auto;
            canvas {
                width: 100%;
                height: 100%
            }
        }
    }
</style>
