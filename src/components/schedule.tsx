import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from '@heroui/react';
import { useCallback } from 'react';

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

function ScheduleTable({ dailySchedule }: { dailySchedule: TRow[] }) {
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
  return (
    <Table aria-label="Schedule table">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={dailySchedule}>
        {(item) => (
          <TableRow key={item.dayOfWeek}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

export default ScheduleTable;
