<template>
  <div class="cinema" :class="{nobody: !init}">
    <div class="player">
      <button
        v-if="!init"
        class="button button-reverse button-large button-open"
        @click="triggerOpenFile">
        Open File
      </button>
      <video id="js-player" class="video" ref="video"></video>
    </div>
  </div>
</template>

<script>
  import plyr from 'plyr'

  import event from '../utils/event'
  import { parseVideoURL } from '../utils/handle-url'

  export default {
    name: 'player',
    data() {
      return {
        init: false
      }
    },
    mounted() {
      event.$on('switchVideo', video => this.switchVideo(video))
    },
    watch: {
      '$route.query': {
        deep: true,
        handler({ src, type }) {
          if (src) {
            const video = { src }
            if (type) {
              video.type = type
            }
            this.switchVideo(video)
          } else {
            this.player.destroy()
            this.init = false
          }
        }
      }
    },
    methods: {
      initPlayer() {
        if (this.init) return

        this.init = true
        this.player = plyr.setup(document.getElementById('js-player'), {
          // debug: true
          // autoplay: true
        })[0]
        this.player.on('ready', e => {
          this.player.play()
        })
      },
      switchVideo(video) {
        this.initPlayer()
        this.player.source({
          type: 'video',
          sources: [parseVideoURL(video)]
        })
        this.$router.push({ query: video })
      },
      triggerOpenFile() {
        event.$emit('openFile')
      }
    }
  }
</script>

<style src="plyr/dist/plyr.css"></style>

<style lang="stylus" scoped>
  .cinema
    background-color: #000
    min-height: 400px

  .player
    max-width: 900px
    margin: 0 auto
    height: 100%
    position: relative


</style>
