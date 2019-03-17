<template>
  <div class="login">
    <input placeholder="请输入Access Token" class="input" v-model="token">
    <button class="button" @click="submit()">确定</button>
    <p v-if="message">{{message}}</p>
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
export default class Login extends Vue {
  token?: string='';
  message?: string='';

  submit() {
    this.$store.dispatch('getUserInfo',this.token).then(()=>{
      this.$router.push('/profile');
    })
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

