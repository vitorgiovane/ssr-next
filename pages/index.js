import React from 'react'
import Link from 'next/link'
import 'isomorphic-fetch'

const Home = ({ musics }) => (
  <div>
    <Link href="/blog">
      <a>Blog</a>
    </Link>
    { musics.map(music => (
      <div key={ "mBox_"+music.id }>
        <h2 key={ "mId_"+music.id }>{ music.title }</h2>
        <h3 key={ "mUrl_"+music.id }>{ music.url }</h3>
        <img src={ music.thumbnailUrl } alt={ music.title } key={ "mThumb_"+music.id } />
      </div>
    ))
    }
  </div>
)

Home.getInitialProps = async () => {
  const musicsResponse = await fetch('https://jsonplaceholder.typicode.com/photos')
  const musics = await musicsResponse.json()
  
  console.log('This will be executed by the browser if this page has already been loaded.')
  return { musics }
}

export default Home

/*
"albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  },
*/