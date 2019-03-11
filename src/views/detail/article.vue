<template>
  <div class="detail-article">
    <h4 class="head">
      <img :src="detail.author.avatar_url" class="img" @click="imgClick(detail.author.loginname)">
      <span class="info">
        <span class="user_name">{{detail.author.loginname}}</span>
        <span class="publish_data">{{detail.create_at|formatData}}</span>
      </span>
      <span class="right">#楼主</span>
    </h4>
    <div class="title_info">
      <h2 class="title">{{detail.title}}</h2>
      <div>
        <span class="visit">查看量 {{detail.visit_count}}</span>
        <span class="reply">回复量 {{detail.reply_count}}</span>
      </div>
    </div>
    <div class="markdown-body" v-html="detail.content"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { TopicItem } from "../../interface/TopicItem";

@Component
export default class Article extends Vue {
  @Prop() detail?: TopicItem;
  imgClick(name: string) {
    this.$router.push(`/user/${name}`);
  }
}
</script>

<style lang="scss">
.detail-article {
  .head {
    height: 50px;
    line-height: 50px;
    padding: 0 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    font-weight: normal;
  }

  .img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #ccc;
    margin: 5px 15px 5px 0px;
    vertical-align: middle;
  }

  .info {
    display: inline-block;
    vertical-align: middle;
  }

  .user_name {
    display: block;
    line-height: 1.5;
  }

  .publish_data {
    display: block;
    line-height: 1.5;
    color: #ccc;
    font-size: 12px;
  }

  .right {
    float: right;
    height: 50px;
    line-height: 50px;
  }

  .title_info {
    padding: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .visit {
    margin-right: 10px;
  }

  .visit,
  .reply {
    font-size: 12px;
    color: #ccc;
  }

  .markdown-body {
    padding: 10px;
  }
}
</style>