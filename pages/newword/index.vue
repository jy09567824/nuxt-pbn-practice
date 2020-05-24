<template>
  <div class="container col-md-6" style="margin-top:32px">
    <h1 class="mb-4">新增字詞</h1>
    <div class="form-group">
      <label>新增關鍵字 New Keyword</label>
      <div class="mb-2">
        <!-- 顯示分類，選擇後會影響到子分類的顯示項目 -->
        <p><strong>一、選擇分類</strong></p>
        <select v-model="selectedCategory" class="custom-select">
          <option
            v-for="category in categories"
            :key="category.id"
            :value="category"
          >
            {{ category.name }}
          </option>
        </select>
        <!-- <p>selectedCategory: {{ selectedCategory }}</p> -->
      </div>
      <!-- 根據分類的選擇顯示當前子分類，並在子分類資料下新增關鍵字 -->
      <div class="mb-2">
        <p><strong>二、選擇子分類</strong></p>
        <select v-model="selectedSubCategory" class="custom-select">
          <option
            v-for="subcategory in subCategories"
            :key="subcategory.id"
            :value="subcategory"
          >
            {{ subcategory.name }}
          </option>
        </select>
      </div>
      <!-- 輸入關鍵字，關鍵字的資料會逐筆新增至對應的子分類下 -->
      <div class="mb-2">
        <p>
          <strong>
            三、輸入欲新增之關鍵字（可使用逗號或空白分隔）
          </strong>
        </p>
        <textarea
          v-model="keywordList"
          type="text"
          class="form-control"
          placeholder="輸入關鍵字(逗號或空格分隔)"
        />
      </div>
      <button class="btn btn-primary " @click="addKeywordListBatch">
        新增
      </button>
    </div>
  </div>
</template>
<script>
import { Promise } from 'q'
export default {
  data() {
    return {
      categories: [],
      subCategories: [],
      selectedCategory: {},
      selectedSubCategory: {},
      keywordList: []
    }
  },
  watch: {
    async selectedCategory(value) {
      const { data } = await this.$axios.get(
        // eslint-disable-next-line prettier/prettier
        `https://api.pbn-content.inboundmarketing.com.tw/api/categories/${value.id}/sub_categories`
      )

      this.subCategories = data.data
    }
  },
  async created() {
    const { data: cats } = await this.$axios.get(
      // eslint-disable-next-line prettier/prettier
      'https://api.pbn-content.inboundmarketing.com.tw/api/categories/all_sub_categories_and_keywords/'
    )
    this.categories = cats.data
  },

  methods: {
    // 新增單筆關鍵字
    // async addKeywordList() {
    //   // eslint-disable-next-line no-unused-vars
    //   const { data } = await this.$axios.post(
    //     // eslint-disable-next-line prettier/prettier
    //     'https://api.pbn-content.inboundmarketing.com.tw/api/keywords/',
    //     {
    //       title: this.keywordList,
    //       sub_category_id: this.selectedSubCategory.id
    //     }
    //   )

    //   alert('關鍵字新增成功')
    // },
    // 新增關鍵字清單
    async addKeywordListBatch() {
      const lines = this.keywordList.split(' ')
      // eslint-disable-next-line prefer-const
      let output = []
      for (let i = 0; i < lines.length; i++) {
        // only push this line if it contains a non whitespace character.
        if (/\S/.test(lines[i])) {
          output.push(lines[i].trim())
        }
      }

      // eslint-disable-next-line no-console
      console.log(output)
      function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
      }

      for (const input of output) {
        // eslint-disable-next-line no-unused-vars
        const { data } = await this.$axios.post(
          // eslint-disable-next-line prettier/prettier
        'https://api.pbn-content.inboundmarketing.com.tw/api/keywords/',
          {
            title: input,
            sub_category_id: this.selectedSubCategory.id
          }
        )
        await sleep(1000)
      }
      alert('關鍵字新增成功')
      this.keywordList = ''
    }
  }
}
</script>
