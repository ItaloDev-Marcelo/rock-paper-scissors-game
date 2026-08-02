
import { LevelLayout } from './LevelLayout'

export const Filtered = (level:boolean,player:number) => {
  const {game} = LevelLayout(level)

  return game.filter(item => item.value === player)
}
