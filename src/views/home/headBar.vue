<template>
  <div class="home-head-bar">
    <router-link
      v-for="(item,i) of items"
      :key="i"
      :to="'/home/'+item.link"
      :class="['item',{active:activeLink===item.link}]"
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
    this.setActiveLink();
  }
}
</script>

<style lang="scss">
.home-head-bar {
  border-bottom: 1px solid rgba(0,0,0,0.1);
  .item {
    display: inline-block;
    width: calc(100% / 6);
    padding: 10px;
    margin-bottom: -1px;
    border-bottom: 2px solid transparent;
    text-align: center;
  }
  .active {
    
    border-color: rgb(200, 0, 0);
  }
}
</style>