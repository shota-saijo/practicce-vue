<template>
  <div class="home">
    <h1>Todos</h1>
    <router-link :to="{ name: 'new' }">NEW</router-link>
    <table class="u-full-width">
      <thead>
        <tr>
          <th>title</th>
          <th>content</th>
          <th>createdAt</th>
          <th>modifiedAt</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in todos" :key="todo.id">
          <td>{{ todo.title }}</td>
          <td>{{ todo.content }}</td>
          <td>{{ formatDateTime(todo.createdAt) }}</td>
          <td>{{ formatDateTime(todo.modifiedAt) }}</td>
          <td><button @click="() => $router.push({ path: `/update?id=${todo.id}` })">更新</button></td>
          <td><button @click="remove(todo.id)">削除</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'home',
  computed: {
    ...mapGetters({
      todos: 'todos'
    })
  },
  methods: {
    ...mapActions({
      remove: 'remove'
    }),
    formatDateTime (date) {
      const pad = (number) => {
        if (number < 10) {
          return '0' + number
        }
        return number
      }
      return `${date.getUTCFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`
    }
  }
}
</script>
