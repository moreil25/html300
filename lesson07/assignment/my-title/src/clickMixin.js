// need a mixin declaration

export const borderOn = {
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
