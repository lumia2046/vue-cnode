<template>
  <div class="publish-page">
    <div v-if="!$store.state.userInfo">
      <button>
        <router-link to="/login" class="login">登陆</router-link>
      </button>
    </div>
    <div v-if="$store.state.userInfo">
      <app-head title="发布">
        <app-submit :title="title" :content="content" :classify="classify"></app-submit>
      </app-head>
      <div class="publish">
        <input class="input" placeholder="请输入标题" v-model="title">
        <select class="select" placeholder="请选择类型" @change="handleSelect($event.target.value)">
          <option v-for="(item,i) of items" :key="i" :value="item.link">{{item.title}}</option>
        </select>
        <textarea rows="5" class="textarea" placeholder="请输入内容" v-model="content"></textarea>
      </div>
    </div>
    <foot-bar></foot-bar>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import AppHead from "@/components/head.vue";
import FootBar from "@/components/footBar.vue";
import AppSubmit from './submit.vue';
import { LinkItem } from "../../interface/LinkItem";

@Component({
  components: {
    AppHead,
    FootBar,
    AppSubmit
  }
})
export default class Publish extends Vue {
  items: LinkItem[] = [
    {
      link: "dev",
      title: "测试"
    },
    {
      link: "share",
      title: "分享"
    },
    {
      link: "ask",
      title: "问答"
    },
    {
      link: "job",
      title: "招聘"
    }
  ];

  title: string = "";
  content: string = "";
  classify: string = "dev";

  handleSelect(value: string) {
    this.classify = value;
  }
}
</script>

<style lang="scss">
.publish-page {
  .login {
    display: block;
    margin: 200px auto;
    padding: 5px 10px;
  }

  .publish {
    position: absolute;
    top: 51px;
    bottom: 51px;
    width: 100%;
    overflow: auto;
  }

  .input {
    display: block;
    width: 100%;
  }

  .select {
    display: block;
    width: 100%;
  }

  .textarea {
    display: block;
    width: 100%;
  }
}
</style>
