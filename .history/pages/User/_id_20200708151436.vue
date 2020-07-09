<template>
  <div>{userid}</div>
</template>

<script>
export default {
  data(){

  },
  asyncData({ params }) {
    console.log(params)
    return {
      userid: params.id,
    }
  },
}
</script>

<style></style>
