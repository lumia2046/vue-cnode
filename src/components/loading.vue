<template>
  <div class='loading'></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { LinkItem } from "../interface/LinkItem";

export default class Loading extends Vue {
}
</script>

<style lang="scss">
.loading{
  position: absolute;
  top:50%;
  left: 50%;
  border-radius: 50%;
  border:5px solid rgb(200,20,20);
  border-right-color: transparent;
  width: 50px;
  height: 50px;
  animation: circle 1s infinite linear;
}

@keyframes circle{
  0%{transform: translate(-50%,-50%) rotate(0deg)}
  100%{transform: translate(-50%,-50%) rotate(360deg)}
}
</style>