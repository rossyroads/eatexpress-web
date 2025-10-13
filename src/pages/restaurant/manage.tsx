import { useRestaurantByOwnerId } from '@/hooks/useRestaurant';
import RestaurantOpeningHours from '@/components/scheduletable';
import { Switch } from '@heroui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function ManageRestaurantPage() {
  const navigate = useNavigate();
  const { isLoading, isError, data } = useRestaurantByOwnerId();

  const [isOpen, setIsOpen] = useState(true);

  if (isLoading || data == undefined) return <>Loading..</>;
  if (isError) return <>Error</>;
  if (data == null) navigate('/r/new');

  console.log(data);
  return (
    <>
      <div className="flex flex-col">
        <div className="text-3xl text-center pb-10">{data.name}</div>
        {/* <div>Restaurant: </div> */}
        <Switch defaultSelected={isOpen} color="success">
          Currently {isOpen ? 'open' : 'closed'}
        </Switch>
        <RestaurantOpeningHours openingHours={data.openingHours} />
      </div>
    </>
  );
}
