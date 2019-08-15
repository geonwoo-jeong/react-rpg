import { IPlayerState, PlayerInitialState } from "./player/states";

export interface IInitialState {
  player: Readonly<IPlayerState>;
}

export const InitialState: IInitialState = {
  player: PlayerInitialState
};
