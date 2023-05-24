var app = new Vue({
  el: "#app",
  data: {
    title: "",
    desc: "",
    currentTime: null,
    listNote: [],
    isShowPopup: false,
    isShowMenu: false,
    popupTitle: "Add a new Note",
    buttonText: "Add Note",
    selectedNoteId: null, // Add this line
    isEditing: false, // Add this line
  },
  mounted() {
    this.getCurrentTime();
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.handleClickOutside);
  },
  methods: {
    showMenu(note) {
      note.isShowMenu = !note.isShowMenu;
      // Các xử lý khác khi hiển thị menu của `note`
    },
    closeMenu() {
      this.isShowMenu = false;
    },
    showPopup() {
      this.isShowPopup = true;
    },
    closePopup() {
      this.isShowPopup = false;
    },
    addNote() {
      var id = this.listNote.length + 1;
      this.listNote.push({
        id: id,
        title: this.title,
        desc: this.desc,
        currentTime: this.currentTime,
        isShowMenu: this.isShowMenu,
      });
      this.title = "";
      this.desc = "";
      this.popupTitle = "Add a new Note";
      this.buttonText = "Add Note";
      this.closePopup();
    },
    getCurrentTime() {
      this.currentTime = new Date().toLocaleDateString();
    },
    handleClickOutside(event) {
      document.querySelector(".settings");
    },
    editNote(note) {
      this.showMenu(note);
      this.isShowPopup = true;
      this.popupTitle = "Update a Note";
      this.buttonText = "Update Note";
      this.title = note.title;
      this.desc = note.desc;
      this.selectedNoteId = note.id; // Add this line
      this.isEditing = true;
    },
    updateNote() {
      this.isEditing = false;
      const index = this.listNote.findIndex(
        (note) => note.id === this.selectedNoteId
      );

      if (index !== -1) {
        this.listNote[index].title = this.title;
        this.listNote[index].desc = this.desc;
      }
      this.title = "";
      this.desc = "";
      this.popupTitle = "Add a new Note";
      this.buttonText = "Add Note";
      this.closePopup();
    },
    deleteNote(note) {
      var deleteConfirmation = window.confirm("Bạn có muốn xóa note không?");
      console.log(deleteConfirmation);
      if (deleteConfirmation) {
        const index = this.listNote.findIndex((item) => item.id === note.id);
        if (index !== -1) {
          this.listNote.splice(index, 1); // Update this line
        }
      }
    },
  },
});
