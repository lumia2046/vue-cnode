<template>
  <div class="detail-reply-input">
    <div v-if="!$store.state.userInfo" class="not-login">
      <p>您还未登陆，请先登陆</p>
      <button>
        <router-link to="/login">登陆</router-link>
      </button>
    </div>
    <div v-if="$store.state.userInfo">
      <textarea rows="5" class="input" placeholder="请输入内容" v-model="content"></textarea>
      <div class="submit">
        <button @click="submit()">发布</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import axios from "axios";
@Component
export default class Input extends Vue {
  content: string = "";

  @Prop() replyId?: string;

  @Prop() getDetail!:Function;

  submit() {
    axios.post<any>(`https://cnodejs.org/api/v1/topic/${this.$route.params['id']}/replies`, {
      accesstoken: this.$store.state.userInfo.token,
      content:this.content,
      replyId:this.replyId
    }).then(response => {
        if (response.data.success) {
          this.getDetail();
          this.content = '';
        }
      });
  }
}
</script>


<style lang="scss">
.detail-reply-input {
  .not-login {
    padding: 30px 0;
    text-align: center;
  }

  .not-login p {
    padding-bottom: 10px;
  }

  .input {
    display: block;
    width: 100%;
    margin-top: 20px;
  }

  .submit {
    padding: 20px 0;
    text-align: right;
  }
}
</style>
