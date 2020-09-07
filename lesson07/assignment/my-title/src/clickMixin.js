// need a mixin declaration
<script>
const borderOn = {
  data ()
    return {
      borderOn: false
    },
    methods: {
      toggleBorder() {
        this.borderOn = !this.borderOn;
      }
    }
  }

</script>
