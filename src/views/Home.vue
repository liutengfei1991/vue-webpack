<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { main } from "@/api/bm"
export default {
  name: "Home",
  components: {
    HelloWorld
  },
  mounted() {
      this._FetchMain()
  },
  methods: {
      async _FetchMain() {
          let params = {
            userId: 517041,
            organizationId: 1000033
          }
          const res = await main(params)
          console.log(res);
      }
  }
};
</script>
