import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@heroui/react';
import ScheduleTable from './schedule';
import type { TDailySchedule } from '@/types/restaurant';

function RestaurantOpeningHours({
  openingHours,
}: {
  openingHours: TDailySchedule[];
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Adjust opening hours
              </ModalHeader>
              <ModalBody></ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <div className="flex flex-col">
        <div className="text-lg py-2">Opening Hours</div>
        <ScheduleTable dailySchedule={openingHours} />
        <div className="flex justify-end py-2">
          <Button onPress={onOpen}>Edit</Button>
        </div>
      </div>
    </>
  );
}

export default RestaurantOpeningHours;
