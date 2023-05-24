###
I. What is Vue? (Vue là gì?)
- Vue là một framework của Javascript dùng để xây dựng giao diện người dùng. Nó được xây dựng dựa trên HTML, CSS, Javascript

~ Ví Dụ:
- vue: 
import { createApp } from 'vue'

createApp({
  data() {
    return {
      count: 0
    }
  }
}).mount('#app')

- html:
<div id="app">
  <button @click="count++">
    Count is: {{ count }}
  </button>
</div>

- result:
Count is: 0