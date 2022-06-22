<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div id="hook-arguments-example" v-demo:foo.a.b="message">111111111111</div>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  name: "login",
  data(){
    return {
      message: 'hello!'
    }
  },
  mounted() {


  },
  methods:{

  }
}
</script>