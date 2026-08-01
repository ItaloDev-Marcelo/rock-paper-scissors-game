import { logo_lv1, logo_lv2 } from "../assets/layout_images";
import type { ScoreType } from "../shared/types/ScoreType";

export const Score = ({ScoreResult,level}:ScoreType) => {

 const selectedImage = level  ? logo_lv1 : logo_lv2;

  return (
    <div className="outline-3 rounded-md w-[95%] p-5 outline-Gray-header-outline flex flex-row justify-between  ">
        <div>
            <img src={selectedImage} alt='Score-logo' className="w-25"/>
        </div>
        <div className='bg-white w-20 h-20 rounded-md text-center p-2'>
             <h2 className='uppercase text-Blue-score-text font-medium'>Score</h2>
             <p className="text-4xl mt-1 font-semibold text-Navy-dark-text opacity-80">{ScoreResult}</p>
        </div>
    </div>
  )
}
