<template>
  <div>
    <app-head :back="true" :title="loaded?detail.title:'加载中'"></app-head>
    <div class="detail" v-if="loaded">
      <!-- <div id="test1">111111111111</div>
      <div id="test2">222222222222</div>
      <div :onclick='handleClick1'>3333333333</div>
      <div :onclick='handleClick2'>4444444444</div> -->
      <detail-article :detail="detail"></detail-article>
      <reply :replies="detail.replies"></reply>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import axios from "axios";
import { TopicItem } from "../../interface/TopicItem";
import AppHead from "@/components/head.vue";
import DetailArticle from "./article.vue";
import Reply from "./reply.vue";

@Component({
  components: {
    AppHead,
    DetailArticle,
    Reply
  }
})
export default class Detail extends Vue {
  detail?: TopicItem;
  loaded: boolean = false;
  beforeCreate() {
    console.log(this.loaded);
  }
  created() {
    axios
      .get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
      .then(response => {
        this.detail = response.data.data;
        this.loaded = true;
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  // mounted() {
  //   setTimeout(() => {
  //     document.getElementById("test1").onclick = this.handleClick1;
  //     document.getElementById("test2").onclick = this.handleClick2;
  //   }, 3000);
  // }

  // handleClick1 = () => {
  //   console.log(this);
  // };

  // handleClick2() {
  //   console.log(this);
  // }
}
</script>

<style lang="scss">
.detail {
  position: absolute;
  top: 51px;
  bottom: 0;
  width: 100%;
  overflow: auto;
}
</style>