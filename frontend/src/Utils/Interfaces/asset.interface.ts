export interface IAsset {
  id: number;
  type: IAssetType;
  image: string;
  socialId: number;
}

export interface IAssetType {
  type: "overlay" | "emote" | "model";
}
