// need a mixin declaration

const borderOn = {
  data ()
    return {
      borderOn: true
    }
  },
  methods: {
    toggleBorder() {
      this.borderOn = !this.borderOn;
    }
  }
