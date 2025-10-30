import type { TRestaurant } from '@/api/restaurant';
import { useDishes } from '@/hooks/useDish';
import { DishList } from '../dish/DishList';

function DishesOverview({ restaurant }: { restaurant: TRestaurant }) {
  const { isLoading, isError, data } = useDishes(restaurant.uuid);

  if (isLoading) return <>Loading..</>;
  if (isError) return <>Error</>;
  return <>{!data ? <div>No dishes</div> : <DishList dishes={data} />}</>;
}

export default DishesOverview;
