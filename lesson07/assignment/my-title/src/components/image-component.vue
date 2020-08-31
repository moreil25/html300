<!-- For the image page, convert the image markup into a separate component in its own file, be sure to import it into the corresponding 'page' component
The image component should have props for at least the image src, alt, & title attributes, use prop validation. -->

<script>
//new Vue({ el: '#custom-wrapper'})
export default {
  Vue.component('image-component', {

    //custom attributes you can register on a component
    props: ['img', 'src', 'caption', 'alt'],
    template: '<div>{{ img. }}</div>'
    //same fields as instance, but data is no longer an object, but a function that returns object
    data: function() {
      return {
        imageArray: [
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
      ]
      };
    },
//grab HTML and put it in the template string
    template: ''
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
  <imageComponent></imageComponent>
  <!-- v-bind dynamically passes data -->
  <custom-image
    v-bind:id=".id"
    v-bind:src".src"
    v-bind:alt=".alt">
</template>

<!--array of data that you will want to render a component for each one-->



<!-- https://medium.com/@liutingchun_95744/vue-js-making-a-image-component-with-contain-cover-property-7bb196c27a2f -->
<!--  -->
