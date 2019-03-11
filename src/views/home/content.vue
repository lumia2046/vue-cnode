<template>
  <div class="home-content" ref="itemList" @scroll="handleScroll($event)">
    <div v-if="loading" class="loading">
      <loading></loading>
    </div>
    <div v-if="(page>1||!loading) && items.length">
      <item v-for="(item,i) of items" :key="i" :info="item"></item>
    </div>
    <div v-if="(page>1||!loading) && !items.length" class="null">暂无数据</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import axios from "axios";
import querystring from "querystring";
import { TopicItem } from "../../interface/TopicItem";
import Loading from "@/components/loading.vue";
import Item from "./item.vue";

@Component({
  components: {
    Item,
    Loading
  }
})
export default class List extends Vue {
  loading: boolean = false;
  page: number = 1;
  items: TopicItem[] = [];
  a: any = 0;

  created() {
    this.getTopics();
  }

  handleScroll(e: any) {
    const { scrollTop, scrollHeight, offsetHeight } = e.target;
    if (scrollTop + offsetHeight > scrollHeight - 100 && !this.loading) {
      const link = this.$route.params["tabName"];
      this.getTopics(true);
    }
  }

  @Watch("$route")
  function(to: any, from: any) {
    this.getTopics();
  }

  getTopics(add?: boolean): void {
    this.loading = true;
    const link = this.$route.params["tabName"];
    const params: any = { tab: link === "all" ? null : link };
    if (add) {
      this.page++;
    } else {
      this.page = 1;
    }
    params["page"] = this.page;

    axios
      .get(`https://cnodejs.org/api/v1/topics?${querystring.stringify(params)}`)
      .then(response => {
        this.loading = false;
        if (add) {
          this.items = this.items.concat(response.data.data);
        } else {
          this.items = response.data.data;
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }
}
</script>

<style lang="scss">
.home-content {
  position: absolute;
  top: 43px;
  bottom: 42px;
  width: 100%;
  background: #ccc;
  overflow: auto;
  .null {
    padding: 20px;
    text-align: center;
  }
}
</style>