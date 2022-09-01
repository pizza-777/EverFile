<template>
  <div>
    <nav class="text-center mt-3">
      <router-link class="text-secondary" to="/">Upload</router-link>
    </nav>
    <div class="container mt-5">
      <div v-show="show" class="text-secondary">
        file address:
        <b-link :href="'https://' + explorer + '/accounts/accountDetails?id=' + this.$route.params.fileId" class="link-secondary" target="_blank"
          ><b>{{ this.$route.params.fileId }}</b></b-link
        >
      </div>
      <div v-show="error" class="text-danger text-center">{{ error }}</div>
      <b-card v-show="show" class="mt-3 text-secondary">
        <b-card-text class="mt-2"><b>name</b>: {{ file.file_name }}</b-card-text>
        <hr />
        <b-card-text><b>size</b>: {{ humanFileSize }}</b-card-text>
        <hr />
        <b-card-text><b>type</b>: {{ file.file_type }}</b-card-text>
        <hr />
        <b-button variant="outline-secondary" @click="_download()" :disabled="btnLoader">
          Download
          <b-spinner style="margin-left: 0.3em" v-if="btnLoader" small></b-spinner>
        </b-button>
        <b-link class="text-secondary ms-3" v-if="openFileLink" :href="'./#/' + fileType + '/' + this.$route.params.fileId" target="_blank">
          <span class="me-2">Open</span>
          <span>
            <b-icon-box-arrow-up-right></b-icon-box-arrow-up-right>
          </span>
        </b-link>
      </b-card>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { getFileInfo } from '@/api'
import { downloadFile } from '@/api'
import download from 'downloadjs'
import { config } from '@/config'

//convert bytes to human readable format
function bytesToSize(bytes) {
  var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  if (bytes == 0) return '0 Bytes'
  var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
  return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i]
}
export default Vue.extend({
  name: 'FileView',
  data() {
    return {
      error: false,
      file: false,
      humanFileSize: false,
      show: false,
      openFileLink: false,
      fileType: '',
      btnLoader: false,
      explorer: config.network.broxus == 'testnet' ? 'net.ever.live' : 'ever.live',
    }
  },
  methods: {
    async _download() {
      if (!this.file) return
      this.btnLoader = true
      const base64 = await downloadFile(this.$route.params.fileId)
      this.btnLoader = false
      download(base64, this.file.file_name, this.file.file_type)
    },
  },
  mounted() {
    getFileInfo(this.$route.params.fileId).then((file) => {
      if (typeof file === 'undefined') {
        this.error = 'Not found'
        this.show = false
      } else {
        this.file = file
        this.humanFileSize = bytesToSize(file.file_size)
        this.show = true
        const fileType = file.file_type.match(/html|image/)
        if (fileType !== null) {
          this.openFileLink = true
          this.fileType = fileType[0]
        }
      }
    })
  },
})
</script>
