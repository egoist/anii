<template>
  <div class="page">
    <site-header />
    <prompt-video />
    <player />
    <footer class="footer container">
      <strong>Under Development: <a href="https://github.com/egoist/anii">ANII</a> v{{ version }}</strong>
    </footer>
  </div>
</template>

<script>
  import SiteHeader from '../components/SiteHeader.vue'
  import Player from '../components/Player.vue'
  import PromptVideo from '../components/PromptVideo.vue'

  import event from '../utils/event'

  export default {
    name: 'app',
    data() {
      return {
        version: __VERSION__
      }
    },
    components: {
      SiteHeader,
      Player,
      PromptVideo
    },
    mounted() {
      const { src, type } = this.$route.query
      if (src) {
        event.$emit('switchVideo', { src, type })
      }
    }
  }
</script>

<style src="text-spinners/spinners.css"></style>

<style lang="stylus" scoped>
  .footer
    padding: 30px 0
    a
      color: #222
</style>

