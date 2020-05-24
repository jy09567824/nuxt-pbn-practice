<template>
  <div class="container col-md-6" style="margin-top:32px">
    <h1 class="mb-4">新增分類</h1>
    <div class="form-group">
      <label>新增分類 New Category</label>
      <input
        v-model="categoryName"
        type="text"
        class="form-control"
        placeholder="輸入分類名稱"
      />
      <button class="btn btn-primary mt-2" @click="AddCategory">新增</button>
    </div>
    <hr />
    <div class="form-group">
      <label>新增子分類 New SubCategory</label>
      <div class="mb-2">
        <!-- 抓資料庫分類中 Name，並回傳 id 值給新增的子分類 -->
        <select v-model="selectedCategory" class="custom-select">
          <option
            v-for="category in categories"
            :key="category.id"
            :value="category"
          >
            {{ category.name }}
          </option>
        </select>
      </div>
      <!-- 選擇子分類，並隸屬於選擇的分類下 -->
      <div class="mb-2">
        <input
          v-model="subCategoryName"
          type="text"
          class="form-control"
          placeholder="輸入子分類名稱"
        />
      </div>
      <button class="btn btn-primary " @click="AddSubCategory">新增</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      categories: [],
      categoryName: '',
      selectedCategory: {},
      subCategoryName: ''
    }
  },
  async created() {
    const { data: cats } = await this.$axios.get(
      'https://api.pbn-content.inboundmarketing.com.tw/api/categories'
    )
    this.categories = cats.data
  },

  methods: {
    async AddCategory() {
      // eslint-disable-next-line no-unused-vars
      const { data } = await this.$axios.post(
        'https://api.pbn-content.inboundmarketing.com.tw/api/categories',
        {
          name: this.categoryName
        }
      )
      alert('分類新增成功')
    },
    async AddSubCategory() {
      // eslint-disable-next-line no-unused-vars
      const { data } = await this.$axios.post(
        'https://api.pbn-content.inboundmarketing.com.tw/api/sub_categories',
        {
          name: this.subCategoryName,
          category_id: this.selectedCategory.id
        }
      )
      alert('子分類新增成功')
    }
  }
}
</script>
