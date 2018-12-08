<template>
  <div class="home">
    <HomeMain msg="这个我们的主场"/>
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
