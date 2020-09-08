//mixin declaration

export const borderOn = {
  created(){
    console.log('MIXIN')
  },
//borderOn is false until user actives it through the method
  data () {
    return {
      borderOn: false
    }
  },
//toggle function is passed to @click in clickableImage component and fires when user clicks image
    methods: {
      toggle: function() {
        this.borderOn = !this.borderOn;
      }
    }
  }
