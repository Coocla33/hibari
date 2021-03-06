export default {
  lang: 'English',
  hibari: 'Hibari',
  kitsu: 'Kitsu',
  strapline: 'Stats for Kitsu',
  notice: {
    id: '3',
    content: 'This version is very early alpha and is prone to bugs and lack of content'
  },
  navigation: {
    home: 'Home',
    bugs: 'Bugs'
  },
  home: {
    strapline: 'Stats for ',
    user: {
      head: 'Stats for',
      body: 'Search for {username} on Kitsu',
      placeholder: 'Enter a username...',
      action: 'Lookup User'
    },
    anime: {
      head: 'Anime',
      body: 'Search for {anime}',
      placeholder: 'enter an anime...',
      action: 'Lookup'
    },
    manga: {
      head: 'Manga',
      body: 'Search for {manga}',
      placeholder: 'enter a manga...',
      action: 'Lookup'
    }
  },
  user: {
    kitsuProfile: 'View on Kitsu',
    navigation: {
      profile: 'Profile',
      library: 'Library'
    },
    sociability: {
      title: 'Sociability',
      postsCount: 'Posts',
      commentsCount: 'Comments',
      likesGivenCount: 'Likes Given',
      likesReceivedCount: 'Likes Received',
      followingCount: 'Followed',
      followersCount: 'Followers'
    },
    about: {
      title: 'About'
    },
    library: {
      kind: {
        anime: 'Anime',
        manga: 'Manga'
      },
      toggle: {
        anime: '@:user.library.kind.anime Library',
        manga: '@:user.library.kind.manga Library'
      },
      status: {
        anime: {
          all: 'All @:user.library.kind.anime',
          current: 'Currently Watching',
          planned: 'Plan to Watch',
          dropped: 'Dropped',
          completed: 'Completed',
          on_hold: 'On Hold'
        },
        manga: {
          all: 'All @:user.library.kind.manga',
          current: 'Currently Reading',
          planned: 'Plan to Read',
          dropped: '@:user.library.status.anime.dropped',
          completed: '@:user.library.status.anime.completed',
          on_hold: '@:user.library.status.anime.on_hold'
        }
      },
      mediaBox: {
        episode: 'Ep {episode} of {total}',
        chapter: 'Ch {chapter} of {total}',
        rating: 'Rated {rating}/10'
      }
    }
  },
  bugs: {
    title: 'Bugs',
    body: 'Please create a <a href=\'//github.com/wopian/hibari/issues/new\'>GitHub Issue</a> ' +
    'for any bugs you encounter.',
    requirements: 'The following information is required to aid replication and fixing:',
    include: {
      version: 'Version:',
      os: 'Operating System:',
      browser: 'Browser:',
      browserVer: 'Browser Version:',
      replicate: 'Steps to replicate:'
    }
  },
  loader: {
    collectingData: 'Collecting Data'
  }
}
