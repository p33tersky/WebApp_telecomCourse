<template>
  <div>
    <div class="header clearfix">{{ formatCountdown(countdown) }}.</div>
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
      countdown: 5
    };
  },
  methods: {
    async call() {
      await this.startCountdown();
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
    startCountdown() {
      return new Promise((resolve) => {
        const interval = setInterval(() => {
          if (this.countdown > 1) {
            this.countdown--;
          } else {
            clearInterval(interval);
            resolve(); 
          }
        }, 1000);
      });
    },
    formatCountdown(countdown) {
      if (countdown === 1) {
        return `Zadzwonimy do Ciebie za 1 sekundę`
      } else if (countdown === 5){
        return `Zadzwonimy do Ciebie za 5 sekund`
      }else {
        return  `Zadzwonimy do Ciebie za ${countdown} sekundy`
      }
    }
  },
};
</script>
