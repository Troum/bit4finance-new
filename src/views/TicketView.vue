<template>
  <b-row class="b4f_ticket-container">
    <b-col cols="12" class="b4f_blur-filter"></b-col>
    <b-col cols="12" xl="3" class="b4f_ticket-container__logo-container">
      <img class="b4f_logo" src="../assets/logowhite.png" alt="B4F Logo">
    </b-col>
    <b-col cols="12" xl="9" class="b4f_ticket-container__ticket-card">
      <ticket-component/>
    </b-col>
  </b-row>
</template>

<script>
  import TicketComponent from '../components/TicketComponent.vue'

  export default {
    components: {
      TicketComponent
    }
  }
</script>
