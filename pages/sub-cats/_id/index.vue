<template>
  <div>
    <nav aria-label="breadcrumb" style="background: #eee;">
      <div class="container">
        <ol class="breadcrumb">
          <li class="breadcrumb-item" aria-current="page">
            <a href="/">Home</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ subCategories.name }}
          </li>
        </ol>
      </div>
    </nav>

    <main role="main" style="margin-top: 32px" class="container">
      <Sidebar />
      <div class="col-9">
        <h1 class="mb-4">{{ subCategories.name }}</h1>
        <div class="row">
          <!-- 關鍵字 Loop -->
          <div
            v-for="(keyword, index) in keywords"
            :key="index"
            class="col-md-12"
          >
            <h2 class="mb-3">
              <nuxt-link :to="`/keyword/${keyword.id}`">{{
                keyword.title
              }}</nuxt-link>
            </h2>
            <div></div>
            <hr />
          </div>
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
      keywords: [],
      subCategories: []
    }
  },
  async created() {
    const { data: kws } = await this.$axios.get(
      // eslint-disable-next-line prettier/prettier
      `https://api.pbn-content.inboundmarketing.com.tw/api/sub_categories/${this.$route.params.id}/keywords`
    )
    const { data: subcats } = await this.$axios.get(
      // eslint-disable-next-line prettier/prettier
      `https://api.pbn-content.inboundmarketing.com.tw/api/sub_categories/${this.$route.params.id}/`
    )
    this.keywords = kws.data
    this.subCategories = subcats.data
  }
}
</script>
