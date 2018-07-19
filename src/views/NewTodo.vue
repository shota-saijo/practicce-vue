<template>
  <div class="new">
    <h1>New</h1>
    <div class="row">
      <div class="six columns">
        <input class="u-full-width" type="text" v-model="title" placeholder="タイトル">
      </div>
    </div>
    <div class="row">
      <div class="six columns">
        <textarea class="u-full-width" v-model="content" placeholder="内容を入力してください"></textarea>
      </div>
    </div>
    <button class="button-primary" type="button" @click="save">登録</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'new',
  data: () => ({
    title: '',
    content: ''
  }),
  methods: {
    ...mapActions({
      create: 'create'
    }),
    save () {
      this.create({
        title: this.title,
        content: this.content
      })
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
