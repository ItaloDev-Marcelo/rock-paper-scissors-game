import type { Btntype } from "../shared/types/BtnType"

export const GameBtnOption = ({name,from,to,icon,scale,player, value}:Btntype) => {
  return (
     <button id={name} className={`cursor-pointer bg-linear-to-r relative z-10 gap-10 rounded-full w-25 h-25 flex flex-col justify-center items-center 
               shadow-[0_8px_0_rgba(0,0,0,.25),0_12px_20px_rgba(0,0,0,.25)] ${scale}
              `}  style={{
    backgroundImage: `linear-gradient(to right, ${from}, ${to})`,
  }} onClick={() => player(value)} >
               <div className='bg-white w-18 place-items-center place-content-center h-18 rounded-full  shadow-[inset_0_5px_0_rgba(0,0,0,.12)]'>
                <img src={icon} alt='game icon' className='w-7' />
               </div>
    </button>
  )
}
