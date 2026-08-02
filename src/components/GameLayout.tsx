import { LevelLayout } from '../shared/constants/LevelLayout'
import type { GameLayoutType } from '../shared/types/GameLayoutType'
import { GameBtnOption } from './GameBtnOption'

const GameLayout = ({level,player}:GameLayoutType) => {

  const {finalLayout, game} = LevelLayout(level)
  
  return (
    <div className="relative top-20 xl:top-30 flex flex-col scale-65 xl:scale-110 items-center justify-center w-full h-75">
    <img src={finalLayout} alt='' className='absolute h-65 ' />
       <div className='relative'>
        {
        game.map((item,index) => (
           <GameBtnOption key={index} value={item.value} name={item.name} from={item.from} to={item.to} icon={item.icon} scale='scale-135 xl:scale-100 hover:scale-110 xl:hover:scale-120
           hover:shadow-[0_0_0_35px_rgba(255,255,255,.04),0_0_0_70px_rgba(255,255,255,.03),0_0_0_110px_rgba(255,255,255,.02)] active:shadow-[0_0_0_35px_rgba(255,255,255,.04),0_0_0_70px_rgba(255,255,255,.03),0_0_0_110px_rgba(255,255,255,.02)]
               shadow-[0_8px_0_rgba(0,0,0,.25),0_12px_20px_rgba(0,0,0,.25)]
           ' player={player}  />
        ))
       }
       </div>
    </div>
  )
}

export default GameLayout