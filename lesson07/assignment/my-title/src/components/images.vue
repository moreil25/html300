<template>
  <div>
    <h1 class="display-1">{{ header }}</h1>
      <div class="col-lg-12 wrapper">
<!-- v-for will have to go in a wrapper for each image (i.e. div) and create props for components-->
<!--will wrapper div be written here or only in component?-->
      <!--v-for directive renders a list of items in array, imageOne in images loops through that array//:src function refers to method created to pull images from source directory//dot notation calls on key values in objects-->
        <img v-for="imageOne in images" @click="toggleBorder" class="img-fluid rounded m-2 img-border" :src="getPic(imageOne.src)" :title="imageOne.caption" :alt="imageOne.alt"/>
    <!-- <div class="wrapper" v-for="image in images">
      <clickable-image
        v-bind:img="imageOne.img"
        v-bind:src="imageOne.src"
        v-bind:caption="imageOne.caption"
        v-bind:alt="imageOne.alt">
        @click="toggleBorder"
        </clickable-image>
    </div> -->
    </div>
  </div>
</template>

<script>
// Vue.component('clickable-image', {
//
//   //the props I want to receive are from my images array
//   //prop validation = object
//   //props are one way communication that the parents control the children's value
//   props: {
//     images: {
//       type: Array //or Object?
//     }
//   },
// //do I want to use this as a template in the component or do i want to use this in the html template to create the v-for loop?
//   template: '<div class="wrapper" v-for="image in images"></div>',
//   //same fields as instance, but data is no longer an object, but a function that returns object


// const borderOn = {
//   return {
//     borderOn: true;
//   }
// },


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
  .img-border {
    max-width: auto;
    border: solid 4px black;
  }
</style>


<!-- Net Ninja Props https://www.youtube.com/watch?v=9qqFH60isFc -->
