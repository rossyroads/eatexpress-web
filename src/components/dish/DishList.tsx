import type { TDish } from '@/api/dish';
import { DishCard } from './DishCard';

interface DishListProps {
  dishes: TDish[];
}

export function DishList({ dishes }: DishListProps) {
  // Group dishes by type using a reducer
  const dishesByType = dishes.reduce(
    (acc, dish) => {
      const type = dish.type || 'Other';
      if (!acc[type]) {
        acc[type] = [];
      }
      acc[type].push(dish);
      return acc;
    },
    {} as Record<string, TDish[]>
  );

  // Define a preferred order for sections
  const preferredOrder = [
    'Starter',
    'Main Course',
    'Dessert',
    'Side Dish',
    'Beverage',
    'Soup',
    'Salad',
    'Appetizer',
  ];

  // Sort the keys (dish types) based on the preferred order
  const sortedTypes = Object.keys(dishesByType).sort((a, b) => {
    const indexA = preferredOrder.indexOf(a);
    const indexB = preferredOrder.indexOf(b);

    if (indexA !== -1 && indexB !== -1) return indexA - indexB; // Both in preferred list
    if (indexA !== -1) return -1; // Only A is in list
    if (indexB !== -1) return 1; // Only B is in list
    return a.localeCompare(b); // Neither in list, sort alphabetically
  });

  return (
    <div className="w-full">
      {sortedTypes.map((type) => (
        <section key={type} className="mb-12">
          {/* Section Header */}
          <h2 className="text-2xl font-bold text-gray-900 pb-5">{type}s</h2>

          {/* List of Dish Cards for this section */}
          <div className="grid grid-cols-1 gap-6">
            {dishesByType[type].map((dish) => (
              <DishCard key={dish.uuid} dish={dish} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
