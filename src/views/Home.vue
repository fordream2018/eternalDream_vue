<template>
  <div class="home">
    <HomeMain msg="这个我们的主场"/>
    <img :src="imgUrl"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HomeMain from '@/components/home/home_main.vue'; // @ is an alias to /src

// @Component({
//   components: {
//       HomeMain,
//   },
// })
// export default class Home extends Vue {}

export default {
	name: 'app',
    data(){
    	return {
            imgUrl:require('../images/fight.jpg')  
    	}
    },
    components:{
       HomeMain:HomeMain
    },
}

</script>
