import React, { useCallback, useEffect, useState } from "react"
import { View } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import { requestApi } from "../../api/trakt"
import { Header, Screen, Wallpaper } from "../../components"
import { MovieInfoContainer } from "../../components/movie-info/MovieInfoContainer"
import { TraktEndpoints } from "../../endpoints/trakt-endpoints"
import { color } from "../../theme"
import { CONTAINER, FULL, HEADER_TITLE } from "./styles"

export const TrendingScreen = () => {
  // const navigation = useNavigation()
  const [movies, setMovies] = useState<FilmContent[] | undefined>([])

  const fetchMovies = useCallback(async () => {
    try {
      const { data } = await requestApi<FilmContent[]>(TraktEndpoints.trending.get())
      setMovies(data)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    fetchMovies()
  }, [fetchMovies])

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
