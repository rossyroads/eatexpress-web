import type { TRestaurant } from '@/api/restaurant';
import { isRestaurantOpen } from '@/lib/utils';

function RestaurantOverview({ restaurant }: { restaurant: TRestaurant }) {
  return (
    <>
      <div className="flex flex-col">
        <div className="text-3xl text-center pb-10">{restaurant.name}</div>
        Currently {isRestaurantOpen(restaurant) ? 'open' : 'closed'}
      </div>
    </>
  );
}

export default RestaurantOverview;
