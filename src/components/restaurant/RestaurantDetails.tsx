import { capitalize } from '@/lib/utils';
import { Mail } from 'iconoir-react';
import Map from '@/components/Map';
import type { TRestaurant } from '@/api/restaurant';
import { Link } from '@heroui/react';

function RestaurantDetails({ restaurant }: { restaurant: TRestaurant }) {
  return (
    <div className="gap-2">
      <div className="text-xl">Contact</div>
      <div className="flex flex-row items-center gap-1.5 align-middle">
        <Mail />
        <Link href={'mailto:' + restaurant.contactEmail}>
          {restaurant.contactEmail}
        </Link>
      </div>
      <div className="text-xl">Cuisine</div>
      <div>{capitalize(restaurant.cuisineType)}</div>
      <div className="text-xl">Location</div>
      <div>
        {restaurant.address.street +
          ' ' +
          restaurant.address.houseNumber +
          ', ' +
          restaurant.address.city +
          ' ' +
          restaurant.address.postalCode +
          ', ' +
          restaurant.address.country}
      </div>

      {/* <div className="h-[60vh]"> */}
      <div className="h-96">
        <Map
          latitude={restaurant.address.latitude}
          longitude={restaurant.address.longitude}
        />
      </div>
    </div>
  );
}

export default RestaurantDetails;
