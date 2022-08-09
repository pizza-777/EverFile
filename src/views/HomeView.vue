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
                    <input type="file" class="form-control" id="fileUpload" name="fileUpload" @change = "loadFile">
                    </div>
                </div>                
                </div>
                <div class="row mt-4">
                <div class="col-md-12">
                 <b-button variant="outline-secondary" @click="_uploadFile()">Upload</b-button>
                </div>                
                </div>
                <div class="row mt-4" v-if="showProgress">
                <div class="col-md-12">
                <b-progress :value="value" :max="max" show-progress animated></b-progress>
                </div>                
                </div>
                <div class="row mt-4">
                <div class="col-md-12">
                 <div variant="outline-secondary">
                    <a v-if="fileAddress" :href="'./#/file/' + fileAddress">Go to file</a>
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
import Vue from 'vue';
import { uploadFile, uploadChunk, createChunks } from '@/api.ts';

export default Vue.extend({
  name: 'HomeView',
  data() {
    return {      
          fileAddress: false,
          file: false,
          max: 100,//progress bar max value
          value: 0,//progress bar value    
          showProgress: false,//show progress bar                
        }
    },
  methods: {
    loadFile(ev) {     
      this.file = ev.target.files[0];            
    },
    async _uploadFile() {      
      if(this.file == false) {
        alert('Please select a file');
        return;
      }                
    
      const fileAddress = await uploadFile(this.file);

      if(typeof fileAddress === 'undefined') return
      let base64:string;
      try{
        base64 = await readUploadedFileAsBase64(this.file)  
      }catch(e){
        console.warn(e.message)
      }      
     
        const chunks = createChunks(base64, 1024)
        if(chunks.length > 1){
          this.showProgress = true;
        }
        this.max = chunks.length-1;//progress bar

        for(let i = 0; i < chunks.length; i++) {        
          await uploadChunk(fileAddress, chunks[i], i);         
          this.value = i;
        }

        this.showProgress = false;
       
      this.fileAddress = fileAddress;
    }
  }
});

const readUploadedFileAsBase64 = (inputFile) => {
  console.log(inputFile)
  const temporaryFileReader = new FileReader();

  return new Promise((resolve, reject) => {
    temporaryFileReader.onerror = () => {
      temporaryFileReader.abort();
      reject(new DOMException("Problem parsing input file."));
    };

    temporaryFileReader.onload = () => {
      resolve(temporaryFileReader.result);
    };
    temporaryFileReader.readAsDataURL(inputFile);
  });
};
</script>
