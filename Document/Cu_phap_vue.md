###

I. Binding

1. Interpolation Binding (Binding nội suy)

- Bạn có thể sử dụng cặp dấu `{{ }}` để ràng buộc một biểu thức Vue
  vào nội dung của phần tử HTML. Khi giá trị của biểu thức Vue thay đổi, nội dung của phần tử HTML sẽ cập nhật tương ứng.

  - Ví dụ:
    <template>
    <div>
    <p>{{ message }}</p>
    </div>
    </template>

      <script>
      export default {
          data() {
              return {
                  message: 'Hello, Vue!'
              };
          }
      };
      </script>

2.  Attribute Binding (Binding thuộc tính)

    - Bạn có thể sử dụng cặp dấu : hoặc v-bind để ràng buộc giá trị của một thuộc tính HTML với một biểu thức Vue. Điều này cho phép bạn động cập nhật các thuộc tính HTML như src, href, class,... Ví dụ:

    - Để ràng buộc dữ liệu Vue vào một thuộc tính của một phần tử HTML, bạn có thể sử dụng cặp dấu v-bind: hoặc viết tắt là : trước tên thuộc tính. Cú pháp chung của Attribute Binding là v-bind:attributeName="expression".

    * Ví dụ: :src; v-bind:src; :href; v-bind:href;.....

    * Ví dụ:
    <template>
    <div>
        <img v-bind:src="imageURL">
        <a :href="linkURL">Link</a>
    </div>
    </template>

    <script>
    export default {
    data() {
        return {
        imageURL: 'https://example.com/image.jpg',
        linkURL: 'https://example.com'
        };
    }
    };
    </script>

3.  Two-way Binding (Binding hai chiều)

    - Bạn có thể sử dụng v-model để tạo một binding hai chiều giữa một trường nhập liệu (input) và một biến Vue. Khi người dùng thay đổi giá trị của trường nhập liệu, biến Vue cũng được cập nhật và ngược lại. - Ví dụ:
    <template>
    <div>
        <input v-model="message">
        <p>{{ message }}</p>
    </div>
    </template>

    <script>
    export default {
    data() {
        return {
        message: 'Hello, Vue!'
        };
    }
    };
    </script>
