export interface ITourist {
  name: string;
  description: string;
  location: string;
  picture: string;
  rating: number;
  favorite?: boolean;
}

export interface IResponse {
  tourists: ITourist[];
}
