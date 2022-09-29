<template>
  <div>
    <div><LoginLogout :authProp="authTrigger" /></div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title text-secondary">Upload file</h4>
            </div>
            <div class="card-body">
              <div class="row" v-if="showInput">
                <div class="col-md-12">
                  <div class="form-group">
                    <input type="file" class="form-control" id="fileUpload" name="fileUpload" @change="loadFile" :disabled="disableInputs" />
                  </div>
                </div>
              </div>
              <div class="row mt-4">
                <div>
                  <span style="margin-left: 0.4em" v-if="btnLoader" class="text-secondary">prepearing ... </span>
                  <span style="margin-left: 0.4em" v-if="showProgress" class="text-secondary">uploading ... </span>
                  <b-spinner style="margin-left: 0.3em" v-if="btnLoader" small variant="secondary"></b-spinner>
                </div>
              </div>
              <div class="row mt-4" v-if="showProgress">
                <div class="col-md-12">
                  <b-progress variant="secondary" :value="value" :max="max" show-progress animated></b-progress>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div variant="outline-secondary">
                    <a v-if="fileAddress" :href="'./#/file/' + fileAddress" class="link-secondary">Go to file</a>
                  </div>
                </div>
              </div>
              <div v-if="showAlert" class="alert alert-secondary" role="alert">{{ alertContent }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div variant="outline-secondary" class="text-center mt-2" style="text-align: center">
      <a href="./#/uploaded" class="link-secondary"><b>Uploaded files</b></a>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { returnChange, uploadFile, uploadChunk, createChunks, getNetwork } from '@/api.ts'
import LoginLogout from '@/components/LoginLogout.vue'
import { config } from '@/config'

export default Vue.extend({
  name: 'HomeView',
  data() {
    return {
      fileAddress: false,
      file: false,
      max: 100, //progress bar max value
      value: 0, //progress bar value
      showProgress: false, //show progress bar
      disableInputs: false, //disable inputs
      showInput: true,
      btnLoader: false, //show loader on button
      authTrigger: false,
      showAlert: false,
      alertContent: '',
    }
  },
  methods: {
    loadFile(ev) {
      this.file = ev.target.files[0]
      this._uploadFile()
    },
    async _uploadFile() {
      if (this.file == false) {
        alert('Please select a file')
        return
      }
      this.btnLoader = true
      this.disableInputs = true
      const fileAddress = await uploadFile(this.file)

      if (typeof fileAddress === 'undefined') {
        this.btnLoader = false
        this.disableInputs = false
        return
      }

      let base64: string
      try {
        base64 = await readUploadedFileAsBase64(this.file)
      } catch (e) {
        console.warn(e.message)
      }

      const chunks = createChunks(base64, 15000)
      this.btnLoader = false
      this.showProgress = true

      this.max = chunks.length - 1 //progress bar

      let promises = []
      for (let i = 0; i < chunks.length; i++) {
        promises.push(uploadChunk(fileAddress, chunks[i], i))
        if ((i + 1) % 50 == 0) {
          await Promise.all(promises)
          promises = []
        }
        this.value = i
      }

      await Promise.all(promises)

      //return change and destroy file contract (don't need it anymore)
      returnChange(fileAddress)

      this.showProgress = false
      this.disableInputs = false
      document.getElementById('fileUpload').value = ''
      this.fileAddress = fileAddress
    },
    controlNetwork() {
      if (this.$network !== config.network) {
        this.showAlert = true
        this.alertContent = 'This project is currently working in ' + config.network + '. Switch your EverWallet to this network.'
        this.showInput = false
      } else {
        this.showAlert = false
        this.showInput = true
      }
    },
  },
  components: {
    LoginLogout,
  },
  watch: {
    $network() {
      this.controlNetwork()
    },
  },
  mounted() {
    getNetwork().then((network) => {
      this.$network = network
      this.controlNetwork()
    })
  },
})

const readUploadedFileAsBase64 = (inputFile) => {
  const temporaryFileReader = new FileReader()

  return new Promise((resolve, reject) => {
    temporaryFileReader.onerror = () => {
      temporaryFileReader.abort()
      reject(new DOMException('Problem parsing input file.'))
    }

    temporaryFileReader.onload = () => {
      resolve(temporaryFileReader.result)
    }
    temporaryFileReader.readAsDataURL(inputFile)
  })
}
</script>
