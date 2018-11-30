<template>
  <div class="graph">
    <GraphMain msg="this is graph main page"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import GraphMain from '@/components/graph/graph_main.vue'; // @ is an alias to /src


@Component({
  components: {
      GraphMain,
  },
})
export default class Graph extends Vue {}
</script>
