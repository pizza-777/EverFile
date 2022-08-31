<template>
  <div class="container mt-3">
    <div>
      <b-navbar variant="faded" type="light">
        <b-navbar-brand>Uploaded files</b-navbar-brand>
      </b-navbar>
    </div>
    <b-table striped hover :items="items">
      <template #cell(Address)="data">
        <span v-html="data.value"></span>
      </template>
    </b-table>
    <nav class="text-center mt-3">
      <router-link class="text-secondary" to="/">Upload</router-link>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { uploadedFilesList } from '@/api.ts'
export default Vue.extend({
  name: 'UploadView',
  data() {
    return {
      items: [],
    }
  },
  mounted() {
    uploadedFilesList().then((r) => {
      this.items = r.map((i) => {
        return {
          Address: `<a href="./#/file/${i.node.dst}" class="link-secondary">${i.node.dst.slice(0, 12) + ' . . . ' + i.node.dst.slice(58)}</a>`,
          Time: i.node.created_at_string,
        }
      })
    })
  },
})
</script>
