<template>
  <div>
    <nav class="text-right mt-2" style="text-align: right">
      <span
        @click="_loginLogout()"
        class="btn-link text-secondary"
        style="cursor: pointer; padding-right: 2em"
        >{{ ls }}</span
      >
    </nav>
  </div>
</template>

<script>
import Vue from "vue";
import { authState, login, logout } from "@/api";

export default Vue.extend({
  name: "LoginLogout",
  props: ['authProp'],
  data() {
    return {
      ls: null,
    };
  },
  methods: {
    //needed for monitoring the state of the user from other components
    async authorization() {
       const auth = await authState();
       this.ls = auth === false ? "Connect" : `${auth.slice(0, 6)}...${auth.slice(62)} ⎆`;      
    },
    async _loginLogout() {
      if ((await authState()) === false) {
        await login();
        await this.authorization();
      } else {
        logout().then(() => {
          this.ls = "Connect";
        });
      }
    },
  },
  async created() {
    await this.authorization()
  },
  watch: {
    authProp: function (){
      this.authorization();
    }
  }
});
</script>