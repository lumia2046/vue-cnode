<template>
  <div class="detail-reply-item">
    <img :src="item.author.avatar_url" class="img" @click="imgClick(item.author.loginname)">
    <div class="reply_content">
      <div class="reply_head">
        <span class="user_name">{{item.author.loginname}}</span>
        <span class="publish_data">{{item.create_at|formatData}}</span>
        <span class="right">{{index+1}}楼</span>
      </div>
      <div class="markdown-body" v-html="item.content"></div>
      <div class="foot">
        <span class="to_reply" @click="changeShowReply()">回复</span>
      </div>
      <app-input v-if="showReply" :replyId="item.id" :getDetail="$props.getDetail"></app-input>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { ReplyItem } from "../../interface/ReplyItem";
import AppInput from "./input.vue";

@Component({
  components: {
    AppInput
  }
})
export default class Item extends Vue {
  @Prop() item?: ReplyItem;
  @Prop() index?: number;
  @Prop() getDetail!:Function;
  showReply: boolean = false;

  changeShowReply() {
    this.showReply = !this.showReply;
  }

  imgClick(name: string) {
    this.$router.push(`/user/${name}`);
  }
}
</script>

<style lang="scss">
.detail-reply-item {
  padding: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  .img {
    float: left;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid #ccc;
    cursor: pointer;
  }

  .reply_content {
    margin-left: 40px;
  }

  .reply_head {
    height: 30px;
    line-height: 30px;
  }

  .user_name {
    margin-right: 10px;
  }

  .publish_data {
    color: #ccc;
    font-size: 12px;
    font-weight: normal;
  }

  .right {
    float: right;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    color: #ccc;
  }

  .markdown-body {
    padding-top: 10px;
  }

  .foot {
    padding: 10px 0;
    text-align: right;
  }

  .to_reply {
    margin-left: 10px;
    cursor: pointer;
  }
}
</style>