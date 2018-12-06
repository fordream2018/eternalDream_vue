<template>
    <div class="sub_demo1">
        <button type="button" @click="toggle" >Fullscreen</button>
        <fullscreen ref="fullscreen" @change="fullscreenChange">
            <div class="three_nav" v-on:mouseenter="showEffect()" v-cloak>
                <transition-group appear tag="ul" v-if="isShowEffect">
                    <!-- 内置方法
                      @before-enter = "beforeEnter"
                      @enter = "enter"
                      @after-enter = "afterEnter"
                      @before-leave = "beforeLeave"
                      @leave = "leave"
                      @after-leave = "afterLeave"
                    -->
                    <!-- transition-group 多个元素运动，注意绑定key:1 -->
                    <
                    <li v-for="(effect,index) in rightEffect" :key="index">
                        <a v-on:click="doEveryProcess(effect)">
                            <i class="nav_bur"></i>
                            <span>{{effect.title}}</span>
                        </a>
                    </li>
                </transition-group>
            </div>
            <div id="sub_container"></div>
        </fullscreen>

    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import * as THREE from 'three'
    import {Map} from "vue-baidu-map/types/map";

    @Component
    export default class SubThreeDemo1 extends Vue {
        @Prop() private msg!:string;

        private name: string = "list page";

        private container;
        private scene: any;
        private camera: any;
        private renderer: any;
        private geometry: any;
        private material: any;
        private cube: any;
        /* private rightEffect= new Map<string, Array>();*/
        private rightEffect: Array = [];
        private isShowEffect: boolean = false;
        private timer: any;
        private fullscreen:boolean=false;
        initData() {
            let _this = this;
            this.rightEffect = [
                {title: "The effect of flow", src: "",name:"1"},
                {title: "The effect of rain", src: "",name:"2"},
                {title: "蝴蝶效果", src: "",name:"3"},
                {title: "昆虫效果", src: "",name:"4"},
            ];

            this.timer = function () {
                return setTimeout(() => {
                    _this.isShowEffect = false;
                }, 5000);
            }

        };

        init() {
            //初始化容器
            this.container = document.getElementById("sub_container");
            while(this.container.hasChildNodes()) //当div下还存在子节点时 循环继续

            {
                this.container.removeChild(this.container.firstChild);
            }
            //初始化场景
            this.scene = new THREE.Scene();
            //初始化相机
            this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            //初始化渲染器
            this.renderer = new THREE.WebGLRenderer();

            let width = this.container.offsetWidth
            let height = this.container.offsetHeight;
            this.renderer.setSize(width, height);

            // 初始化几何信息
            this.geometry = new THREE.BoxGeometry(4, 4, 4);
            //初始化材料
            this.material = new THREE.MeshBasicMaterial({color: 0x00ff00});
            //初始化物体
            this.cube = new THREE.Mesh(this.geometry, this.material);
            this.scene.add(this.cube);


            this.camera.position.z = 8;
            this.camera.position.y = 0;
            this.camera.position.x = 0;
            //渲染界面
            this.container.appendChild(this.renderer.domElement)

            this.animate();

        };

        //动画效果
        animate() {
            requestAnimationFrame(this.animate);
            // this.cube.rotation.x += 0.01;
            this.cube.rotation.y += 0.01;
            this.renderer.render(this.scene, this.camera);
        };

        mounted() {
            this.init();
            this.initData();
        };

        private showEffect() {
            this.isShowEffect = true;
            //this.timer();
        };
        private  doEveryProcess(item){
          console.log(item.name);
        };

        private toggle(){
            this.$refs['fullscreen'].toggle() // recommended
        };
        private fullscreenChange (fullscreen) {
            debugger;
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.fullscreen = fullscreen
        }
        private destoryed() {
            if (this.timer) {
                //clearTimeout(this.timer);
            }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" scoped>
    [v-cloak] {
        display: none;
    }

    .sub_demo1 {
        height: 750px;
        width: 100%;
        .three_nav {
            width: 200px;
            height: 100%;
            position: absolute;
            display: block;
            opacity: 1;
            ul {
                width: 100%;
                height: 50%;
                list-style: none;
                margin-block-start: 1em;
                margin-block-end: 1em;
                margin-inline-start: 0px;
                margin-inline-end: 0px;
                padding-inline-start: 0px;
                top: 150px;
                position: relative;
                li {
                    height: 60px;
                    position: relative;
                    white-space: nowrap;
                    display: list-item;
                    text-align: left;
                    line-height: 60px;
                    margin-left: 30px;
                    font-size: 20px;
                    a {

                    }
                    .nav_bur {
                        display: inline-block;
                        width: 10px;
                        height: 10px;
                        background: #ffffff;
                        border-radius: 5px;
                    }
                    span {
                        margin-left: 20px;
                        color: #9c9999;
                    }
                    span:HOVER{
                        color: #FFFFFF;
                    }
                }
            }
        }
        #sub_container {
            width: 100%;
            height: 700px;
            margin: 0 auto;
            canvas {
                width: 100%;
                height: 100%
            }
        }
    }
    .v-enter,.v-leave-to{
        opacity: 0;
        transform: translateY(80px);
    }
    .v-enter-active,
    .v-leave-active{
        transition: all 0.6s ease;
    }
</style>
