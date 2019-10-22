<template>
  <div class="wrapper">
    <image :src="logo" class="logo" />
    <router-view />
  </div>
</template>

<script>
const modal = weex.requireModule('modal')

export default {
  name: 'App',
  data () {
    return {
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png'
    }
  },
  methods: {},
  created () {
    console.log(this.$router)
    console.log(this.$route)
    modal.toast({
      message: this.$router.mode
    })
  }
}
</script>

<style scoped>
.wrapper {
  justify-content: center;
  align-items: center;
}
.logo {
  width: 424px;
  height: 200px;
}
.greeting {
  text-align: center;
  margin-top: 70px;
  font-size: 50px;
  color: #41b883;
}
.message {
  margin: 30px;
  font-size: 32px;
  color: #727272;
}
</style>
