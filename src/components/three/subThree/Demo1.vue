<template>
    <div class="sub_demo1">
        <div class="sub_nav">
            <div class="sub_nav_inner"></div>
            <div class="sub_nav_inner"></div>
            <div class="sub_nav_inner"></div>
            <div class="sub_nav_inner"></div>
        </div>
        <div class="sub_nav_top" v-on:click="toggle()"></div>
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
    import * as STATUS  from 'three-stats';
    import * as dat from 'dat.gui';

    @Component
    export default class SubThreeDemo1 extends Vue {
        @Prop() private msg:string;

        private name: string = "list page";

        private container;//容器
        private scene: any;//场景
        private camera: any;//相机
        private renderer: any;//渲染
        private geometry: any;//物体
        private material: any;//材料
        private object: any;//几何体
        private stats: any;//监视器
        private guiCon:any;//控制器
        /* private rightEffect= new Map<string, Array>();*/
        private rightEffect: Array = [];
        private isShowEffect: boolean = false;
        private timer: any;
        private fullscreen: boolean = false;
        private rotationSpeed:number;
        initData() {
            let _this = this;
            this.rightEffect = [
                {title: "The effect of flow", src: "", name: "1"},
                {title: "The effect of rain", src: "", name: "2"},
                {title: "蝴蝶效果", src: "", name: "3"},
                {title: "昆虫效果", src: "", name: "4"},
            ];

            this.timer = function () {
                return setTimeout(() => {
                    _this.isShowEffect = false;
                }, 5000);
            }

        };

        //挂载钩子函数
        private mounted() {

            this.initData();
            this.initThree();
        };

        private showEffect() {
            this.isShowEffect = true;
            //this.timer();
        };

        private doEveryProcess(item) {
            console.log(item.name);
        };

        private toggle() {
            this.$refs['fullscreen'].toggle() // recommended
        };

        private fullscreenChange(fullscreen) {
            debugger;
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.fullscreen = fullscreen
        }

        private destoryed() {
            if (this.timer) {
                //clearTimeout(this.timer);
            }
        }

        //three 基本场景初始化代码片段
        private initThreescene(): void {

            //step1 init container
            this.container = document.getElementById("sub_container");

            //step1 init renderer
            this.renderer = new THREE.WebGLRenderer({
                antialias: true,
            });
            let width = this.container.offsetWidth;
            let height = this.container.offsetHeight;
            this.renderer.setSize(width, height);
            //this.renderer.setClearColor(0xFFFFFF, 1.0);
            //step1 init scene
            this.scene = new THREE.Scene();

            //step1 init camera
            this.camera = new THREE.PerspectiveCamera(85, window.innerWidth / window.innerHeight, 1, 500);
            this.camera.position.set(0, 0, 8);
            this.camera.lookAt(0, 0, 0);
        };

        private initGeometry(): void {
            // step1 init geometry
            this.geometry = new THREE.BoxGeometry(4, 4, 4);
            // step1 init material
            this.material = new THREE.MeshBasicMaterial({color: 0x00ff00});
            // step1 init cube
            this.object = new THREE.Mesh(this.geometry, this.material);
        };

        private addElements(): void {
            this.scene.add(this.object);
            //渲染界面
            this.container.appendChild(this.renderer.domElement)
        };
        //性能监控
        private initStats(): void {
            this.stats = new STATUS.Stats();
            this.stats.setMode(0);
            this.stats.domElement.style.position = 'absolute';
            this.stats.domElement.style.left = '0px';
            this.stats.domElement.style.top = '0px';
            this.container.appendChild(this.stats.domElement);

            this.guiCon=new dat.GUI();
            this.guiCon.domElement.style.position = 'absolute';
            this.guiCon.domElement.style.right = '0px';
            this.guiCon.domElement.style.top = '100px';

            this.container.appendChild(this.guiCon.domElement);
            let controllers=new function () {
                this.rotationSpeed = 0.02;
                this.x = 1;
                this.y = 1;
                this.z = 1;
                this.width = 50;
                this.height = 60;
            };

            let f1=this.guiCon.addFolder('Position');
            f1.add(controllers, 'x');
            f1.add(controllers, 'y');
            f1.add(controllers, 'z');
            let f2=this.guiCon.addFolder('Size');
            f2.add(controllers, 'width');
            f2.add(controllers, 'height');
            //f2.open();
            /*this.guiCon.add(controllers, 'x', 0, 0.5);
            this.guiCon.add(controllers, 'y', 0, 0.5);
            this.guiCon.add(controllers, 'z', 0, 0.5);*/
            //this.guiCon.add(this.controls, 'rotationSpeed', 0, 0.5);
            //this.guiCon.addMaterial("standard_material", this.material);
        };
        //动画效果
        private animate(): void {
            this.stats.update();
            requestAnimationFrame(this.animate);
            this.object.rotation.x += 0.1;
            this.object.rotation.y += 0.1;
            //this.cube.rotation.y += 0.01;
            this.renderer.render(this.scene, this.camera);
        };
        private controls(){
            this.rotationSpeed = 0.02;
        };



        private initThree(): void {
            //step1 init basic three
            this.initThreescene();
            //step2 add geometry
            this.initGeometry();
            //step3 add elements
            this.addElements();
            //step4 add stats
            this.initStats();
            //step5 render
            this.animate();
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
        .sub_nav_top {
            width: 30px;
            height: 30px;
            right: 30px;
            top: 30px;
            position: absolute;
            z-index: 10;
            opacity: 1;
            cursor: pointer;
        }
        .sub_nav {
            width: 30px;
            height: 30px;
            right: 30px;
            top: 30px;
            position: absolute;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            .sub_nav_inner {
                height: 43%;
                width: 43%;
                border: 1px solid #ffffff;
            }

        }
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
                    cursor: pointer;
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
                    span:HOVER {
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

    .v-enter, .v-leave-to {
        opacity: 0;
        transform: translateY(80px);
    }

    .v-enter-active,
    .v-leave-active {
        transition: all 0.6s ease;
    }
</style>
