<!-- For the image page, convert the image markup into a separate component in its own file, be sure to import it into the corresponding 'page' component
The image component should have props for at least the image src, alt, & title attributes, use prop validation. -->

<script>
//importing the mixin from its file
import { borderOn } from '../clickMixin.js';

export default {
  name: 'clickableImage',
  //the props I want to receive are from my images array. prop validation = object. props are one-way communication that the parents control the children's value. props are declared on a component, which you then use in the <template> to result in the HTML output you expect
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
  mixins: [borderOn],
  methods: {
    getPic(pic) {
      return require(`@/images/${pic}`)
    }
  }
}
</script>

<!-- this 'collection' of elements is grouped together to be accessed by one element, using the same img element and method from lesson07, to access props -->
<!--the props values above match the binds in the HTML -->
<!-- used Bootstrap border class and v-bind to apply it -->
<template>
  <img class="img-fluid rounded m-2 border-dark"
  :class="{ border : borderOn }"
  :src="getPic(this.src)"
  :alt="this.alt"
  @click="toggle()"></img>
</template>
