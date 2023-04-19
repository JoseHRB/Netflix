import React, { useEffect,useState } from 'react'
import './App.css'
import Tmdb from './Tmdb'
import MovieRow from './components/MovieRow'
import FeaturedMovie from './components/FeaturedMovie'
import Header from './components/Header'

export default () => {

    const [movieList, setMovieList] = useState([])
    const [featuredData, setFeatureData] = useState(null)

    useEffect(()=>{
        const loadAll = async () => {
            //pegando a lista total
            let list = await Tmdb.getHomeList()
            setMovieList(list)

            //Pegando o Featured
            let trending = list.filter(i=>i.slug === 'trending')
            let randomChosen = Math.floor(Math.random() * (trending[0].items.results.length -1))
            let chosen = trending[0].items.results[randomChosen]
            let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'movie')

            setFeatureData(chosenInfo)
        }
        loadAll()
    },[])


    return (
        <div className='page'>

            <Header />

            {featuredData &&
                <FeaturedMovie item={featuredData}/>            
            }

            <section className='lists'>
                {movieList.map((item, key)=>(
                    <MovieRow 
                    key={key}
                    title={item.title}
                    items={item.items}
                    />
                ))}
            </section>
            <footer>
                Feito com <span role='img' aria-label='hearth'>❤</span> Por José H. R. Borges
                Direitos de imagem para Netflix<br/>
                Dados pegos do site themoviedb.org
            </footer>
            {movieList.length <= 0 &&
                <div className='loading'>
                    <img src='https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2560%2Cc_limit/Netflix_LoadTime.gif' alt='Carregando' />
                </div>
            }
        </div>
    );
}