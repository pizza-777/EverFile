<template>
    <div>             
    <nav class="text-center mt-1">
      <router-link to="/">Home</router-link> 
    </nav> 
     <div class="container mt-5">   
     <div class="text-primary">file address: {{this.$route.params.fileId}}</div>
     <div class="text-danger">{{error}}</div>        
     <b-card class="mt-3">
          <b-card-text class="mt-2"><b>name</b>: {{file.name}}</b-card-text>         
          <hr>
          <b-card-text><b>size</b>: {{file.size}}</b-card-text>
          <hr>         
          <b-card-text><b>type</b>: {{file.type}}</b-card-text> 
          <hr>
          <b-button variant="outline-secondary" @click="_download()">Download</b-button>        
    </b-card>        
    </div>
    </div>
</template>
<script>
import Vue from 'vue';
import {getFileInfo} from '@/api';
import {downloadFile} from '@/api';
import download from 'downloadjs';

export default Vue.extend({
  name: 'FileView',
  data() {
    return {      
      error: '',
      file: false
    };
  },
  methods:{
    async _download(){
      if(!this.file) return;
      const base64 = await downloadFile(this.$route.params.fileId);      
      download(base64, this.file.name, this.file.type);
    }
  },
    mounted(){
        getFileInfo(this.$route.params.fileId).then(file => {                    
            if(typeof file === 'undefined'){
                this.error = 'Not found';
            }else{
                this.file = file;
            }        
        });
    }
});
</script>