import axios from 'axios';

export type TDailySchedule = {
  dayOfWeek: string;
  timeFrom: Date;
  timeTo: Date;
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

export async function getRestaurantByOwnerId(
  token: string,
  ownerId: string
): Promise<TRestaurant> {
  const { data } = await axios.get<TRestaurant>(
    `${import.meta.env.VITE_BACKEND_HOST}/api/${import.meta.env.VITE_BACKEND_API_VERSION}/restaurant/${ownerId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
}

export async function createRestaurant(
  token: string,
  newRestaurant: TNewRestaurant
): Promise<TRestaurant> {
  const { data } = await axios.post<TRestaurant>(
    `${import.meta.env.VITE_BACKEND_HOST}/api/${import.meta.env.VITE_BACKEND_API_VERSION}/restaurant/create`,
    newRestaurant,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
}

export async function getCuisineTypes(token: string): Promise<String[]> {
  const { data } = await axios.get<String[]>(
    `${import.meta.env.VITE_BACKEND_HOST}/api/${import.meta.env.VITE_BACKEND_API_VERSION}/restaurant/cuisine-types`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
}
