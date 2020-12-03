export interface Category {
  key: string;
  games: GameInfoData[];
}

export interface GameInfoData {
  creatorId: number;
  creatorName: string;
  creatorType: string;
  imageToken: string;
  isSponsored: boolean;
  name: string;
  nativeAdData: string;
  placeId: number;
  playerCount: number;
  price: number;
  totalDownVotes: number;
  totalUpVotes: number;
  universeId: string;
  imageUrl: string;
}
