<template>
  <div class="profile">
    <div v-if="!$store.state.userInfo" class="not-login">
      <p class="not-login-text">您还未登陆，请先登陆！</p>
      <button>
        <router-link class="to-login" to="/login">登陆</router-link>
      </button>
    </div>
    <div v-if="$store.state.userInfo" class="profile">
      <app-head title="我的">
        <app-logout></app-logout>
      </app-head>
      <img :src="$store.state.userInfo.avatar_url" class="user-img">
      <p class="name">{{$store.state.userInfo.loginname}}</p>
      <!-- <p class='item'>我的消息<span class='item-right'>></span></p> -->
      <p class="item" @click="goToUser()">
        我的回复
        <span class="item-right">></span>
      </p>
    </div>
    <foot-bar></foot-bar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import AppHead from "@/components/head.vue";
import FootBar from "@/components/footBar.vue";
import AppLogout from '../login/logout.vue';

@Component({
  components: {
    AppHead,
    FootBar,
    AppLogout
  }
})
export default class Profile extends Vue {
  created() {
    console.log(this.$store.state);
  }
  goToUser() {
    this.$router.push(`/user/${this.$store.state.userInfo.loginname}`);
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

