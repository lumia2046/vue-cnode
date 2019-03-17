<template>
  <div class="components-head">
    <span class="back" v-if="back" @click="goBack()"><</span>
    <span class="right">
      <slot></slot>
    </span>
    <span class="title">{{title}}</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { LinkItem } from "../interface/LinkItem";

@Component({})
export default class List extends Vue {
  @Prop() back!: boolean;
  @Prop() rightContent!: string;
  @Prop() title?: string;

  goBack() {
    this.$router.back();
  }
}
</script>

<style lang="scss">
.components-head {
  position: absolute;
  top: 0;
  width: 100%;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #ccc;
  background: white;
  overflow: hidden;
  .back {
    float: left;
    width: 50px;
    text-align: center;
    transform: scaleY(1.8);
    cursor: pointer;
  }

  .right {
    float: right;
    width: 50px;
    text-align: center;
  }

  .title {
    display: block;
    margin: 0 50px;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
  }
}
</style>