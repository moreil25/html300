// need a mixin declaration

 // default {
export const borderOn = {
  data () {
    return {
      borderOn: false
      }

    },
    methods: {
      toggleBorderOn() {
        this.borderOn = !this.borderOn;
      }
    }
}
// export default borderOn
