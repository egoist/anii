<template>
  <div id="app">
    <router-view />
  </div>
</template>

<!-- CSS libraries -->
<style src="normalize.css/normalize.css"></style>

<style lang="stylus">
  body
    font: 14px/1.4 -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif

  .container
    max-width: 1100px
    margin: 0 auto
    padding: 0 20px

  .button
    border: 2px solid #222
    padding: 6px 12px
    border-radius: 5px
    cursor: pointer
    background-color: transparent
    font-weight: 600

  .button:hover
    background-color: #f9f9f9

  .button-shadow
    background-color: #83ffcd
    box-shadow: 2px 2px 0 #222
    &:hover
      box-shadow: 4px 4px 0 #222
      background-color: @background-color

  .button-reverse
    color: #ccc
    border-color: @color
    &:hover
      background-color: #404040

  .button-large
    padding: 10px 20px
</style>

