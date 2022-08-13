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
      var image = new Image()
      image.src = data      
      window.document.write(image.outerHTML)
      window.document.close()
    })
  },
})
</script>
