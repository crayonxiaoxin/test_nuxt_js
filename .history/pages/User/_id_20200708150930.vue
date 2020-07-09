<template>
  <div>{userid}</div>
</template>

<script>
export default {
  asyncData(context) {
    return {
      userid: context.$route.params.id
    }
  }
}
</script>

<style></style>
