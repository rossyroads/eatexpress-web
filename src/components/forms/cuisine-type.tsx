import { useCuisineTypes } from '@/hooks/useRestaurant';
import { Select, SelectItem, Skeleton } from '@heroui/react';
import type { Key } from 'react';

function SelectCuisineType() {
  const { isLoading, isError, data } = useCuisineTypes();

  if (isLoading || isError || data == undefined) {
    return (
      <>
        <div className="text-small truncate">Cuisine type*</div>
        <Skeleton className="rounded-lg">
          <div className="h-10 rounded-lg bg-secondary" />
        </Skeleton>
      </>
    );
  }

  return (
    <>
      <Select
        isRequired
        className="max-w-xs"
        label="Cuisine type"
        labelPlacement="outside"
        name="cuisineType"
        placeholder="Select a cuisine type"
      >
        {data.map((cuisineType) => (
          <SelectItem key={cuisineType as Key}>{cuisineType}</SelectItem>
        ))}
      </Select>
    </>
  );
}

export default SelectCuisineType;
