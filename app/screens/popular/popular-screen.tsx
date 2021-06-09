import React, { useEffect } from "react"
import { View } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import { useDispatch, useSelector } from "react-redux"
import { Header, Screen, Wallpaper } from "../../components"
import { MovieInfoContainer } from "../../components/movie-info/MovieInfoContainer"
import { fetchRequestPopular, selectPopularMoviesState } from "../../redux/reducers/movie-reducer"
import { color } from "../../theme"
import { CONTAINER, FULL, HEADER_TITLE } from "./styles"

export const PopularScreen = () => {
  const dispatch = useDispatch()
  const movies = useSelector(selectPopularMoviesState)

  useEffect(() => {
    dispatch(fetchRequestPopular())
  }, [dispatch])

  const _renderItem = ({ item }) => (
    <MovieInfoContainer title={item.title} year={item.year} tmdbId={item.ids.tmdb} />
  )

  return (
    <View testID="PopularScreen" style={FULL}>
      <Wallpaper />
      <Screen style={CONTAINER} backgroundColor={color.transparent}>
        <Header headerTx="popularScreen.title" titleStyle={HEADER_TITLE} />
        <FlatList data={movies} renderItem={_renderItem} keyExtractor={(item) => item.ids.imdb} />
      </Screen>
    </View>
  )
}
