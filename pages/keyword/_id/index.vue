<template>
  <div>
    <nav aria-label="breadcrumb" style="background: #eee;">
      <div class="container">
        <ol class="breadcrumb">
          <li class="breadcrumb-item" aria-current="page">
            <a href="/">Home</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ keywords.title }}
          </li>
        </ol>
      </div>
    </nav>

    <main role="main" style="margin-top: 32px" class="container">
      <Sidebar />
      <div class="col-9">
        <h1 class="mb-4">{{ contents.title }}</h1>
        <div v-for="result in content" :key="result.title">
          <h2>{{ result.title }}</h2>
          <p>{{ result.description }}</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Sidebar from '~/components/Sidebar.vue'

export default {
  components: {
    Sidebar
  },
  data() {
    return {
      contents: [],
      content: [],
      keywords: ''
    }
  },
  async created() {
    const { data: keywords } = await this.$axios.get(
      // eslint-disable-next-line prettier/prettier
      `https://api.pbn-content.inboundmarketing.com.tw/api/keywords/${this.$route.params.id}`
    )
    this.keywords = keywords.data

    const { data: contents } = await this.$axios.get(
      // eslint-disable-next-line prettier/prettier
      `https://api.pbn-content.inboundmarketing.com.tw/api/keywords/${this.$route.params.id}/contents/latest`
    )
    this.contents = contents.data
    this.content = contents.data.content
  }
}
</script>
