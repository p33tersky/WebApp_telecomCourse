<template>
  <div class="box">
    <div class="text">Trwa połączenie...</div>
    <div class="text">Czas połączenia: {{ duration }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      duration: 0,
      intervalId: null,
    };
  },
  mounted() {
    this.startTimer();
  },
  methods: {
    startTimer() {
      this.intervalId = setInterval(() => {
        this.duration++;
      }, 1000);
    },
    endCall() {
      clearInterval(this.intervalId);
      this.$router.push({
        name: "answered",
        query: { duration: this.duration.toString() },
      });
    },
  },
  beforeUnmount() {
    this.endCall();
  },
};
</script>
