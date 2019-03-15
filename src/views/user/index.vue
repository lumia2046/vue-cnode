<template>
  <div class="user">
    <app-head :back="true" :title="userInfo?(userInfo.loginname+' - 个人资料'):'加载中'"></app-head>
    <div v-if="userInfo" class="userInfo">
      <img :src="userInfo.avatar_url" class="bigImg">
      <div class="info">
        <span class="infoItem">积分：{{userInfo.score}}</span>
        <span class="infoItem">GitHub：{{userInfo.githubUsername}}</span>
        <span class="infoItem">注册于：{{userInfo.create_at|formatData}}</span>
      </div>
      <div class="navBar">
        <span :class="['navItem',{active:type===0}]" @click="handleClick(0)">回复</span>
        <span :class="['navItem',{active:type===1}]" @click="handleClick(1)">主题</span>
      </div>
      <div v-for="(item,i) of items" :key="i" class="topicItem" @click="goToDetail(item.id)">
        <img class="navImg" :src="item.author.avatar_url">
        <div class="navRight">
          <div class="navInfo">
            <span class="navUserName">{{item.author.loginname}}</span>
            <span class="navTime">{{item.last_reply_at|formatData}}</span>
          </div>
          <div class="navContent">{{item.title}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import AppHead from "@/components/head.vue";
import { UserInfo } from "@/interface/UserInfo";
import { TopicItem } from "@/interface/TopicItem";

@Component({
  components: {
    AppHead
  }
})
export default class User extends Vue {
  userInfo: UserInfo | null = null;
  items?: TopicItem[];
  type: number = 0;

  created() {
    const name = this.$route.params["name"];
    axios.get(`https://cnodejs.org/api/v1/user/${name}`).then(response => {
      const {data} = response
      this.userInfo = data["data"];
      this.items = this.userInfo.recent_replies;
      
    });
  }

  handleClick(type: number) {
    this.type = type;
    if (type === 0) {
      this.items = this.userInfo.recent_replies;
    } else {
      this.items = this.userInfo.recent_topics;
    }
  }

  goToDetail(id: string) {
    this.$router.push(`/detail/${id}`);
  }
}
</script>

<style lang="scss">
.user {
  .userInfo {
    position: absolute;
    top: 51px;
    bottom: 0;
    width: 100%;
    overflow: auto;
  }

  .bigImg {
    display: block;
    margin: 30px auto;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 3px solid #ccc;
  }

  .info {
    display: flex;
    padding: 10px 5px;
  }

  .infoItem {
    flex: 1;
  }

  .infoItem:nth-child(1) {
    text-align: left;
  }

  .infoItem:nth-child(2) {
    text-align: center;
  }

  .infoItem:nth-child(3) {
    text-align: right;
  }

  .navBar {
    display: flex;
    border-width: 1px 0;
    border-style: solid;
    border-color: #ccc;
  }

  .topicItem {
    padding: 10px 5px;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
  }

  .navImg {
    float: left;
    margin-top: 5px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid #ccc;
  }

  .navRight {
    margin-left: 40px;
  }

  .navTime {
    float: right;
  }

  .navItem {
    flex: 1;
    padding: 10px;
    text-align: center;
    cursor: pointer;
  }

  .navItem:nth-child(1) {
    border-right: 1px solid #ccc;
  }

  .active {
    color: red;
  }
}
</style>

