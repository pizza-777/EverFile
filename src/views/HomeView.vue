<template>
  <div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">Upload file</h4>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <input type="file" class="form-control" id="fileUpload" name="fileUpload" @change="loadFile" :disabled="disableInputs" />
                  </div>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-md-12">
                  <b-button variant="outline-secondary" @click="_uploadFile()" :disabled="disableInputs">
                    Upload
                    <b-spinner style="margin-left: 0.3em" v-if="btnLoader" small></b-spinner>
                  </b-button>
                  <span style="margin-left: 0.4em" v-if="btnLoader" class="text-secondary">prepearing ... </span>
                  <span style="margin-left: 0.4em" v-if="showProgress" class="text-secondary">uploading ... </span>
                </div>
              </div>
              <div class="row mt-4" v-if="showProgress">
                <div class="col-md-12">
                  <b-progress variant="secondary" :value="value" :max="max" show-progress animated></b-progress>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-md-12">
                  <div variant="outline-secondary">
                    <a v-if="fileAddress" :href="'./#/file/' + fileAddress" class="link-secondary">Go to file</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { returnChange, uploadFile, uploadChunk, createChunks } from '@/api.ts'

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
      btnLoader: false, //show loader on button
    }
  },
  methods: {
    loadFile(ev) {
      this.file = ev.target.files[0]
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
