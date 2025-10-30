import { getDishesByRestaurant } from '@/api/dish';
import { useQuery } from '@tanstack/react-query';

export function useDishes(restaurantId: string) {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['dishes', restaurantId],
    queryFn: () => getDishesByRestaurant(restaurantId),
  });
  return { isLoading, isError, data };
}
