<template>
  <div class="about">
    <AboutMain msg="this is about main page"/>
  </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { publicModule } from "../store/moudles/public"
    import AboutMain from '@/components/about/about_main.vue'; // @ is an alias to /src
    @Component({
        components: {
            AboutMain,
        },
    })
    export default class About extends Vue {

        get getIsShowRouter() {
            return publicModule.isShowRouter // -> store.state.user.firstName
        };

        created(){
            publicModule.changeIsShowRouter({isShow:true})
        }
    }
</script>

