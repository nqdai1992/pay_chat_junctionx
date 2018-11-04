<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title>{{$route.name}}</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <BottomNavigation />
  </v-app>
</template>

<script>
  import BottomNavigation from "@/components/app/BottomNavigation"
  export default {
    name: 'App',
    components: {
      BottomNavigation
    },
    data () {
      return {
        //
      }
    }
  }
</script>
