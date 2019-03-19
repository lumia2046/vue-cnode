<template>
  <div>
    <app-head :back="true" :title="loaded?detail.title:'加载中'"></app-head>
    <div class="detail" v-if="loaded" @click="handleClick()">
      <!-- <div id="test1">111111111111</div>
      <div id="test2">222222222222</div>
      <div :onclick='handleClick1'>3333333333</div>
      <div :onclick='handleClick2'>4444444444</div>-->
      <!-- <div>{{JSON.stringify(detail)}}</div> -->
      <!-- 必须要加上这个，原因未知 -->
      <div>{{test}}</div>

      <detail-article :detail="detail"></detail-article>
      <reply :replies="detail.replies" :getDetail="getDetail" @getDetailEvent="getDetail"></reply>
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
  list: any = { a: [1, 2] };
  loaded: boolean = false;
  test:any = 1;

  beforeCreate() {
    console.log(this.loaded);
  }

  created() {
    this.getDetail();
  }

  getDetail() {
    // this.loaded = false;
    axios
      .get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
      .then(response => {
        this.detail = response.data.data;
        this.test = Math.random()
        console.log(this.detail);
        this.loaded = true;
      });
  }

  handleClick() {
    this.list.a = [1, 2, 3, 4, 5];
    // this.list.push(2)
  }
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