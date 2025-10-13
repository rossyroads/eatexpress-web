import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  TimeInput,
  Checkbox,
  Input,
} from '@heroui/react';
import { useCallback, useState } from 'react';

type TRow = {
  dayOfWeek: string;
  timeFrom: Date;
  timeTo: Date;
  closedAllDay: boolean;
};
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
];

function ScheduleTableForm({ dailySchedule }: { dailySchedule: TRow[] }) {
  //   const [dailySchedule, setDailySchedule] = useState();
  const renderCell = useCallback((item: TRow, columnKey: string | number) => {
    const cellValue: any = item[columnKey];
    switch (columnKey) {
      case 'closedAllDay':
        return cellValue == true ? 'Closed' : 'Open';
      case 'timeFrom':
        return item.closedAllDay == true ? 'None' : cellValue;
      case 'timeTo':
        return item.closedAllDay == true ? 'None' : cellValue;
      default:
        return cellValue;
    }
  }, []);
  const renderEditable = useCallback(
    (item: TRow, columnKey: string | number) => {
      const cellValue: any = item[columnKey];
      switch (columnKey) {
        case 'closedAllDay':
          //   return cellValue == true ? 'Closed' : 'Open';
          return <Checkbox />;
        case 'timeTo':
          return <Input />;
        case 'timeFrom':
          return (
            <TimeInput
              isRequired={!item.closedAllDay}
              isDisabled={item.closedAllDay}
              hideTimeZone
              onPointerDown={(e) => {
                e.stopPropagation();
                e.currentTarget.focus();
              }}
            />
          );
        default:
          return cellValue;
      }
    },
    []
  );
  return (
    <Table
      aria-label="Schedule table"
      isKeyboardNavigationDisabled={true}
      onRowAction={() => {}}
      onCellAction={() => {}}
    >
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={dailySchedule}>
        {(item) => (
          <TableRow key={item.dayOfWeek}>
            {(columnKey) => (
              //   <TableCell>{renderCell(item, columnKey)}</TableCell>
              <TableCell>{renderEditable(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

export default ScheduleTableForm;
