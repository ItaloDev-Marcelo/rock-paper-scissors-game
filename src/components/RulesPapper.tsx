import { rules_lv1, rules_lv2 } from "../assets/layout_images"
import type { RulesType } from "../shared/types/RulePaperType"

const RulesPapper = ({level,changeRules}:RulesType) => {
  const paperImage = level ? rules_lv1 : rules_lv2
  return (
    <div className="bg-amber-50 fixed w-screen h-screen top-0 flex flex-col items-center justify-center ">
      <button className='fixed top-5 right-10 text-gray-400 text-2xl cursor-pointer' onClick={changeRules}>✖</button>
      <img src={paperImage} alt='rules-image' className=' w-[75%] xl:w-[25%] left-[9%] md:left-[35%]' />
    </div>
  )
}

export default RulesPapper