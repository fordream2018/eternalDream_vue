<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">首页 &#160;&nbsp;&nbsp;</router-link>
      <router-link to="/list">列表&nbsp;&nbsp;&nbsp;</router-link>
      <router-link to="/graph">图形&nbsp;&nbsp;&nbsp;</router-link>
      <router-link to="/map">地图&nbsp;&nbsp;&nbsp;</router-link>
      <router-link to="/about">关于&nbsp;&nbsp;&nbsp;</router-link>

    </div>
    <router-view/>
  </div>
</template>

<style lang="less" scoped>
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
  padding-top: 30px;
  display: grid;
  height: 205px;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration:none;
    margin-top: 20px;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#nav+div {
    width: calc(100vw - 240px);
}
</style>
