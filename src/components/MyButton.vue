<template>
  <button @click="onClick">MyButton</button>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";

@Component
export default class MyButton extends Vue {
  @Prop()
  public greet?: string;

  @Emit()
  public click() {
    return;
  }

  public onClick() {
    alert(this.greet);
    this.click();
  }
}
</script>
