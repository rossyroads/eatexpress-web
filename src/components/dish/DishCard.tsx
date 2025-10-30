import type { TDish } from '@/api/dish';
import { Button, Chip } from '@heroui/react';
import { Minus, Plus } from 'iconoir-react';

interface DishCardProps {
  dish: TDish;
}

export function DishCard({ dish }: DishCardProps) {
  const placeholderImage =
    'https://placehold.co/600x400/e2e8f0/94a3b8?text=Image+Not+Available';

  const handleAddToCart = () => {
    console.log(`Added ${dish.name} to basket`);
    // TODO handle add to cart
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row mb-6 md:h-44">
      {/* Dish Image */}
      <div className="md:w-1/3">
        <img
          src={dish.pictureUrl}
          alt={dish.name}
          className="w-full h-36 md:h-full object-cover"
          onError={(e) => (e.currentTarget.src = placeholderImage)}
        />
      </div>

      {/* Dish Details */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        {/* Top content area, make it scrollable if content overflows */}
        <div className="flex-1 overflow-y-auto mb-4">
          <div className="flex justify-between items-start mb-2">
            <div className="flex flex-row gap-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {dish.name}
              </h3>
              {/* Out of Stock Badge */}
              {dish.isOutOfStock && <Chip color="danger">Out of Stock</Chip>}
            </div>
            <span className="text-lg font-bold text-gray-900 whitespace-nowrap ml-4">
              ${dish.price}
            </span>
          </div>

          <p className="text-gray-600 text-sm">{dish.description}</p>
        </div>

        {/* Food Tags and Add Button */}
        <div className="flex justify-between items-end">
          <div className="flex flex-wrap mr-4 gap-1">
            {dish.foodTags.map((tagLabel) => (
              <Chip color="default">{tagLabel}</Chip>
            ))}
          </div>
          {dish.isOutOfStock ? (
            <Button
              isIconOnly
              aria-label="Can't add"
              color="default"
              isDisabled
              radius="full"
            >
              <Minus />
            </Button>
          ) : (
            <Button
              isIconOnly
              aria-label="Add"
              color="primary"
              radius="full"
              onPress={handleAddToCart}
            >
              <Plus />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
