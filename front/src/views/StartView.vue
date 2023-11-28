<template>
  <div>
    <div class="header clearfix">Zadzwonimy do Ciebie w ciągu 26 sekund.</div>
    <label class="form-label clearfix" for="form-number">
      Wprowadź numer
    </label>
    <input v-model="number" class="form-number clearfix" id="form-number" />
    <div class="call-button" @click="call()">Zadzwoń teraz</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      number: "",
    };
  },
  methods: {
    async call() {
      let responseStream = await fetch(
        `${process.env.VUE_APP_SERVER_URL}/call`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify({ number: this.number }),
        }
      );
      let response = await responseStream.json();
      this.$router.push({ name: "ringing", params: { callsId: response.id } });
    },
  },
};
</script>