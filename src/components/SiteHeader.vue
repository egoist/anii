<template>
  <header class="header container">
    <h1 class="site-name">
      <router-link to="/">ANII</router-link>
      <span
        v-show="loading"
        class="loading beam">
      </span>
    </h1>
    <input
      type="file"
      hidden="true"
      ref="file"
      accept="video/webm,video/ogg,video/mp4"
      @change="handleSelectedFile">
    <div class="actions">
      <button @click="openFile" class="button">Open File</button>
      <button @click="openURL" class="button button-shadow">Open URL</button>
    </div>
  </header>
</template>

<script>
  import event from '../utils/event'

  const URL = window.URL || window.webkitURL

  export default {
    computed: {
      loading() {
        return event.loading
      }
    },
    mounted() {
      event.$on('openFile', this.openFile)
    },
    methods: {
      openFile() {
        this.$refs.file.click()
      },
      openURL() {
        event.$emit('togglePromptVideo')
      },
      handleSelectedFile(e) {
        const { value } = e.target
        const file = this.$refs.file.files[0]
        if (file && value) {
          // Reset input[type=file]
          // So that it will always trigger even if the file doesn't change
          e.target.value = ''
          const src = URL.createObjectURL(file)
          this.$router.push({ query: { src } })
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .header
    height: 60px
    display: flex
    align-items: center
    justify-content: space-between

  .site-name
    margin: 0
    font-weight: 600
    a
      color: #222
      text-decoration: none
</style>
