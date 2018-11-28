<template>
  <div class="home">
    <HomeMain msg="this is home main page"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HomeMain from '@/components/home/home_main.vue'; // @ is an alias to /src

@Component({
  components: {
      HomeMain,
  },
})
export default class Home extends Vue {}
</script>
