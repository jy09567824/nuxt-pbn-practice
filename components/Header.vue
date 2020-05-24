<template>
  <div>
    <header class="bg-dark">
      <div class="container">
        <nav class="navbar navbar-expand-md navbar-dark">
          <div class="col-3">
            <a class="navbar-brand" href="/">Youcare 美妝保養</a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarsExampleDefault"
              aria-controls="navbarsExampleDefault"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
          <div id="navbarsExampleDefault" class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item mr-3 ml-3">
                <nuxt-link class="nav-link" to="/newcats">新增分類</nuxt-link>
              </li>
              <li class="nav-item mr-3 ml-3">
                <nuxt-link class="nav-link" to="/newword">新增字詞</nuxt-link>
              </li>
              <li class="nav-item mr-3 ml-3">
                <nuxt-link class="nav-link" to="/link">新增連結</nuxt-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>
<script>
export default {}
</script>
