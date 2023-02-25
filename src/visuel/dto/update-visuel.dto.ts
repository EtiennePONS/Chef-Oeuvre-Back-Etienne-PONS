/* eslint-disable prettier/prettier */
export class UpdateVisuelDto {
  Visuel: string;
  PgmMidi: number;
  CanalMidi: number;
  NoteMidi: number;
  chanson:{
    id: number
    PgmMidi: number;
    CanalMidi: number;
  };
}
