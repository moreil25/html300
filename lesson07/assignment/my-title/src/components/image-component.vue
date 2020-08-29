<script>
const newComponent = Vue.extend({
  template: '<div>Custom Images Component</div>'
})
  Vue.component('newComponent', {
    props: ['']
    data: function() {
      return {
        heading: 'Images Component'
      };
    }
  });
</script>

<template>
  <callout></callout>
</template>
