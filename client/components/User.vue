<template lang='pug'>
  main.user
    section.error(v-if='error') Error: {{ error }}

    section.content(v-else)
      .cover(
        v-if='user && user.attributes.name.toLowerCase() === slug'
        v-bind:style='{ backgroundImage: "url(" + user.attributes.coverImage.original + ")"}'
      )
        img(
          v-if='user.attributes.avatar.large'
          v-bind:src='user.attributes.avatar.large')
      .cover(v-else)

      nav
        div
          router-link(:to='{ name: "Profile" }') {{ $t('user.navigation.profile') }}
          router-link(:to='{ name: "Library" }') {{ $t('user.navigation.library') }}
          a(:href='"//kitsu.io/users/" + slug' target='_blank') Kitsu

      router-view(
        v-bind:slug='slug'
        v-bind:user='user'
        v-bind:waifu='waifu'
        v-bind:pinned='pinned'
        v-bind:profile-links='profileLinks'
        v-bind:favourites='favourites'
      )

      spinner(v-if='loading')
</template>

<script>
  import Spinner from 'components/svg/Spinner'

  export default {
    metaInfo () {
      return {
        titleTemplate: `${this.user ? this.user.attributes.name : this.slug}'s %s | Hibari`
      }
    },
    components: {
      Spinner
    },
    data () {
      return {
        loading: false,
        error: null,
        slug: this.$route.params.slug,
        user: null,
        waifu: null,
        pinned: null,
        profileLinks: null,
        favourites: null
      }
    },
    created () {
      this.checkStore()
    },
    methods: {
      checkStore () {
        this.loading = true
        if (this.$store.state.user[this.$route.params.slug] !== undefined) {
          console.info('[APP] Loaded user information from store')
          this.displayData(true)
        } else {
          console.info('[APP] Downloaded user information to store')
          this.fetchData()
        }
      },
      displayData (cached, user, include) {
        this.user = cached ? this.$store.state.user[this.slug] : user
        this.waifu = cached ? this.$store.state.waifu[this.slug] : include.characters
        this.pinned = cached ? this.$store.state.pinned[this.slug] : include.pinned
        this.profileLinks = cached ? this.$store.state.profileLinks[this.slug] : include.profileLinks
        this.favourites = cached ? this.$store.state.favourites[this.slug] : include.favourites
      },
      fetchData () {
        this.error = this.user = null
        this.loading = true
        // TODO: Get only specific fields: ?fields[attributes]=slug
        // TODO: For libraries sort items by last updated in request, e.g:
        // /people?sort=age,author.name
        // TODO: Stats for past week, month, year
        // //kitsu.io/api/edge/users/42603/library-entries?include=anime&filter[since]=2017-01-08
        // GLobal:
        // //kitsu.io/api/edge/library-entries?filter[kind]=anime&filter[since]=2017-02-10&page[limit]=10
        this.$http.get(`https://kitsu.io/api/edge/users?include=waifu,pinnedPost,profileLinks,favorites&filter[name]=${this.$route.params.slug}`, {}, {
          headers: {
            'Content-Type': 'application/vnd.api+json',
            'Accept': 'application/vnd.api+json',
            'User-Agent': 'hibari'
          }
        })
        .then((data) => {
          this.loading = false
          if (data.body.meta.count === 0) {
            this.error = 'No user exists'
          } else {
            let user, included
            let include = {}

            user = data.body.data[0]
            delete user.relationships
            this.$store.commit('USER', [user, this.slug])

            included = data.body.included
            include.characters = []
            include.posts = []
            include.profileLinks = []
            include.favourites = []

            included.forEach(el => {
              switch (el.type) {
                case ('characters'):
                  include.characters.push(el)
                  break
                case ('posts'):
                  include.posts.push(el)
                  break
                case ('profileLinks'):
                  include.profileLinks.push(el)
                  break
                case ('favorites'):
                  include.favourites.push(el)
                  break
              }
            })

            this.$store.commit('WAIFU', [include.characters, this.slug])
            this.$store.commit('PINNED', [include.posts, this.slug])
            this.$store.commit('PROFILELINKS', [include.profileLinks, this.slug])
            this.$store.commit('FAVOURITES', [include.favourites, this.slug])

            this.displayData(false, user, include)
          }
        })
        .catch((error) => {
          this.error = error.toString()
        })
      }
    }
  }
</script>

<style lang='sass'>
  @import ~bootstrap/scss/bootstrap
  @import ~assets/variables

  main.user
    section.content
      .cover
        margin-top: -56px
        width: 100vw
        height: 456px
        background-color: $primary
        background-size: cover
        background-position: center
        position: relative

        img
          left: calc((100vw - 10rem) / 2)
          border-radius: 999rem
          width: 10rem
          top: calc(50% - 56px)
          position: absolute
          display: block
          z-index: 501
          pointer-events: none

      nav
        @extend .navbar
        background: rgba(darken(white, 3), .9)
        border-bottom: 1px solid rgba(black, .05)
        width: 100vw
        position: sticky
        top: 56px
        height: 46px
        z-index: 100
        backdrop-filter: blur(2px)
        transition: background 300ms ease-out

        &:hover
          background: darken(white, 3)
          transition: background 200ms ease-in

        div
          @extend .container
          @extend .nav

        a
          @extend .nav-link
          color: black
          transition: color 200ms ease-out
          padding: 0.16em 1em

          &:hover
            color: $primary
            transition: color 100ms ease-out

      .content
        @extend .container
        margin-top: 1rem

        > div
          @extend .row

        .left, .right
          @extend .col

        @include media-breakpoint-up(md)
          .right
            text-align: right

        h1, .waifu
          @extend .display-4

        span
          display: block
          padding-top: .5rem
          font-size: 1.5rem
</style>