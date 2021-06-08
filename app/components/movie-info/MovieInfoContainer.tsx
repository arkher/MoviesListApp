import React from "react"
import { MovieImage } from "./MovieImage"
import { RowInfo } from "./RowInfo"
import { Description } from "./TextInfo"
import { Wrapper } from "./Wrapper"

type Props = {
  watchers?: number
  title: string
  year: number
  tmdbId: number
}

export const MovieInfoContainer = (props: Props) => {
  const { watchers, title, year, tmdbId } = props

  return (
    <Wrapper>
      <MovieImage movieId={tmdbId} />
      <RowInfo>
        <Description>{`${title} - ${year}`}</Description>
      </RowInfo>
    </Wrapper>
  )
}
