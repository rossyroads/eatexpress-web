import RestaurantOverview from '@/components/restaurant/overview';
import { useRestaurantByOwnerId } from '@/hooks/useRestaurant';
import { useNavigate } from 'react-router-dom';

export function ManageRestaurantPage() {
  const navigate = useNavigate();
  const { isLoading, isError, data } = useRestaurantByOwnerId();

  if (isLoading) return <>Loading..</>;
  if (data == null || data == undefined || isError) navigate('/r/new');
  if (isError) return <>Error</>;

  console.log(data);
  return (
    <>
      <RestaurantOverview restaurant={data} />
    </>
  );
}
