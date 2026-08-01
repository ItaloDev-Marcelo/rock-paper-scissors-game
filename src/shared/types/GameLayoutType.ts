import type { LevelType } from "./CommunType"

export  type GameLayoutType = LevelType & {
  player: (num:number) => void
}