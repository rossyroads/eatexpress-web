import axios from 'axios';

export type TDish = {
  uuid: string;
  restaurant: string;
  liveStatus: string;
  isOutOfStock: boolean;
  scheduledTime: Date;
  version: number;
  name: string;
  menuNumber: number;
  type: string;
  description: string;
  price: number;
  foodTags: string[];
  pictureUrl: string;
};
export async function getDishesByRestaurant(
  restaurantId: string
): Promise<TDish[]> {
  const { data } = await axios.get<TDish[]>(
    `${import.meta.env.VITE_BACKEND_HOST}/api/${import.meta.env.VITE_BACKEND_API_VERSION}/public/dish/restaurant/${restaurantId}`
  );
  return data;
}
