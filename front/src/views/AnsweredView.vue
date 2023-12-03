<template>
  <div class="box">
    <div class="text">Połączenie zakończone.</div>
    <div class="text">Połączenie trwało {{ $route.query.duration }} sekund.</div>
    <div class="call-button-bottom" @click="$router.push(`/`)">
      Spróbuj ponownie
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route.query.duration);
  },
};
</script>
