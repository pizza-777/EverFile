<template>
    <div>       
      <div><LoginLogout/></div>
         <nav class="text-center mt-1">
      <router-link to="/">Home</router-link> 
    </nav> 
         <div class="container mt-5">   

     <div class="text-primary">Post ID: {{this.$route.params.postId}}</div>
     <div class="text-danger">{{error}}</div>
        <b-list-group class="mt-5">        
        <b-list-group-item v-for="post in posts" :key="post.message">
          <div>{{post.message}}</div>
          <br>
          <div class="text-secondary d-flex justify-content-between">
            <div>From: {{post.sender.slice(0,6) + '...'+ post.sender.slice(62)}}</div>          
            <div>              
                {{new Date(post.timestamp * 1000).toLocaleDateString("ru-RU") + '  ' + new Date(post.timestamp * 1000).toLocaleTimeString("en-US")}}              
            </div>
          </div>
        </b-list-group-item>
      </b-list-group>
    </div>
    </div>
</template>
<script>
import Vue from 'vue';
import   {getPost} from '@/api';
import LoginLogout from '@/components/LoginLogout.vue'; 

export default Vue.extend({
  name: 'PostView',
  data() {
    return {
      posts: [],
      error: '',
    };
  },
    mounted(){
        getPost(this.$route.params.postId).then(post => {                    
            if(typeof post === 'undefined'){
                this.error = 'Not found';
            }else{
                this.posts = [post];
            }        
        });
    },
    components: {
        LoginLogout,
    },
});
</script>