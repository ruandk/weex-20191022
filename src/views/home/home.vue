<template>
  <div>
    <text class @click="jump">home</text>
  </div>
</template>

<script>
const navigator = weex.requireModule('navigator')

export default {
  data () {
    return {}
  },
  methods: {
    jump () {
      console.log(weex)
      console.log(weex.config.bundleUrl)
      let { platform } = weex.config.env
      let url
      if (platform.toLowerCase() === 'web') {
        url = weex.config.bundleUrl.replace(/[^/]+(?=.html)/, 'about')
      } else {
        url = weex.config.bundleUrl.replace(/[^/]+(?=.js)/, 'about')
      }
      navigator.push({
        url,
        animated: 'true'
      })
    }
  }
}
</script>
