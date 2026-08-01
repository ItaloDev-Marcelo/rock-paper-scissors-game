import { LevelLayout } from '../shared/constants/LevelLayout'
import type { GameLayoutType } from '../shared/types/GameLayoutType'
import { GameBtnOption } from './GameBtnOption'

const GameLayout = ({level,player}:GameLayoutType) => {

  const {finalLayout, game} = LevelLayout(level)
  
  return (
    <div className="relative top-20 flex flex-col scale-75 xl:scale-90 items-center justify-center w-full h-75">
    <img src={finalLayout} alt='' className='absolute h-75' />
       <div className='relative'>
        {
        game.map((item,index) => (
           <GameBtnOption key={index} value={item.value} name={item.name} from={item.from} to={item.to} icon={item.icon} scale='hover:scale-110 xl:hover:scale-120 xl:scale-110' player={player}  />
        ))
       }
       </div>
    </div>
  )
}

export default GameLayout