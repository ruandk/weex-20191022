<template>
  <div>
    <text @click="back">about</text>
  </div>
</template>

<script>
const navigator = weex.requireModule('navigator')

export default {
  data () {
    return {}
  },
  methods: {
    back () {
      navigator.pop({
        animated: 'true'
      })
    }
  }
}
</script>
