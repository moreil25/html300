// need a mixin declaration

export default {
    data ()
    const borderOn = {
      return {
        borderOn: true
      }
    },
    methods: {
        getBorder(border) {
          return require(`@/src/${border}`)
        },
      toggleBorder() {
        this.borderOn = !this.borderOn;
      }
    }
  }
