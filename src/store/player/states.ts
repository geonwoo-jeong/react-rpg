export type Player = {
  userName: string;
  maxSpeed: number;
  speed: number;
  maxHp: number;
  hp: number;
  maxMp: number;
  mp: number;
  armor: number;
  gold: number;
  src: string;
  width: string;
  height: string;
};

export interface IPlayerState {
  isLoggedIn: boolean;
  positionX: number;
  positionY: number;
}

export const PlayerInitialState: IPlayerState = {
  isLoggedIn: false,
  positionX: 0,
  positionY: 0
};
