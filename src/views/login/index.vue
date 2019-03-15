<template>
  <div class="login">
    <input placeholder="请输入Access Token" class="input" [(ngModel)]="token">
    <button class="button" (click)="submit()">确定</button>
    <p *ngIf="message">{{message}}</p>
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
.login {
  .input {
    display: block;
    margin: 100px auto 20px;
    width: 300px;
  }

  .button {
    display: block;
    margin: 0 auto;
    width: 300px;
    padding: 20px;
    text-align: center;
    background: rgb(200, 20, 20);
    color: white;
  }
}
</style>

