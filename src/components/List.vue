<template>
  <div>
    <slot v-for="item in items"
          :item="item">
      <!-- fallback content here -->
    </slot>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}

</script>

<style scoped>

</style>