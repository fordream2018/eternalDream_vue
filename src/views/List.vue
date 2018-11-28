<template>
  <div class="list">
    <ListMain msg="this is a list mian page"/>
  </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import ListMain from '@/components/list/list_main.vue'; // @ is an alias to /src

    @Component({
        components: {
            ListMain,
        },
    })
    export default class List extends Vue {}
</script>

