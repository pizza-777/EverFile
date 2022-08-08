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
            </div>
            </div>
        </div>
        </div>
    </div>
</div>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HomeView',
  data() {
    return {      
          image: false
        }
    },
  methods: {
    loadFile(ev) {     
      const file = ev.target.files[0];  
      console.log('filesize', file.size)    
      const reader = new FileReader();
      reader.onloadend = function() {
          this.image = reader.result;  
          document.getElementById("img").src=this.image;
        }    
          reader.readAsDataURL(file);
      }
  }
});

</script>
