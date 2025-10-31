import type { TRestaurant } from '@/api/restaurant';
import { capitalize, isRestaurantOpen } from '@/lib/utils';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Image,
  Button,
} from '@heroui/react';
import StatusChip from '@/components/status-chip';

import { Cutlery, Edit, InfoCircle, PlusCircle } from 'iconoir-react';
import RestaurantDetails from './RestaurantDetails';

interface IRestaurantOverview {
  restaurant: TRestaurant;
  isOwner: boolean;
}

function RestaurantOverview({ restaurant, isOwner }: IRestaurantOverview) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <Image
          alt="Picture of restaurant"
          src={restaurant.pictureUrl}
          height={200}
          width={300}
          fallbackSrc="/foodphotos/cookware.jpg"
        />
        <div className="flex flex-col gap-2 pt-1 items-start">
          <div className="text-3xl">{restaurant.name}</div>
          <div className="flex flex-row items-center gap-1.5 align-middle">
            <Cutlery />
            {capitalize(restaurant.cuisineType)}
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-2">
            <Button
              onPress={onOpen}
              variant="bordered"
              color="secondary"
              startContent={<InfoCircle />}
            >
              Info
            </Button>
            {isOwner && (
              <Button
                // onPress={onOpen} // TODO: allow editing restaurant info
                variant="bordered"
                color="warning"
                startContent={<Edit />}
              >
                Edit
              </Button>
            )}
            {isOwner && (
              <Button
                // onPress={onOpen} // TODO: allow editing restaurant info
                variant="bordered"
                color="success"
                startContent={<PlusCircle />}
              >
                Add dish
              </Button>
            )}
          </div>
        </div>
        <div className="flex-grow justify-end flex">
          <StatusChip
            status={isRestaurantOpen(restaurant) ? 'open' : 'closed'}
          />
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="3xl"
        backdrop="blur"
        scrollBehavior="inside"
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center">
                {restaurant.name}
              </ModalHeader>
              <ModalBody>
                <RestaurantDetails restaurant={restaurant} />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default RestaurantOverview;
