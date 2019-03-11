<template>
  <div class="home-content-item" @click="handleClick()">
    <img :src="info.author.avatar_url" class="avatar">
    <div class="head">
      <p class="username">{{info.author.loginname}}</p>
      <p class="info">
        <span class="public_data">{{info.create_at|formatData}}</span>
        <span class="tag">{{info.tag}}</span>
      </p>
    </div>
    <h2 class="title">{{info.title}}</h2>
    <div class="foot">
      <span class="footItem">查看量 {{info.visit_count}}</span>
      <span class="footItem">回复量 {{info.reply_count}}</span>
      <span class="footItem">{{info.last_reply_at|formatData}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { TopicItem } from "../../interface/TopicItem";

const tag = {
  good: "#精华#",
  share: "#分享#",
  ask: "#问答#",
  job: "#招聘#",
  dev: "#测试#"
};

@Component({
  //   components: {
  //     HelloWorld,
  //   },
})
export default class Item extends Vue {
  @Prop() info!: TopicItem;

  created() {
    this.info.tag = tag[this.info.tab as keyof typeof tag];
  }

  handleClick() {
    this.$router.push(`/detail/${this.info.id}`);
  }
}
</script>

<style lang="scss">
.home-content-item {
  padding: 20px;
  margin-bottom: 20px;
  background: white;
  cursor: pointer;

  .avatar {
    float: left;
    margin: 2px;
    border-radius: 50%;
    width: 38px;
    height: 38px;
  }

  .head {
    margin-left: 50px;
  }

  .public_data,
  .footItem {
    color: #ccc;
  }

  .tag {
    margin: 0 10px;
    color: rgb(200, 20, 20);
  }

  .title {
    padding: 20px 0;
    font-size: 18px;
  }

  .foot {
    display: flex;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding-top: 20px;
  }

  .footItem {
    flex: 1;
    padding: 5px;
    text-align: center;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }

  .footItem:nth-last-child(1) {
    border-right-color: transparent;
  }
}
</style>