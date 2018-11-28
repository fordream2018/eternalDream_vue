<template>
  <div class="about">
    <AboutMain msg="this is about main page"/>
  </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import AboutMain from '@/components/about/about_main.vue'; // @ is an alias to /src

    @Component({
        components: {
            AboutMain,
        },
    })
    export default class About extends Vue {}
</script>

