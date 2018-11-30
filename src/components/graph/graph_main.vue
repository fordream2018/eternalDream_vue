<template>
  <div id="graph_main">
    <div class="button-grp">
      <button @click="select('chart')" :class="{btnActive: selected === 'chart'}">Chart</button>
      <button @click="select('stockChart')" :class="{btnActive: selected === 'stockChart'}">Stock Chart</button>
      <button @click="select('mapChart')" :class="{btnActive: selected === 'mapChart'}">Map Chart</button>
    </div>
    <keep-alive>
      <component :is="currentView"></component>
    </keep-alive>
  </div>
</template>

<script>
import Chart from '@/components/graph/Chart.vue'
import StockChart from '@/components/graph/StockChart'
import MapChart from '@/components/graph/MapChart'

export default {
  name: 'app',
  data () {
    return {
      selected: 'chart',
      currentView: 'chart'
    }
  },
  components: {
    chart: Chart,
    stockChart: StockChart,
    mapChart: MapChart
  },
  methods: {
    activate (elem) {
      this.selected = elem
    },
    handler () {
      var args = arguments
      for (var arg of args) {
        if (arg instanceof Function) {
          arg()
        }
      }
    },
    select (elem) {
      this.currentView = elem
      this.activate(elem)
    }
  }
}
</script>

<style>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.row > * {
  padding: 0 20px;
}
.logos {
  margin: 0 auto;
  width:50%;
}
.logo-hc {
  width: 70%;
  height: auto;
}
.logo-vue {
  width: 15%;
  height: auto;
}
.button-grp {
  margin: 20px 0;
}
button {
  padding: 10px 20px;
  outline: none;
  background: #828ea0;
  color: #fff;
  font-size: 16px;
  margin: 5px;
  border: 0px;
}
button:hover {
  background: #a7aeb8;
  transition: background 0.2s;
}
button:active {
  color: rgb(117, 117, 117);
}
.btnActive {
  color: #6fcd98
}
</style>
