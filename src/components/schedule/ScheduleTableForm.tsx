import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  useDisclosure,
  Skeleton,
} from '@heroui/react';
import { useCallback, useState } from 'react';
import { Edit } from 'iconoir-react';
import SchedulePickerModal from './SchedulePickerModal';
import type { TDailySchedule } from '@/api/restaurant';
import { capitalize } from '@/lib/utils';

type TColumn = {
  key: string;
  label: string;
};
const columns: TColumn[] = [
  {
    key: 'dayOfWeek',
    label: 'Day',
  },
  {
    key: 'timeFrom',
    label: 'From',
  },
  {
    key: 'timeTo',
    label: 'Till',
  },
  {
    key: 'closedAllDay',
    label: 'Closed all day',
  },
  {
    key: 'actions',
    label: 'Actions',
  },
];

function ScheduleTableForm({
  scheduleItems,
  setScheduleItems,
}: {
  scheduleItems: TDailySchedule[];
  setScheduleItems: React.Dispatch<React.SetStateAction<TDailySchedule[]>>;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [itemOpen, setItemOpen] = useState<TDailySchedule>(scheduleItems[0]);
  const renderCell = useCallback(
    (item: TDailySchedule, columnKey: string) => {
      const cellValue: any = item[columnKey as keyof TDailySchedule];
      switch (columnKey) {
        case 'dayOfWeek':
          return capitalize(cellValue);
        case 'closedAllDay':
          return cellValue == true ? 'Closed' : 'Open';
        case 'timeFrom':
          return item.closedAllDay == true ? 'None' : cellValue.toString();
        case 'timeTo':
          return item.closedAllDay == true ? 'None' : cellValue.toString();
        case 'actions':
          return (
            <div className="relative flex items-center gap-2">
              <button
                className="text-lg text-default-400 cursor-pointer active:opacity-50"
                onClick={(e) => {
                  e.preventDefault();
                  console.log(columnKey);
                  onOpen();
                  setItemOpen(item);
                }}
              >
                <Edit />
              </button>
            </div>
          );
        default:
          return cellValue;
      }
    },
    [onOpen]
  );
  if (!scheduleItems) {
    return (
      <Skeleton className="rounded-lg">
        <div className="h-10 rounded-lg bg-secondary" />
      </Skeleton>
    );
  }
  return (
    <>
      <div className="flex flex-row text-sm pb-1">
        Opening Schedule
        <div className="text-red-500"> *</div>
      </div>
      <SchedulePickerModal
        scheduleItems={scheduleItems}
        setScheduleItems={setScheduleItems}
        itemOpen={itemOpen}
        isOpen={isOpen}
        onClose={onClose}
      />
      <Table aria-label="Schedule table">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody>
          {scheduleItems.map((item) => (
            <TableRow key={item.dayOfWeek}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey.toString())}</TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default ScheduleTableForm;
