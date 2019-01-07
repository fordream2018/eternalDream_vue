<template>
    <div class="page_support">
        <div class="suppor_blank"></div>
        <div class="support_hander">
            <h3>技术支持</h3>
            <p>期待能够为您提供全面的技术支持</p>
        </div>
        <div class="support_content" id="sub_support">

        </div>

    </div>
</template>

<script scoped lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import * as THREE from 'three'
    import * as dat from 'dat.gui';
    import {Stats} from "three-stats";

    @Component({
        components: {},
    })
    export default class TechSupport extends Vue {
        @Prop() private msg: string;

        private OrbitControls: any = require('three-orbit-controls')(THREE);
        private scene: any;
        private camera: any;
        private renderer: any;
        private targetEle: HTMLElement;
        private stats: Stats;
        private guiCon: any;//控制器

        private controls: any;
        private geometry: any;//物体
        private material: any;//材料
        private object: any;//几何体

        private initThreescene(): void {
            this.targetEle = document.getElementById("sub_support");
            this.scene = new THREE.Scene();
            this.camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 1, 1000);
            this.renderer = new THREE.WebGLRenderer({
                antialias: true,
            });

            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.camera.position.set(0, 0, 8);
            this.camera.lookAt(0, 0, 0);
        }

        private initGeometry(): void {
            // step1 init geometry
            this.geometry = new THREE.BoxGeometry(4, 4, 4);
            // step1 init material
            this.material = new THREE.MeshBasicMaterial({color: 0x00ff00});
            // step1 init cube
            this.object = new THREE.Mesh(this.geometry, this.material);
        }


        private initControllers(): void {
            this.controls = new this.OrbitControls(this.camera, this.targetEle);
            this.controls.enableZoom = false;
        }

        private initStats(): void {
            this.stats = new Stats();
            this.stats.setMode(0);
            this.stats.domElement.style.position = 'absolute';
            this.stats.domElement.style.left = '0px';
            this.stats.domElement.style.top = '0px';
            this.targetEle.appendChild(this.stats.domElement);

            this.guiCon = new dat.GUI();
            this.guiCon.domElement.style.position = 'absolute';
            this.guiCon.domElement.style.right = '0px';
            this.guiCon.domElement.style.top = '100px';

            this.targetEle.appendChild(this.guiCon.domElement);
            let controllers = new function () {
                this.rotationSpeed = 0.02;
                this.x = 1;
                this.y = 1;
                this.z = 1;
                this.width = 50;
                this.height = 60;
            };

            let f1 = this.guiCon.addFolder('Position');
            f1.add(controllers, 'x', 1, 100);
            f1.add(controllers, 'y', 1, 100);
            f1.add(controllers, 'z', 1, 100);
            let f2 = this.guiCon.addFolder('Size');
            f2.add(controllers, 'width', 10, 100);
            f2.add(controllers, 'height', 10, 100);

        }

        private addElements(): void {
            this.scene.add(this.object);
            //渲染界面
            this.targetEle.appendChild(this.renderer.domElement)
        };

        //动画效果
        private animate(): void {
            this.stats.update();
            requestAnimationFrame(this.animate);
            this.renderer.render(this.scene, this.camera);
        };

        private initThree(): void {
            this.initThreescene();
            this.initStats();
            this.initControllers();
            this.initGeometry();
            this.addElements();
            this.animate();
        }


        /**
         * 钩子函数调用
         */
        created() {
        };

        mounted() {
            this.initThree();
        }

        destroyed() {
            console.log("destroyed");
            this.renderer.clear();
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

    .page_support {
        width: 100%;
        height: auto;
        margin: 0 auto;
        background: #e6e6e6;
        margin-top: 50px;
        .suppor_blank {
            width: 100%;
            height: 50px;
        }
        .support_hander {
            width: 100%;
            height: auto;
            h3 {
                font-size: 30px;
                font-weight: 500 !important;
                color: #333333;
            }
            p {
                margin: 0;
            }
        }

        .support_content {
            width: 100%;
            height: 800px;
            position: relative;
        }
    }

</style>