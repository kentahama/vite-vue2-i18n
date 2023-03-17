<template>
  <div style="margin: 5rem">
    <h1>{{ $t("hi") }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<i18n lang="yaml">
en:
  hi: Hello
ja:
  hi: こん＾＾
</i18n>
