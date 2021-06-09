import React, { useEffect } from "react"
import { View } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import { useDispatch, useSelector } from "react-redux"
import { Header, Screen, Wallpaper } from "../../components"
import { MovieInfoContainer } from "../../components/movie-info/MovieInfoContainer"
import { fetchRequestTrending, selectTrendingMoviesState } from "../../redux/reducers/movie-reducer"
import { color } from "../../theme"
import { CONTAINER, FULL, HEADER_TITLE } from "./styles"

export const TrendingScreen = () => {
  const dispatch = useDispatch()
  const movies = useSelector(selectTrendingMoviesState)

  useEffect(() => {
    dispatch(fetchRequestTrending())
  }, [dispatch])

  const _renderItem = ({ item }) => (
    <MovieInfoContainer
      watchers={item.watchers}
      title={item.movie.title}
      year={item.movie.year}
      tmdbId={item.movie.ids.tmdb}
    />
  )
  return (
    <View testID="TrendingScreen" style={FULL}>
      <Wallpaper />
      <Screen style={CONTAINER} backgroundColor={color.transparent}>
        <Header headerTx="trendingScreen.title" titleStyle={HEADER_TITLE} />
        <FlatList
          data={movies}
          renderItem={_renderItem}
          keyExtractor={(item) => item.movie.ids.imdb}
        />
      </Screen>
    </View>
  )
}
