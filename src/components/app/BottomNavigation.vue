<template>
  <v-bottom-nav app
      :value="true"
      absolute
      color="transparent"
    >
      <v-btn
        tag="router-link"
        to="/"
        color="teal"
        flat
      >
        <span>Home</span>
        <v-icon>home</v-icon>
      </v-btn>

      <v-btn
        tag="router-link"
        to="/chat"
        color="teal"
        flat
      >
        <span>Chat</span>
        <v-icon>chat_bubble</v-icon>
      </v-btn>

      <v-btn
        tag="router-link"
        to="/contact"
        color="teal"
        flat
      >
        <span>Contact</span>
        <v-icon>perm_contact_calendar</v-icon>
      </v-btn>
      
      <v-btn
        tag="router-link"
        to="/profile"
        color="teal"
        flat
      >
        <span>Me</span>
        <v-icon>account_circle</v-icon>
      </v-btn>
    </v-bottom-nav>
</template>

<script>
  export default {}
</script>

