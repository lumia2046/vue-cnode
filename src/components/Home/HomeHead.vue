<template>
  <div class="list">
    <router-link
      v-for="(item,i) of items"
      :key="i"
      :to="'/index/'+item.link"
      class="item"
      :class="{active:activeLink===item.link}"
    >{{item.title}}</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { LinkItem } from "../../interface/LinkItem";

@Component({
  //   components: {
  //     HelloWorld,
  //   },
})
export default class HomeHead extends Vue {
  items: LinkItem[] = [
    {
      link: "all",
      title: "全部"
    },
    {
      link: "good",
      title: "精华"
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
    },
    {
      link: "dev",
      title: "测试"
    }
  ];

  activeLink = "all";

  @Watch("$route")
  function(to: any, from: any) {
    this.setActiveLink();
  }

  setActiveLink() {
    this.activeLink = this.$route.params["tabName"];
  }

  created() {
    this.setActiveLink()
  }
}
</script>

<style lang="scss">
.list {
  .item {
    display: inline-block;
    width: calc(100% / 6);
    padding: 10px;
    border-bottom: 3px solid transparent;
    text-align: center;
  }
  .active {
    border-bottom: 3px solid rgb(200, 0, 0);
  }
}
</style>