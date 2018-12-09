<template>
  <div class="graph">
    <GraphMain msg="this is graph main page"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action, Mutation, Getter, namespace } from 'vuex-class';
import GraphMain from '@/components/graph/graph_main.vue'; // @ is an alias to /src


@Component({
  components: {
      GraphMain,
  },
})
export default class Graph extends Vue {
    @Getter('getIsShowRouter') isShowRouter;
    @Action('changeIsShowRouter') changeIsShowRouter;

    private created(){
        this.changeIsShowRouter({ value: true })
    }
}
</script>
