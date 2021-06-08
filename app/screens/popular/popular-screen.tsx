import React, { useCallback, useEffect, useState } from "react"
import { View } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import { requestApi } from "../../api/trakt"
import { Header, Screen, Wallpaper } from "../../components"
import { MovieInfoContainer } from "../../components/movie-info/MovieInfoContainer"
import { TraktEndpoints } from "../../endpoints/trakt-endpoints"
import { color } from "../../theme"
import { CONTAINER, FULL, HEADER_TITLE } from "./styles"

export const PopularScreen = () => {
  // const navigation = useNavigation()
  const [movies, setMovies] = useState<Movie[] | undefined>([])

  const fetchMovies = useCallback(async () => {
    try {
      const { data } = await requestApi<Movie[]>(TraktEndpoints.popular.get())
      setMovies(data)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    fetchMovies()
  }, [fetchMovies])

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
