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
        }
    },
  methods: {
    loadFile(ev) {     
      this.file = ev.target.files[0];            
    },
    async _uploadFile() {      
      if(this.file == false) return;                
    
      const fileAddress = await uploadFile(this.file);

      const reader = new FileReader();
    
      reader.onloadend = function() {
        const base64 = reader.result;       
        const chunks = createChunks(base64, 100)

        for(let i = 0; i < chunks.length; i++) {
          uploadChunk(fileAddress, chunks[i], i);         
        }
        // console.log('chunks', chunks)
        // console.log('file', file)
        // console.log('fileAddress', fileAddress)

      }    

      reader.onerror = function() {
        console.log(reader.error);
      };
    
      reader.readAsDataURL(this.file);    
    
      this.fileAddress = fileAddress;
    }
  }
});

</script>
