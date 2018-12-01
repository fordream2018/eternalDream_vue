<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">首页 &#160;&nbsp;&nbsp;</router-link>
      <router-link to="/list">
        <span>列表</span>
        <div class="subNav">
          <router-link to="/list/table">表格</router-link>
          <router-link to="/list/listing">列表</router-link>
        </div>
      </router-link>
      <router-link to="/graph">图形&nbsp;&nbsp;&nbsp;</router-link>
      <router-link to="/map">地图&nbsp;&nbsp;&nbsp;</router-link>
      <router-link to="/about">关于&nbsp;&nbsp;&nbsp;</router-link>

    </div>
    <router-view/>
  </div>
</template>

<style lang="less" scoped>
@selectedItem :#42b983;
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: inline-flex;
}
#nav {
  width: 200px;
  display: grid;
  position: absolute;
  >a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration:none;
    margin-top: 20px;
    display: inline-flex;
    margin-left:30%;
    &.router-link-active {
      color: @selectedItem;
      .subNav{
        display: block;
      }
    }
  }
}
#nav+div {
    width: calc(100vw - 240px);
    position:absolute;
    right:0;
}
.subNav{
  display: none;
  position: relative;
  left: -20px;
  top: 20px;
  padding-bottom: 10px;  
  >a{
    font-weight: bold;
    color: #2c3e50;
    text-decoration:none;
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
