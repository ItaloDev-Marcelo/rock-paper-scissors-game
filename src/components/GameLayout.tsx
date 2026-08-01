import { LevelLayout } from '../shared/constants/LevelLayout'
import type { GameLayoutType } from '../shared/types/GameLayoutType'
import { GameBtnOption } from './GameBtnOption'

const GameLayout = ({level,player}:GameLayoutType) => {

  const {finalLayout, game} = LevelLayout(level)
  
  return (
    <div className="relative top-20 flex flex-col scale-65 xl:scale-80 items-center justify-center w-full h-75">
    <img src={finalLayout} alt='' className='absolute h-65 xl:h-70' />
       <div className='relative'>
        {
        game.map((item,index) => (
           <GameBtnOption key={index} value={item.value} name={item.name} from={item.from} to={item.to} icon={item.icon} scale='scale-135 xl:scale-100 hover:scale-110 xl:hover:scale-120' player={player}  />
        ))
       }
       </div>
    </div>
  )
}

export default GameLayout