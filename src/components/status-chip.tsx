import { Chip } from '@heroui/react';

type TStatus = 'open' | 'closed';

function StatusChip({ status }: { status: TStatus }) {
  if (status == 'closed') return <Chip color="danger">Closed</Chip>;
  if (status == 'open') return <Chip color="success">Open</Chip>;
}

export default StatusChip;
