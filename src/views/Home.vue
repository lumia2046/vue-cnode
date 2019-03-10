<template>
  <div class="home">
    <home-head></home-head>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HomeHead from '@/components/Home/HomeHead.vue';

@Component({
  components: {
    HomeHead
  },
})
export default class Home extends Vue {


}
</script>
