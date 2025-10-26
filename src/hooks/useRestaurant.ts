import {
  createRestaurant,
  getCuisineTypes,
  getRestaurantByOwner,
  type TNewRestaurant,
} from '@/api/restaurant';
import { useQuery } from '@tanstack/react-query';

export function useRestaurantByOwnerId() {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['r', 'restaurant'],
    queryFn: () => getRestaurantByOwner(),
  });
  return { isLoading, isError, data };
}

export function useCreateRestaurant() {
  const submitRestaurant = (newRestaurant: TNewRestaurant) => {
    return createRestaurant(newRestaurant);
  };
  return { submitRestaurant };
}

export function useCuisineTypes() {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['cuisine-types'],
    queryFn: () => getCuisineTypes(),
  });
  return { isLoading, isError, data };
}
