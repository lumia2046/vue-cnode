<template>
  <div class="detail-reply">
    <p class="title">
      共(
      <span class="number">{{replies.length}}</span>
      )条回复
    </p>
    <item v-for="(item,i) of replies" :key="i" :item="item" :index="i"></item>
    <app-input></app-input>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { ReplyItem } from "../../interface/ReplyItem";
import Item from "./replyItem.vue";

@Component({
  components: {
    Item
  }
})
export default class Reply extends Vue {
  @Prop() replies?: ReplyItem[];
}
</script>

<style lang="scss">
.detai-reply {
  .title {
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    border-left: 3px solid rgba(200, 20, 20);
    padding: 10px;
  }

  .number {
    color: rgb(200, 20, 20);
  }
}
</style>