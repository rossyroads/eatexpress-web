import {
  createRestaurant,
  getCuisineTypes,
  getRestaurantByOwnerId,
  type TNewRestaurant,
} from '@/api/restaurant';
import useUserAuth from './useUserAuth';
import { useQuery } from '@tanstack/react-query';

export function useRestaurantByOwnerId() {
  const { token, userId } = useUserAuth();
  const { isLoading, isError, data } = useQuery({
    queryKey: ['r', 'restaurant', userId],
    queryFn: () => getRestaurantByOwnerId(token, userId),
  });
  return { isLoading, isError, data };
}

export function useCreateRestaurant() {
  const { token } = useUserAuth();
  const submitRestaurant = (newRestaurant: TNewRestaurant) => {
    return createRestaurant(token, newRestaurant);
  };
  return { submitRestaurant };
}

export function useCuisineTypes() {
  const { token } = useUserAuth();
  const { isLoading, isError, data } = useQuery({
    queryKey: ['cuisine-types'],
    queryFn: () => getCuisineTypes(token),
  });
  return { isLoading, isError, data };
}
