<template>
  <div>
    <nav aria-label="breadcrumb" style="background: #eee;">
      <div class="container">
        <ol class="breadcrumb">
          <li class="breadcrumb-item" aria-current="page">
            <a href="/">Home</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ categories.name }}
          </li>
        </ol>
      </div>
    </nav>

    <main role="main" style="margin-top: 32px" class="container">
      <Sidebar />
      <div class="col-12">
        <!-- 分類名稱 -->
        <h1 class="mb-4">{{ categories.name }}</h1>
        <div class="row col-md-9 card mb-3">
          <!-- 子分類名稱、區塊 Loop -->
          <div
            v-for="subcategory in subCategories"
            :key="subcategory.id"
            class="col-md-12 mt-3 mb-3"
          >
            <h2>
              <nuxt-link :to="`/sub-cats/${subcategory.id}`">
                {{ subcategory.name }}
              </nuxt-link>
            </h2>
            <hr />
            <div class="d-flex flex-wrap-reverse">
              <!-- 關鍵字 Loop -->
              <div
                v-for="keyword in subcategory.keywords"
                :key="keyword.id"
                class="p-1 col-2"
              >
                <nuxt-link :to="`/keyword/${keyword.id}`">
                  {{ keyword.title }}
                </nuxt-link>
              </div>
            </div>
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
      categories: [],
      subCategories: []
    }
  },

  async created() {
    const { data: cats } = await this.$axios.get(
      // eslint-disable-next-line prettier/prettier
      `https://api.pbn-content.inboundmarketing.com.tw/api/categories/${this.$route.params.id}/`
    )
    const { data: subcats } = await this.$axios.get(
      // eslint-disable-next-line prettier/prettier
      `https://api.pbn-content.inboundmarketing.com.tw/api/categories/${this.$route.params.id}/sub_categories_and_keywords`
    )
    this.categories = cats.data
    this.subCategories = subcats.data
  }
}
</script>
