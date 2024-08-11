export interface ISocial {
  id: number;
  type: ISocialType;
  username: string;
  userId: number;
  assets: number[];
}

export interface ISocialType {
  type: "twitch" | "youtube" | "instagram" | "x";
}