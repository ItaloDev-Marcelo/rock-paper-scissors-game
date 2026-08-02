import { Filtered } from "../shared/constants/Filtered"
import type { WinnerBoardType } from "../shared/types/WinnerBoardType";
import { GameBtnOption } from "./GameBtnOption";

export const WinnerBoard = ({player,machine,level,remate,textResult}:WinnerBoardType) => {

   const playerW = Filtered(level,player)
   const machineW = Filtered(level, machine)

   

   const efeito = 'shadow-[0_0_0_35px_rgba(255,255,255,.04),0_0_0_70px_rgba(255,255,255,.03),0_0_0_110px_rgba(255,255,255,.02)] '
   const result1 = textResult == 'You Win'  
   const result2 = textResult == 'You Lose'  

  return (
    <div className="flex flex-col justify-between relative top-15  xl:top-15 xxl:top-30 xxl:scale-120 items-center">
       
       
        <div className='flex flex-row justify-between w-screen px-10 xl:px-5 xl:w-[50vw]   '>
        <div className="flex flex-col xl:flex-col-reverse items-center gap-6 xl:gap-25 animate-reveal1">
          <div className={`bg-[#192845] w-25 h-25 rounded-full xl:scale-135  board ${result1 ? efeito : ''}`}>
           {
            playerW.map((item, index) => (
              <GameBtnOption key={index} value={item.value} name={item.name} from={item.from} to={item.to} icon={item.icon} scale='scale-100 xl:scale-150'/>
            ))
           }
        </div>
        <h2 className='font-semibold text-white uppercase tracking-wide'>You picked</h2>
        </div>
        <div className="flex flex-col xl:flex-col-reverse items-center gap-6 xl:gap-25 animate-reveal2">
          <div className={`bg-[#192845] w-25 h-25 rounded-full  xl:scale-135 board ${result2 ? efeito : ''}`}>
          {
            machineW.map((item, index) => (
              <GameBtnOption key={index} value={item.value} name={item.name} from={item.from} to={item.to} icon={item.icon} scale='scale-100 xl:scale-150'/>
            ))
           }
        </div>
        <h2 className='font-semibold text-white uppercase tracking-wide'>The house picked</h2>
        </div>

        </div>



        <div className="relative top-20 xl:-top-20 text-center">
            <h3 className="text-white text-4xl font-semibold tracking-wider -mt-10 xl:-mt-15 mb-5">{textResult}</h3>
            <button onClick={remate} className="font-semibold text-gray-700 bg-white rounded-md w-50 h-12.5 cursor-pointer hover:outline houver:outline-1 hover:outline-white hover:bg-transparent hover:text-white">Play Again</button>
        </div>
    </div>
  )
}
