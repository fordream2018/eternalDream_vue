<template>
  <div class="map">
    <MapMain msg="this is home main page"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MapMain from '@/components/map/map_main.vue'; // @ is an alias to /src
import { Action, Mutation, Getter, namespace } from 'vuex-class';
@Component({
  components: {
      MapMain,
  },
})
export default class Map extends Vue {
    @Getter('getIsShowRouter') isShowRouter;
    @Action('changeIsShowRouter') changeIsShowRouter;

    private created(){
        this.changeIsShowRouter({ value: true })
    }
}
</script>
