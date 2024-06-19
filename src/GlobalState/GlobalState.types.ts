import { Action } from './actions'

export type Payload<T = unknown> = T
export type Reducer = (state: StoreState, action: Action) => StoreState

export type Images = {
  "Poster Art": PosterArt
}

export type PosterArt = {
  url: string,
  width: number,
  height: number 
}

export type Data = {
  title: string,
  description: string,
  programType: string,
  images: Images,
  releaseYear: number,
}

export type StoreState = {
  total: number,
  entries: Data[],
  isLoaded: boolean
  hasError: boolean
}
