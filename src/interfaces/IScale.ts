export interface IScaleOptions {
  isScale: number;
  setScale: React.Dispatch<React.SetStateAction<number>>;
}

export interface IScaleParams {
  isScale: string[];
  setScale: React.Dispatch<React.SetStateAction<string[]>>;
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}
