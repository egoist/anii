<template>
  <div class="prompt-video" v-show="isOpen">
    <div class="prompt-tabs container">
      <div
        class="prompt-tab"
        :class="{active: isActive('url')}"
        @click="active = 'url'">
        URL
      </div>
      <div
        class="prompt-tab"
        :class="{active: isActive('youtube')}"
        @click="active = 'youtube'">
        YouTube
      </div>
      <div
        class="prompt-tab"
        :class="{active: isActive('vimeo')}"
        @click="active = 'vimeo'">
        Vimeo
      </div>
      <div
        class="prompt-tab"
        :class="{active: isActive('bilibili')}"
        @click="active = 'bilibili'">
        BiliBili
      </div>
    </div>

    <div class="prompt-content container">
      <form @submit.prevent="handleSubmit">
        <input type="text" v-model="src" autofocus="true" />
        <button type="submit">Go</button>
      </form>
      <div class="prompt-tip" v-if="active === 'bilibili'">
        *You can use full URL like <code @click="applyExampleSrc">http://www.bilibili.com/video/av10983593/</code> or ID: <code @click="applyExampleSrc">10983593</code>, <code @click="applyExampleSrc">av10983593</code>
      </div>
      <div class="prompt-tip" v-else-if="active === 'youtube'">
        *You can use full URL like <code @click="applyExampleSrc">https://www.youtube.com/watch?v=3DsmjLTKLdA</code> or ID: <code @click="applyExampleSrc">3DsmjLTKLdA</code>
      </div>
    </div>

  </div>
</template>

<script>
  import event from '../utils/event'

  export default {
    data() {
      return {
        isOpen: false,
        active: 'url',
        src: ''
      }
    },
    mounted() {
      event.$on('togglePromptVideo', () => {
        this.isOpen = !this.isOpen
      })
    },
    methods: {
      close() {
        this.isOpen = false
      },
      isActive(name) {
        return name === this.active
      },
      applyExampleSrc(e) {
        this.src = e.target.textContent
      },
      handleSubmit() {
        switch (this.active) {
          case 'url':
            this.$router.push({
              query: { src: this.src }
            })
            break
          case 'youtube':
          case 'vimeo':
            this.$router.push({
              query: {
                src: this.src,
                type: this.active
              }
            })
            break
          case 'bilibili':
            this.$router.push({
              query: {
                src: this.src,
                type: this.active
              }
            })
            break
        }
        this.close()
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .prompt-video
    padding: 20px 0
    background-color: #f0f0f0

  .prompt-tabs
    display: flex
    .prompt-tab
      color: #999
      border: 2px solid @color
      border-radius: 5px
      margin-right: 5px
      padding: 3px 8px
      font-size: 12px
      cursor: pointer
      &.active
        color: #222
        border-color: @color
        background-color: white

  .prompt-content
    margin-top: 20px

  .prompt-tip
    margin-top: 10px
    color: #999
    font-size: 14px
    code
      background-color: white
      border: 1px solid #666
      padding: 2px 5px
      font-size: 12px
      border-radius: 5px
      cursor: pointer
</style>
