export type HandlerT = (e?: Event) => void;

export type NewUserT = {
  id: number
  wins: number
  time: number
};

export type NewCarT = {
  name: string,
  color: string,
};

export type PaginationStateT = {
  garagePage: number
  winnersPage: number
};

export type StartEngineApiDataT = {
  velocity: number
  distance: number
};

export type NowSortedByT = {
  id: number
  wins: number
  time: number
};
