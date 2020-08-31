<template>
  <div>
    <h1 class="display-1">{{ header }}</h1>
    <div class="col-lg-12">
<!-- v-for will have to go in a wrapper for each image (i.e. div) and create props for components-->
<!--will want to import component on this page??-->
      <!--v-for directive renders a list of items in array, imageOne in images loops through that array//:src function refers to method created to pull images from source directory//dot notation calls on key values in objects-->
      <!-- <img  class="img-fluid rounded m-2" :src="getPic(imageOne.src)" :title="imageOne.caption" :alt="imageOne.alt"/> -->
      <image-component
        v-bind:img="imageOne.img"
        v-bind:src="imageOne.src"
        v-bind:caption="imageOne.caption"
        v-bind:alt="imageOne.alt"></image-component>


    </div>

  </div>
</template>

<script>
//
Vue.component('image-component', {

  //the props I want to receive are from my images array
  //prop validation = object
  props: {
    images: {
      type: Array
    }
  }
//do I want to use this as a template in the component or do i want to use this in the html template to create the v-for loop?
  template: '<div class="wrapper" v-for="imageOne in images"></div>',
  //same fields as instance, but data is no longer an object, but a function that returns object
  data: function() {



// const borderOn = {
//   return {
//     borderOn: true;
//   }
// },
// methods: {
//   toggleBorder() {
//     this.borderOn = !this.borderOn;
//   }
// }

export default {
  data () {
    return {
  //these are the variables that are places in the HTML sections that change based on conditional statements
      header: 'Images',
        images: [
          {
          img: 'Cross Stitch',
          src: 'xstitch.jpg',
          caption: 'Cross Stitch Flat Lay',
          alt: 'Flat lay image of cross stitch, Kindle ereader, cup of tea'
        },
        {
          img: 'Lions',
          src: 'lions.jpg',
          caption: 'Crocheted Lions',
          alt: 'Two small crocheted lions'
        },
        {
          img: 'Rainbow',
          src: 'rainbow.jpg',
          caption: 'Crocheted Rainbow',
          alt: 'Crocheted rainbow'
        },
        {
          img: 'Close Up Knit',
          src: 'knit.jpg',
          caption: 'Moss Stitch Close Up',
          alt: 'Close up view of changing yarn colors in knit'
        },
        {
          img: 'Start of Knitting',
          src: 'knit-start.jpg',
          caption: 'Cast On with New Yarn',
          alt: 'Knitting needle with cast on yarn, balls of yarn'
        }
      ]
    }
  },
  methods: {
    getPic(pic) {
      return require(`@/images/${pic}`)
      }
    }
  }

</script>

<style>
  img {
    /* height: auto;
    width: 33%; */
  }
</style>


<!-- Net Ninja Props https://www.youtube.com/watch?v=9qqFH60isFc -->
