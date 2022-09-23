<template>
  <div>
    <p>This app is using</p>
    <p>Chrome (v{{ versions.chrome() }})</p>
    <p>Node.js (v{{ versions.node() }})</p>
    <p>Electron (v{{ versions.electron() }})</p>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";

@Component
export default class VersionsVue extends Vue {
  public versions = window.versions;
}
</script>
