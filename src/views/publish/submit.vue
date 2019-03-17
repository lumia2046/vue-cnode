<template>
  <button @click="submit()">提交</button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import axios from "axios";

@Component
export default class Submit extends Vue {

  @Prop() title?: string;
  @Prop() classify?: string;
  @Prop() content?: string;

  submit() {
    axios
      .post(`https://cnodejs.org/api/v1/topics`, {
        title: this.title,
        tab: this.classify,
        content: this.content,
        accesstoken: this.$store.state.userInfo.token
      })
      .then(response => {
        if (response.data.success) {
          this.$router.push(`/home/${this.classify}`);
        }
      });
  }
}
</script>

<style lang="scss">
</style>


