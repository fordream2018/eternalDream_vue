<template>
  <div class="about">
    <AboutMain msg="this is about main page"/>
  </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import AboutMain from '@/components/about/about_main.vue'; // @ is an alias to /src
    import { Action, Mutation, Getter, namespace } from 'vuex-class';
    @Component({
        components: {
            AboutMain,
        },
    })
    export default class About extends Vue {
        @Getter('getIsShowRouter') isShowRouter;
        @Action('changeIsShowRouter') changeIsShowRouter;

        private created(){
            this.changeIsShowRouter({ value: true })
        }
    }
</script>

