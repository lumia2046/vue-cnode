<template>
  <span @click="logout()" class="logout">注销</span>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Login extends Vue {
  token?: string = "";
  message?: string = "";

  logout() {
    this.$store.dispatch("clearUserInfo").then(() => {
      this.$router.push("/login");
    });
  }
}
</script>

<style lang="scss">
.logout {
  cursor: pointer;
}
</style>

