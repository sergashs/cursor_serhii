const App = {
  data() {
    return {
      titleApp: "My Gradient",
      inputValue1: "",
      inputValue2: "",
      gradients: [
        {
          color1: "red",
          color2: "blue",
        },
        { color1: "brown", color2: "yellow" },
      ],
    };
  },
  methods: {
    inputChangeHandler(event) {
      this.inputValue1 = event.target.value;
      console.log(this.inputValue1);
    },

    inputChangeHandler2(event) {
      this.inputValue2 = event.target.value;
      console.log(this.inputValue2);
    },

    addNewGradient() {
      if (this.inputValue1 !== "" && this.inputValue2 !== "") {
        this.gradients.push({
          color1: this.inputValue1,
          color2: this.inputValue2,
        });
        this.inputValue1 = "";
        this.inputValue2 = "";
      } else {
        alert("input cannot be empty");
      }
    },

    removeGradient(index) {
      this.gradients.splice(index, 1);
    },
  },
};

Vue.createApp(App).mount("#app");
