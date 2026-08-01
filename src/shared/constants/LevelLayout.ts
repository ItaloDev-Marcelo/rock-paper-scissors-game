import { bg_pentagon, bg_triangle } from "../../assets/layout_images"
import { gameIcons1, gameIcons2} from "./Game"

export const LevelLayout = (level:boolean) => {    
    const level1 = gameIcons1
    const level2 = gameIcons2
    const finalLayout = level ? bg_triangle : bg_pentagon
    const game = level ? level1 :level2 
    return {finalLayout,game}
}
