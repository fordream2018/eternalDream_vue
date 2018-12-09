<template>
  <div class="list">
    <ListMain msg="this is a list mian page"/>
  </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import ListMain from '@/components/list/list_main.vue'; // @ is an alias to /src
    import { Action, Mutation, Getter, namespace } from 'vuex-class';
    @Component({
        components: {
            ListMain,
        },
    })
    export default class List extends Vue {
        @Getter('getIsShowRouter') isShowRouter;
        @Action('changeIsShowRouter') changeIsShowRouter;

        private created(){
            this.changeIsShowRouter({ value: true })
        }
    }
</script>

<style scoped lang="less">
  .list{
    width: 100%;
    height: auto;
  }
</style>

