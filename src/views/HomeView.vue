<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <p>{{ greetText }}</p>
    <MyButton :greet="greetText" @click="onMyButtonClicked"></MyButton>
    <ResetButton v-model="greetText"></ResetButton>
    <VersionsVue></VersionsVue>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue";
import MyButton from "../components/MyButton.vue";
import ResetButton from "../components/ResetButton.vue"; // @ is an alias to /src
import VersionsVue from "../components/Versions.vue";

@Component({
  components: {
    HelloWorld,
    MyButton,
    ResetButton,
    VersionsVue,
  },
})
export default class HomeView extends Vue {
  public greetText = "Hello";

  public onMyButtonClicked() {
    this.greetText = "こんにちは";
  }
}
</script>
