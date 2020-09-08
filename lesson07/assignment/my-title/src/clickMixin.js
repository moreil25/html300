// need a mixin declaration

export const borderOn = {
  created(){
    console.log('MIXIN')
  },
  data () {
    return {
      borderOn: false
    }
  },
    methods: {
      toggle: function() {
        this.borderOn = !this.borderOn;
      }
    }
  }

  // .img-border {
  //   max-width: auto;
  //   border: solid 4px black;
  // }
