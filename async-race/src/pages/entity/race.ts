export default class RaceState {
  public id: {
    id?: number
    isCarStoped?: boolean
    driveStatus?: number
    duration?: number
  };

  constructor(raceId?: number, isCarStopped?: boolean, driveStatus?: number, duration?: number) {
    this.id = {
      id: raceId,
      isCarStoped: isCarStopped,
      driveStatus,
      duration,
    };
  }
}
