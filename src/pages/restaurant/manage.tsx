import DishesOverview from '@/components/restaurant/DishesOverview';
import RestaurantOverview from '@/components/restaurant/RestaurantOverview';
import { useRestaurantByOwnerId } from '@/hooks/useRestaurant';
import { Divider } from '@heroui/react';
import { useNavigate } from 'react-router-dom';

export function ManageRestaurantPage() {
  const navigate = useNavigate();
  const { isLoading, isError, data } = useRestaurantByOwnerId();

  if (isLoading) return <>Loading..</>;
  if (data == null || data == undefined || isError) {
    navigate('/r/new');
    return <>Redirecting..</>;
  }

  console.log(data);
  return (
    <>
      <RestaurantOverview restaurant={data} isOwner={true} />
      <Divider className="my-4" />
      <DishesOverview restaurant={data} />
    </>
  );
}
