<template>
  <div class="map">
    <MapMain msg="this is home main page"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MapMain from '@/components/map/map_main.vue'; // @ is an alias to /src
import { publicModule } from "../store/moudles/public.ts"
@Component({
  components: {
      MapMain,
  },
})
export default class Map extends Vue {

    created(){
        publicModule.changeIsShowRouter({isShow:true});
    }
}
</script>
