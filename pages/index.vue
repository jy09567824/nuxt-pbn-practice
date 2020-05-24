<template>
  <div>
    <main role="main" style="margin-top: 32px">
      <div class="container">
        <div class="row">
          <!-- v-for Loop 從 keywords 裡照順序執行 index索引值，執行後的結果自定義為 keyword -->
          <!-- :key 能讓鎖定陣列的值，不讓資料改變而影響歸屬關係，常用於id(索引值)上 -->
          <!-- 主分類顯示欄位 -->
          <div v-for="(category, id) in categories" :key="id" class="col-md-12">
            <h2 class="mb-3">
              <nuxt-link :to="`/cats/${category.id}`">
                {{ category.name }}
              </nuxt-link>
            </h2>
            <!-- 子分類顯示欄位 -->
            <div class="row">
              <div
                v-for="sub_category in category.sub_categories"
                :key="sub_category.id"
                class="col-md-3"
              >
                <div class="card mb-2">
                  <div class="card-header">
                    <h3>
                      <nuxt-link :to="`sub-cats/${sub_category.id}`">
                        {{ sub_category.name }}
                      </nuxt-link>
                    </h3>
                  </div>
                  <!-- 關鍵字顯示欄位 -->
                  <div class="card-body">
                    <p
                      v-for="(keyword, index) in sub_category.keywords.slice(
                        0,
                        5
                      )"
                      :key="index"
                    >
                      <nuxt-link :to="`/keyword/${keyword.id}`">
                        {{ keyword.title }}
                      </nuxt-link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { awaitExpression } from '@babel/types'
export default {
  head() {
    return {
      title: 'Youcare 美妝',
      titleTemplate: `%s - 健康醫療美容資訊站`
    }
  },
  data() {
    return {
      categories: []
    }
  },
  async created() {
    const { data: cats } = await this.$axios.get(
      'https://api.pbn-content.inboundmarketing.com.tw/api/categories/all_sub_categories_and_keywords'
    )
    this.categories = cats.data
  }
}
</script>
