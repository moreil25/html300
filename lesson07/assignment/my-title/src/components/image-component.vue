<!-- For the image page, convert the image markup into a separate component in its own file, be sure to import it into the corresponding 'page' component
The image component should have props for at least the image src, alt, & title attributes, use prop validation. -->

<script>
//new Vue({ el: '#custom-wrapper'})
export default {
const newComponent = Vue.extend({
  //custom elements can be over and over, creating new instances in each use
  template: '<div id="custom-wrapper">Custom Images Component</div>'
})
  Vue.component('newComponent', {
    //custom attributes you can register on a component
    props: ['img', 'src', 'caption', 'alt'],
    template: '<div>{{ img }}</div>'
    //data must be a function
    data: function() {
      return {
        heading: 'Images Component'
      };
    }
  });
  const borderOn = {
    return {
      borderOn: true;
    }
  },
  methods: {
    toggleBorder() {
      this.borderOn = !this.borderOn;
    }
  }
}
</script>

<template>
  <div id="custom-wrapper">Custom Images Component</div>
  <!-- v-bind dynamically passes data -->
  <custom-image
    v-bind:id=".id"
    v-bind:src".src"
    v-bind:alt=".alt">
</template>

<!--array of data that you will want to render a component for each one-->
{id: 1,
img: 'Cross Stitch',
src: 'xstitch.jpg',
caption: 'Cross Stitch Flat Lay',
alt: 'Flat lay image of cross stitch, Kindle ereader, cup of tea'},

{id: 2,
img: 'Lions',
src: 'lions.jpg',
caption: 'Crocheted Lions',
alt: 'Two small crocheted lions'},

{id: 3,
img: 'Rainbow',
src: 'rainbow.jpg',
caption: 'Crocheted Rainbow',
alt: 'Crocheted rainbow'},

{id: 4,
img: 'Close Up Knit',
src: 'knit.jpg',
caption: 'Moss Stitch Close Up',
alt: 'Close up view of changing yarn colors in knit'}


<!-- https://medium.com/@liutingchun_95744/vue-js-making-a-image-component-with-contain-cover-property-7bb196c27a2f -->
