import React, { useCallback, useEffect, useState } from "react"
import { requestFanartApi } from "../../api/fanart"
import { FanartEndpoints } from "../../endpoints/fanart-endpoints"
import { AutoImage } from "../auto-image/auto-image"

type Props = {
  movieId: number
}
export const MovieImage = (props: Props) => {
  const { movieId } = props

  const [imageUri, setImageUri] = useState<string | undefined>(undefined)

  const loadImageUrl = useCallback(async () => {
    try {
      const { data } = await requestFanartApi<MovieImage>(FanartEndpoints.get(movieId))
      setImageUri(data.moviethumb[0].url)
    } catch (e) {
      console.log(e)
    }
  }, [movieId])

  useEffect(() => {
    loadImageUrl()
  }, [loadImageUrl, movieId])

  return (
    <AutoImage
      source={{
        uri: imageUri,
      }}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{ height: 200, width: "100%" }}
    />
  )
}
