<template>
  <div class="profile">
    <div *ngIf="!loginService.userInfo" class="not-login">
      <p class="not-login-text">您还未登陆，请先登陆！</p>
      <button>
        <a class="to-login" routerLink="/login">登陆</a>
      </button>
    </div>
    <div *ngIf="loginService.userInfo" class="profile">
      <app-head title="我的">
        <app-logout></app-logout>
      </app-head>
      <img [src]="loginService.userInfo.avatar_url" class="user-img">
      <p class="name">{{loginService.userInfo.loginname}}</p>
      <!-- <p class='item'>我的消息<span class='item-right'>></span></p> -->
      <p class="item" (click)="goToUser()">
        我的回复
        <span class="item-right">></span>
      </p>
    </div>
    <app-foot-bar></app-foot-bar>
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
export default class Profile extends Vue {
  userInfo: UserInfo | null = null;
  items?: TopicItem[];
  type: number = 0;

  created() {
    const name = this.$route.params["name"];
    axios.get(`https://cnodejs.org/api/v1/user/${name}`).then(response => {
      const { data } = response;
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
.profile {
  .not-login {
    padding-top: 50px;
    text-align: center;
  }

  .not-login-text {
    padding: 10px 0;
  }

  .to-login {
    display: inline-block;
    padding: 5px 10px;
  }

  .user-img {
    display: block;
    width: 80px;
    height: 80px;
    margin: 120px auto 20px;
    border-radius: 50%;
    border: 1px solid #ccc;
  }

  .name {
    margin-bottom: 80px;
    text-align: center;
  }

  .item {
    padding: 10px 5px;
    border-bottom: 1px solid #ccc;
    background: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  .item:nth-child(1) {
    border-top: 1px solid #ccc;
  }

  .item-right {
    float: right;
    transform: scaleY(1.8);
  }
}
</style>

