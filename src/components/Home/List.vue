<template>
  <div class="itemList" #itemList>
    <div v-if="loading" class="loading">
      <app-loading></app-loading>
    </div>
    <div v-if="(page>1||!loading) && items.length">
      <item *ngFor="item of items" [info]="item"></item>
    </div>
    <div v-if="(page>1||!loading) && !items.length" class="null">暂无数据</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from 'axios';
import { TopicItem } from "../../interface/TopicItem";
import Item from './Item.vue';

@Component({
    components: {
      Item,
    },
})
export default class List extends Vue {
  loading: boolean = false;
  page: number = 1;
  items: TopicItem[] = [];

  getTopics = (params: any = {}, add?: boolean): void => {
    this.loading = true
    if(add){
      this.page++
    }else{
      this.page = 1
    }
    params['page'] = this.page
    this.service.getTopics(params).subscribe(data => {
      this.loading = false
      if (add) {
        this.items = [...this.items, ...data["data"]]
      } else {
        this.items = [...data["data"]]
      }
    })
  }
  created(){
    const link = this.$route.params["tabName"]
    this.getTopics({ tab: link === 'all' ? null : link })
    // this.itemList.nativeElement.onscroll = e => {
    //   const { scrollTop, scrollHeight, offsetHeight } = e.target
    //   if (scrollTop + offsetHeight > scrollHeight - 100 && !this.loading) {
    //     const link = this.$route.params["tabName"]
    //     this.getTopics({ tab: link === 'all' ? null : link }, true)
    //   }
    // }
  }
}
</script>

<style lang="scss">
.itemList {
  position: absolute;
  top: 43px;
  bottom: 42px;
  width: 100%;
  background: #ccc;
  overflow: auto;
}

.null {
  padding: 20px;
  text-align: center;
}
</style>