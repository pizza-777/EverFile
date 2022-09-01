<template>
  <div>
    <b-container>
      <b-row class="vh-100 text-center" align-v="center">
        <b-col> </b-col>
        <b-col>
          <b-spinner style="width: 3rem; height: 3rem;"  variant="secondary"></b-spinner>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
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
