<template>
  <button @click="onClick">Reset</button>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";

@Component
export default class ResetButton extends Vue {
  @Prop()
  private initialValue!: string;

  /** モデルバインドのために記述必須 */
  @Prop()
  public value!: string;

  /** ライフサイクルフック */
  public created() {
    this.initialValue = this.value;
  }

  /** モデルバインドのために記述必須 */
  @Emit()
  public input(value: string) {
    return;
  }

  public onClick() {
    this.input(this.initialValue);
  }
}
</script>
