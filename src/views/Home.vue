<template>
  <div style="position: relative; height: calc(100vh - 32px - 112px - 20px);">
    <div style="height: 100%; overflow: scroll">
      <v-layout class="mb-3" wrap row>
        <v-flex class="mb-2" xs12>
          <v-card>
            <v-card-text>
              <div class="caption grey--text">Your debt</div>
              <div class="body-2">23 500 000</div>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12>
          <v-card class="mb-2">
            <v-card-text>
              <div class="caption grey--text">Your loaned</div>
              <div class="body-2">23 500 000</div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>

      <v-carousel class="image-contain-carousel mb-3" hide-delimiters style="height: 39vw">
        <v-carousel-item
          style="background-size: contain"
          v-for="(item,i) in posters"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>


      <v-list three-line>
        <template v-for="(item, index) in news">
          <v-subheader
            v-if="item.header"
            :key="item.header"
          >
            {{ item.header }}
          </v-subheader>

          <v-divider
            v-else-if="item.divider"
            :inset="item.inset"
            :key="index"
          ></v-divider>

          <v-list-tile
            v-else
            :key="item.title"
            avatar
          >
            <v-list-tile-avatar>
              <img :src="item.avatar">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title v-html="item.title"></v-list-tile-title>
              <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
            </v-list-tile-content>
            <div class="text-xs-right" style="width: 100%">
                <v-btn class="caption" style="min-width: 60px" small flat color="grey">Cancel</v-btn>
                <v-btn class="caption" style="min-width: 60px" small flat color="pink">Join</v-btn>
              </div>
          </v-list-tile>
        </template>
      </v-list>
    </div>

    <v-btn
        absolute
        dark
        fab
        bottom
        right
        color="pink"
      >
        <v-icon>add</v-icon>
      </v-btn>
  </div>
</template>
<style>
.image-contain-carousel .v-image__image {
  background-size: contain !important;
  background-position: top left !important
}
</style>

<script>
export default {
  data () {
    return {
      posters: [
        { src: 'https://cdn.tgdd.vn/qcao/01_11_2018_15_50_35_690-300_02.gif'},
        { src: 'https://cdn.tgdd.vn/qcao/29_10_2018_14_19_12_Big-May-Loc-690-300.png'}
      ],
      news: [
          { header: 'Today' },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'Brunch this weekend?',
            subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
            subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            title: 'Oui oui',
            subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
            title: 'Birthday gift',
            subtitle: "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?"
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
            title: 'Recipe to try',
            subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
          }
        ]
    }
  }
};
</script>

