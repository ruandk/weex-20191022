<template>
  <div>
    <text class @click="$router.push('/me')">home</text>
    <router-view />
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {

  }
}
</script>
