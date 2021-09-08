import data from '../../../store/test.json';

export type DataT = typeof data;

export type SetsT = typeof data.sets;

const SetsArray = Object.entries(data);
export type SetEntriesT = typeof SetsArray;

const SetsEntries = Object.entries(data.sets)[0];
export type SetsEntriesT = typeof SetsEntries;

const CategoryCard = Object.values(data.sets)[0];
export type CategoryDataT = typeof CategoryCard;

const cardsData = Object.entries(CategoryCard);

export type cardsDataT = typeof cardsData;

export type ScoreStateScoreObjT = {
  clicks: number
  percent: number
  right: number
  whrong: number
};

export type ScoreStateScoreArrayT = [string, string, ScoreStateScoreObjT];

export type ScoreStateT = [
  string,
  ScoreStateScoreArrayT,
];
