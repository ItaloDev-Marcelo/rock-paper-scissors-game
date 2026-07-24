import { rules_lv1, rules_lv2 } from "../assets/layout_images"

interface RulesPaperType {
    level: number
}


const RulesPapper = ({level}:RulesPaperType) => {
  const paperImage = level == 1 ? rules_lv1 : rules_lv2
  return (
    <div>
      <img src={paperImage} alt='rules-image' />
    </div>
  )
}

export default RulesPapper