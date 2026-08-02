import { logo_lv1, logo_lv2 } from "../assets/layout_images";
import type { ScoreType } from "../shared/types/ScoreType";

export const Score = ({ScoreResult,level}:ScoreType) => {

 const selectedImage = level  ? logo_lv1 : logo_lv2;

  return (
    <div className="outline-3 rounded-md w-[95%] p-5 outline-Gray-header-outline flex flex-row justify-between  items-center">
        <div>
            <img src={selectedImage} alt='Score-logo' className="w-22"/>
        </div>
        <div className='bg-white w-15 h-auto scale-130 mt-1.5 rounded-md text-center p-2'>
             <h2 className='uppercase text-Blue-score-text font-medium'>Score</h2>
             <p className="text-[1.4em]   font-semibold text-Navy-dark-text ">{ScoreResult}</p>
        </div>
    </div>
  )
}
