import Vue from 'vue'

export default new Vue({
  data: {
    loading: false
  },
  created() {
    this.$on('isLoading', state => {
      this.loading = state
    })
  }
})
