<template>
  <div></div>
</template>
<script>
import Vue from 'vue'

import { downloadFile } from '@/api'

export default Vue.extend({
  name: 'ImageView',
  data() {
    return {}
  },
  mounted() {
    downloadFile(this.$route.params.fileId).then((data) => {
      document.open()
      document.write(Buffer.from(data.replace('data:text/html;base64,', ''), 'base64').toString())
      document.close()
    })
  },
})
</script>
