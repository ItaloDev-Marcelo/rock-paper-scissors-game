import { logo_lv1, logo_lv2 } from "../assets/layout_images";

interface ScoreType {
    ScoreResult: number;
    level: number;
}

export const Score = ({ScoreResult,level}:ScoreType) => {

 const selectedImage = level == 1 ? logo_lv1 : logo_lv2;

  return (
    <div className="border-1 border-Gray-header-outline flex flex-row justify-between px-1.5 h-25">
        <div>
            <img src={selectedImage} alt='Score-logo'/>
        </div>
        <div>
             <h2>Score</h2>
             <p>{ScoreResult}</p>
        </div>
    </div>
  )
}
