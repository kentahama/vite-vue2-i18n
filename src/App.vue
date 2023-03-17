<template>
  <div style="margin: 5rem">
    <h1>{{ $t("globalhi") }}</h1>
    <h1>{{ $t("hi") }}</h1>

    <select v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
        {{ lang }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {
  langs = ["ja", "en"];
}
</script>

<i18n lang="yaml">
en:
  hi: Hello
ja:
  hi: こん＾＾
</i18n>
