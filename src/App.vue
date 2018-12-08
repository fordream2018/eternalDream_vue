<template>
    <div id="app">
        <div id="nav">
            <router-link to="/" exact>首页</router-link>

            <router-link to="/list">
                <span>列表</span>
                <div class="subNav">
                    <router-link to="/list/table">表格</router-link>
                    <router-link to="/list/listing">列表</router-link>
                </div>
            </router-link>
            <router-link to="/graph">图形</router-link>
            <router-link to="/map">
              <span>地图</span>
              <div class="subNav">
                <router-link to="/map/baidu">百度地图</router-link>
                <router-link to="/map/gaode">高德题图</router-link>
              </div>
            </router-link>
            <router-link to="/three">
                <span>三维</span>
                <div class="subNav">
                    <router-link to="/three/demo1">DEMO1</router-link>
                </div>
            </router-link>
            <router-link to="/about">关于</router-link>
        </div>
        <router-view/>
    </div>
</template>

<style lang="less" scoped>
    @selectedItem: #42b983;
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        display: inline-flex;
        background: #05040d;
        height: auto;
        font-family: "Microsoft Yahei", STHeiti, Arial, SimSun;
    }

    #nav {
        width: 200px;
        display: grid;
        position: absolute;
        z-index: 1000;
        > a {
            font-weight: bold;
            color: #2c3e50;
            text-decoration: none;
            margin-top: 20px;
            display: inline-flex;
            margin-left: 30%;
            &.router-link-active {
                color: @selectedItem;
                .subNav {
                    display: block;
                }
            }
        }
    }

    #nav + div {
        width: calc(100vw - 240px);
        position: absolute;
        right: 5px;
    }

    .subNav {
        display: none;
        position: relative;
        margin-left: -20px;
        margin-top: 20px;
        font-size: 15px;
        > a {
            font-weight: bold;
            color: #2c3e50;
            text-decoration: none;
            display: list-item;
            margin-left: 5px;
            list-style: none;
            display: list-item;
            margin-top: 10px;
            &.router-link-active {
                color: @selectedItem;
            }
        }
    }


</style>
