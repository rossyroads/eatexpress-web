import type { TDailySchedule } from '@/api/restaurant';
import {
  Button,
  Form,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Switch,
  TimeInput,
} from '@heroui/react';
import React, { useState } from 'react';

function SchedulePickerModal({
  scheduleItems,
  setScheduleItems,
  itemOpen,
  isOpen,
  onClose,
}: {
  scheduleItems: TDailySchedule[];
  setScheduleItems: React.Dispatch<React.SetStateAction<TDailySchedule[]>>;
  itemOpen: TDailySchedule;
  isOpen: boolean;
  onClose: () => void;
}) {
  const [closedAllDay, setClosedAllDay] = useState<boolean>(
    itemOpen.closedAllDay
  );

  const handleSetSchedule = (timeFrom: string, timeTo: string) => {
    const i = scheduleItems.findIndex(
      (item) => item.dayOfWeek == itemOpen.dayOfWeek
    );
    scheduleItems[i].closedAllDay = closedAllDay;
    scheduleItems[i].timeFrom = timeFrom ?? '00:00:00';
    scheduleItems[i].timeTo = timeTo ?? '00:00:00';
    console.log(scheduleItems[i]);
    setScheduleItems(scheduleItems);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const data = Object.fromEntries(
      new FormData(e.currentTarget)
    ) as unknown as TDailySchedule;
    handleSetSchedule(data.timeFrom, data.timeTo);
    onClose();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {itemOpen?.dayOfWeek} Schedule
            </ModalHeader>
            <ModalBody>
              <Form className="w-full flex flex-col gap-6" onSubmit={onSubmit}>
                <div className="w-full flex flex-row gap-4">
                  <TimeInput
                    name="timeFrom"
                    label="From"
                    isRequired={!closedAllDay}
                    isDisabled={closedAllDay}
                    hideTimeZone
                    onPointerDown={(e) => {
                      e.stopPropagation();
                      e.currentTarget.focus();
                    }}
                  />
                  <TimeInput
                    name="timeTo"
                    label="Till"
                    isRequired={!closedAllDay}
                    isDisabled={closedAllDay}
                    hideTimeZone
                    onPointerDown={(e) => {
                      e.stopPropagation();
                      e.currentTarget.focus();
                    }}
                  />
                </div>
                <div>
                  <Switch
                    name="closedAllDay"
                    defaultSelected={closedAllDay}
                    aria-label="Closed all day"
                    onValueChange={(value) => setClosedAllDay(value)}
                  >
                    Closed all day
                  </Switch>
                </div>
                <div className="w-full flex flew-row gap-4 justify-end">
                  <Button
                    type="reset"
                    variant="light"
                    color="danger"
                    onPress={onClose}
                  >
                    Close
                  </Button>
                  <Button color="primary" type="submit">
                    Submit
                  </Button>
                </div>
              </Form>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default SchedulePickerModal;
