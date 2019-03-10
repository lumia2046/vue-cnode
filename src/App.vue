<template>
    <router-view/>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
body, p, h1, h2, h3, h4, ul, li, tbody, thead, tr, td, head, footer, aside, article, span, a, input, select, textarea {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


a,a:hover, a:visited, a:focus {
  color:black;
  text-decoration: none;
  cursor: pointer;
}

ul,ol {
  list-style: none;
}
</style>
