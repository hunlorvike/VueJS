###

II. Render

1. render 1 phần tử

- Trong Vue.js, cả v-if và v-show đều được sử dụng để điều khiển việc hiển thị và ẩn các phần tử trong cấu trúc HTML dựa trên một biểu thức điều kiện.
  Tuy nhiên, chúng có sự khác nhau về cách thức hoạt động.

  - v-if: Khi sử dụng v-if, phần tử sẽ được thêm hoặc xóa hoàn toàn khỏi DOM dựa trên giá trị của biểu thức điều kiện.
    Nếu biểu thức là true, phần tử sẽ được hiển thị trong DOM. Ngược lại, nếu biểu thức là false, phần tử sẽ bị xóa khỏi DOM.
    Khi giá trị biểu thức thay đổi, phần tử sẽ được thêm hoặc xóa khỏi DOM tương ứng.

  - v-show: Khi sử dụng v-show, phần tử vẫn tồn tại trong DOM, nhưng thuộc tính CSS display của phần tử sẽ được điều khiển để
    iển thị hoặc ẩn phần tử dựa trên giá trị của biểu thức điều kiện. Nếu biểu thức là true, thuộc tính display của phần tử sẽ
    được đặt là block hoặc giá trị mặc định của phần tử. Ngược lại, nếu biểu thức là false, thuộc tính display sẽ được đặt là none,
    ẩn phần tử đi. Khi giá trị biểu thức thay đổi, thuộc tính display sẽ được điều chỉnh tương ứng.

  - Lựa chọn sử dụng v-if hay v-show phụ thuộc vào tình huống cụ thể và yêu cầu của ứng dụng.
    Thường thì, nếu phần tử thường xuyên được thay đổi trong quá trình thực thi,
    ví dụ: được hiển thị và ẩn nhiều lần, thì v-show có thể là lựa chọn tốt hơn vì phần tử không cần được thêm và xóa khỏi DOM liên tục.
    Tuy nhiên, nếu phần tử ít thay đổi hoặc chỉ xuất hiện trong một số tình huống cụ thể, thì v-if có thể là lựa chọn phù hợp hơn để tối ưu hóa hiệu suất.

  - Hai cách trên đều giúp hiển thị dữ liệu ra màn hình nhưng điểm khác nhau là khi sử dụng v-if, Vue sẽ không render nếu điều kiện sai.
    Còn v-show vẫn sẽ render ra bất kể đúng hay sai và sẽ cho phép hiển thị hay không thông qua thuộc tính display trong CSS .

    ----> khi v-if = false: phần tử sẽ không xuất hiện
    ----> khi v-show = false: phần tử sẽ bị display: none;

2. Render 1 danh sách phần tử

- v-for là một directive trong Vue.js được sử dụng để lặp qua một mảng hoặc một đối tượng và tạo các phần tử tương ứng trong cấu trúc HTML.
  Nó cho phép bạn tạo các danh sách, bảng, hoặc hiển thị các phần tử dựa trên dữ liệu động.

          Ví dụ:

        <div v-for="item in items" :key="item.id">
            {{ item }}
        </div>

          + items là một mảng hoặc một đối tượng trong data của Vue instance.

          + item là biến lặp mà bạn sử dụng để truy cập vào từng phần tử trong mảng hoặc đối tượng.

          + :key="item.id" là một thuộc tính đặc biệt key được sử dụng để xác định mỗi phần tử trong danh sách.
          Điều này giúp Vue quản lý và theo dõi các phần tử khi có sự thay đổi trong danh sách.


          Ví dụ 2:
          <div id="app">

    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item }}
      </li>
    </ul>
  </div>

<script>
var app = new Vue({
  el: "#app",
  data: {
    items: ["Item 1", "Item 2", "Item 3"]
  }
});
</script>
