<template>
  <div class="foot-bar">
    <router-link
      v-for="(item,i) of items"
      :key="i"
      :to="item.link"
      @click="setActive(item.link)"
      :class="['link',{active:activeLink.indexOf(item.link)===0}]"
    >{{item.title}}</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { LinkItem } from "../interface/LinkItem";

@Component({})
export default class List extends Vue {
  activeLink = "/home";

  items: LinkItem[] = [
    {
      link: "/home",
      title: "首页"
    },
    {
      link: "/publish",
      title: "发表"
    },
    {
      link: "/profile",
      title: "我的"
    }
  ];

  setActive(link: string): void {
    this.activeLink = link;
  }

  created() {
    this.activeLink = this.$route.path;
  }
}
</script>

<style lang="scss">
.foot-bar {
  position: absolute;
  width: 100%;
  border-top: 1px solid #ccc;
  bottom: 0;
  display: flex;
  /* 子元素水平排列、不换行 */
  flex-flow: row nowrap;
  /* 内容居中 */
  justify-content: center;
  .link {
    flex-grow: 1;
    text-align: center;
    padding: 10px;
  }

  .active {
    color: rgb(200, 20, 20);
  }
}
</style>