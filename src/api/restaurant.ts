import axios from 'axios';

export type TDailySchedule = {
  dayOfWeek: string;
  timeFrom: string;
  timeTo: string;
  closedAllDay: boolean;
};
export type TNewRestaurant = {
  name: string;
  cuisineType: string;
  contactEmail: string;
  pictureUrl: string;
  street: string;
  street_number: number;
  postalCode: string;
  city: string;
  country: string;
  defaultPreparationTimeMinutes: number;
  openingHours: TDailySchedule[];
};
export type TRestaurant = TNewRestaurant & {
  uuid: string;
  priceRange: string;
  openingStatusOverride: string;
};

export async function getRestaurantByOwner(): Promise<TRestaurant> {
  const { data } = await axios.get<TRestaurant>(
    `${import.meta.env.VITE_BACKEND_HOST}/api/${import.meta.env.VITE_BACKEND_API_VERSION}/restaurant`
  );
  return data;
}

export async function createRestaurant(
  newRestaurant: TNewRestaurant
): Promise<TRestaurant> {
  const { data } = await axios.post<TRestaurant>(
    `${import.meta.env.VITE_BACKEND_HOST}/api/${import.meta.env.VITE_BACKEND_API_VERSION}/restaurant/create`,
    newRestaurant
  );
  return data;
}

export async function getCuisineTypes(): Promise<String[]> {
  const { data } = await axios.get<String[]>(
    `${import.meta.env.VITE_BACKEND_HOST}/api/${import.meta.env.VITE_BACKEND_API_VERSION}/public/restaurant/cuisine-types`
  );
  return data;
}
