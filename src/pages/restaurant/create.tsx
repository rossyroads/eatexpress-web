import NewRestaurantForm from '@/components/forms/new-restaurant';

function CreateRestaurantPage() {
  return (
    <div className="flex flex-col">
      <div className="text-3xl text-center pb-10">Add Your Restaurant</div>
      <NewRestaurantForm />
    </div>
  );
}

export default CreateRestaurantPage;
