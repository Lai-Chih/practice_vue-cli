import Vue from 'vue'
import App from './App.vue'
import RecordList from './components/RecordList.vue'//全域註冊

Vue.component('RecordList', RecordList)
new Vue({
  el: '#app',
  render: h => h(App)
})
