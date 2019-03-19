<template>
  <div class="detail-reply">
    <p class="title">
      共(
      <span class="number">{{replies.length}}</span>
      )条回复
    </p>
    <item
      v-for="(item,i) of replies"
      :key="i"
      :item="item"
      :index="i"
      :getDetail="$props.getDetail"
    ></item>
    <app-input :getDetail="$props.getDetail" @getDetailEvent="getDetail"></app-input>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { ReplyItem } from "../../interface/ReplyItem";
import Item from "./replyItem.vue";
import AppInput from "./input.vue";

@Component({
  components: {
    Item,
    AppInput
  }
})
export default class Reply extends Vue {
  @Prop() replies?: ReplyItem[];
  @Prop() getDetail!: Function;
  @Prop() getDetailEvent!: Function;
  @Prop() list!: any;
  beforeUpdated() {
    console.log(this);
  }
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