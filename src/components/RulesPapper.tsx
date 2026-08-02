import { rules_lv1, rules_lv2 } from "../assets/layout_images"
import type { RulesType } from "../shared/types/RulePaperType"

const RulesPapper = ({level,changeRules}:RulesType) => {
  const paperImage = level ? rules_lv1 : rules_lv2
  return (
    <div className='xl:inset-0 xl:bg-black/40 xl:fixed xl:top-0 xl:left-0 xl:w-screen xl:h-full'>
       <div className="bg-amber-50  z-1000 fixed  xl:absolute xl:top-50 xxl:scale-120 xxl:top-60 scale-110 xl:rounded-lg w-screen h-screen xl:h-100 xl:w-100 top-0 xl:left-120 xxl:left-130  left-0 flex flex-col items-center justify-center ">
      <button className='fixed xl:relative xl:-top-6 xl:-right-40 top-15 right-14 text-gray-400 text-2xl cursor-pointer' onClick={changeRules}>✖</button>
      <img src={paperImage} alt='rules-image' className={` w-[75%] top-2 relative xl:w-[75%] left-[1%] md:left-[35%] xl:left-1 xl:-top-2`} />
    </div>
    </div>
  )
}

export default RulesPapper