<template>
  <div class="container col-md-6" style="margin-top:32px">
    <h1>Add Backlink</h1>
    <div class="form-group">
      <label for="formGroupExampleInput">URL</label>
      <input
        v-model="burl"
        type="text"
        class="form-control"
        placeholder="輸入網址"
      />
    </div>
    <div class="form-group">
      <label for="formGroupExampleInput2">Anchor Text</label>
      <input
        v-model="bname"
        type="text"
        class="form-control"
        placeholder="輸入關鍵字"
      />
    </div>
    <div class="form-group">
      <label for="exampleFormControlTextarea1">Article</label>
      <input
        v-model="aid"
        type="text"
        class="form-control"
        placeholder="輸入文章id(逗號分隔)"
      />
    </div>
    <div class="mb-2">
      <button class="btn btn-primary" @click="AddLink">新增連結</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      burl: '',
      bname: '',
      aid: ''
    }
  },
  methods: {
    AddLink() {
      // 抓取 burl, bname, aid 資料近資料庫
      // 從指定的 aid 文章中置入連結
      this.msg = '新增成功'
      alert('提交成功')
    }
  }
}
</script>
