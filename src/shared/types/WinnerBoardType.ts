import type { LevelType } from "./CommunType";

export type WinnerBoardType = LevelType & {
    player:number ;
    machine:number ;
    remate: () => void;
    textResult: string
}