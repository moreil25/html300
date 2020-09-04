<!-- For the image page, convert the image markup into a separate component in its own file, be sure to import it into the corresponding 'page' component
The image component should have props for at least the image src, alt, & title attributes, use prop validation. -->

<script>
//new Vue({ el: '#custom-wrapper'})
export default {
  name: 'clickableImage',
  //the props I want to receive are from my images array
  //prop validation = object
  //props are one way communication that the parents control the children's value
  props: {
    img: {
      type: String,
      default: 'A Picture'
    },
    src: {
      type: String
    },
    caption: {
      type: String,
      default: 'The description'
    },
    alt: {
      type: String,
      default: 'Detailed image description'
    }
  },
  methods: {
    getPic(pic) {
      return require(`@/images/${pic}`)
      }
    }
//do I want to use this as a template in the component or do i want to use this in the html template to create the v-for loop?
  //same fields as instance, but data is no longer an object, but a function that returns object

// need a mixin declaration
// const borderOn = {
//   return {
//     borderOn: true;
// const borderOn = {
//     return {
//       borderOn: true;
//     }
//   },
//   methods: {
//     toggleBorder() {
//       this.borderOn = !this.borderOn;
//     }
}
//     //custom attributes you can register on a component
//     props: ['img', 'src', 'caption', 'alt'],
//     template: '<div>{{ img. }}</div>'
//     //same fields as instance, but data is no longer an object, but a function that
</script>
//
<template>
  <img class="img-fluid rounded m-2 img-border" :src="getPic(this.src)" :alt="this.alt"></img>
</template>


<style>
  .img-border {
    max-width: auto;
    border: solid 4px black;
  }
</style>

// <!--array of data that you will want to render a component for each one-->
