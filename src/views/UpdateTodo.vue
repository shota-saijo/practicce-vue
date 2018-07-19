<template>
  <div class="new">
    <h1>Update</h1>
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
    <button class="button-primary" type="button" @click="save">更新</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'new',
  data: () => ({
    title: '',
    content: ''
  }),
  computed: {
    ...mapGetters({
      findById: 'findById'
    })
  },
  methods: {
    ...mapActions({
      update: 'update'
    }),
    save () {
      const todo = this.findById(this.$route.query.id)
      this.update({
        id: todo.id,
        title: this.title,
        content: this.content,
        createdAt: todo.createdAt,
        modifiedAt: todo.modifiedAt
      })
      this.$router.push({ name: 'home' })
    }
  },
  created () {
    const todo = this.findById(this.$route.query.id)
    this.title = todo.title
    this.content = todo.content
  }
}
</script>
