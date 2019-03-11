<template>
  <div class="home">
    <head-bar></head-bar>
    <router-view></router-view>
    <foot-bar></foot-bar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FootBar from '@/components/footBar.vue';
import HeadBar from './headBar.vue';

@Component({
  components: {
    HeadBar,
    FootBar
  },
})
export default class Home extends Vue {


}
</script>
