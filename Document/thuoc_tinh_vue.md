###

I. Vòng đời của một Instance

- Vòng đời của một Instance cơ bản gồm 4 giai đoạn chính

* Khởi tạo (Creating)
* Gắn kết DOM (mounting)
* Cập nhật DOM khi có dữ liệu thay đổi (updating)
* Hủy instance (destroying)

II. Cú pháp template

- Để render dữ liệu ra màn hình
  {{data}}

III. Methods

- Ví dụ
  var vm = new Vue({
  el: '#demo',
  data: {
  message: "Đây là ví dụ khởi tạo một đối tượng trong Vue",
  number: 0
  },
  methods: {
  updateNumber (newNumber) {
  this.number = newNumber
  }
  }
  })

IV. Thuộc tính computed và watchers, so sánh với methods

- Ví dụ computed
  var vm = new Vue({
  el: '#demo',
  data: {
  message: "Đây là ví dụ khởi tạo một đối tượng trong Vue",
  number: 0
  },
  methods: {
  x2Number () {
  return this.number = this.number _ 2
  }
  }
  computed: {
  x2Number () {
  return this.number = this.number _ 2
  }
  }
  })
  Trong Vue.js, computed là một thuộc tính đặc biệt được sử dụng để định nghĩa các thuộc tính tính toán (computed properties) trong một thành phần Vue.

- Ví dụ watchers
  watch: {
  toDos: {
  deep: true,
  handler (newValue) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newValue))
  } //hàm này chỉ là lấy dữ liệu mới nhất khi thuộc tính toDos có thay đổi để cập nhập lại vào localStorage
  }
  }
  Watchers thực hiện công việc như một người theo dõi. Ở đây mình muốn giám sát cả đối tượng khi bất kì thành phần nào thay đổi nên mình khai báo thêm thuộc tính deep: true.

V. Tổng kết.
Cả methods, computed properties, watchers đều có thể khai báo function bên trong nhưng tùy vào mục đích sử dụng cụ thể mà chúng ta sẽ áp dụng chúng một cách tối ưu nhất.
