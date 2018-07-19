import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
  },
  getters: {
    todos: store => store.todos,
    findById: store => id => store.todos.find(t => t.id === id)
  },
  mutations: {
    create (store, todo) {
      store.todos.push(todo)
    },
    update (store, todo) {
      const target = store.todos.find(t => t.id === todo.id)
      target.title = todo.title
      target.content = todo.content
      target.modifiedAt = new Date()
    },
    remove (store, id) {
      store.todos = store.todos.filter(t => t.id !== id)
    }
  },
  actions: {
    create ({ commit }, todo) {
      commit('create', {
        id: Math.random().toString(36).slice(-8),
        title: todo.title,
        content: todo.content,
        createdAt: new Date(),
        modifiedAt: new Date()
      })
    },
    update ({ commit }, todo) {
      commit('update', todo)
    },
    remove ({ commit }, id) {
      commit('remove', id)
    }
  }
})
