<template>
  <div>{userid}</div>
</template>

<script>
export default {
  asyncData({ $route }) {
    console.log($route)
    return {
      userid: $route.params.id,
    }
  },
}
</script>

<style></style>
