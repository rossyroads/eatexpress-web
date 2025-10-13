import { Form, Input, Checkbox, Button, addToast } from '@heroui/react';
import React from 'react';
import AddressFormPart from './address';
import { useCreateRestaurant } from '@/hooks/useRestaurant';
import type { TNewRestaurant, TRestaurant } from '@/api/restaurant';
import SelectCuisineType from './cuisine-type';
import ScheduleTableForm from './schedule';

const openingHours = [
  {
    dayOfWeek: 'MONDAY',
    timeFrom: '09:00:00',
    timeTo: '17:00:00',
    closedAllDay: 'false',
  },
  {
    dayOfWeek: 'TUESDAY',
    timeFrom: '09:00:00',
    timeTo: '17:00:00',
    closedAllDay: 'false',
  },
  {
    dayOfWeek: 'WEDNESDAY',
    timeFrom: '09:00:00',
    timeTo: '17:00:00',
    closedAllDay: 'false',
  },
  {
    dayOfWeek: 'THURSDAY',
    timeFrom: '09:00:00',
    timeTo: '17:00:00',
    closedAllDay: 'false',
  },
  {
    dayOfWeek: 'FRIDAY',
    timeFrom: '09:00:00',
    timeTo: '17:00:00',
    closedAllDay: 'false',
  },
  {
    dayOfWeek: 'SATURDAY',
    timeFrom: '09:00:00',
    timeTo: '12:00:00',
    closedAllDay: 'false',
  },
  {
    dayOfWeek: 'SUNDAY',
    timeFrom: '00:00:00',
    timeTo: '00:00:00',
    closedAllDay: 'true',
  },
];

type Errors = {
  name?: string;
  email?: string;
  password?: string;
  terms?: string;
  pictureUrl?: string;
};

export default function NewRestaurantForm() {
  const [submitted, setSubmitted] = React.useState<TRestaurant | null>(null);
  const [errors, setErrors] = React.useState<Errors>({});
  const { submitRestaurant } = useCreateRestaurant();

  // Real-time validation
  const onSubmit = async (e: {
    preventDefault: () => void;
    currentTarget: HTMLFormElement | undefined;
  }) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log(data);
    // Custom validation checks
    const newErrors: Errors = {};

    // Username validation
    if (data.name === 'admin') {
      newErrors.name = 'Nice try! Choose a different username';
    }

    if (data.terms !== 'true') {
      newErrors.terms = 'Accepting the terms is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);

      return;
    }

    data.openingHours = openingHours;

    // Clear errors and submit
    setErrors({});
    try {
      const a = await submitRestaurant(data as unknown as TNewRestaurant);
      setSubmitted(a);
    } catch {
      addToast({
        title: 'Error creating restaurant',
        description: 'Please try again',
        color: 'danger',
      });
    }
  };

  return (
    <Form
      className="w-full justify-center items-center space-y-4"
      validationErrors={errors}
      onReset={() => setSubmitted(null)}
      onSubmit={onSubmit}
    >
      <div className="flex flex-col gap-4 max-w-md">
        <ScheduleTableForm dailySchedule={openingHours} />
        <Input
          isRequired
          errorMessage={({ validationDetails }) => {
            if (validationDetails.valueMissing) {
              return 'Restaurant name required';
            }

            return errors.name;
          }}
          label="Restaurant name"
          labelPlacement="outside"
          name="name"
          placeholder="Enter restaurant name"
        />

        <Input
          isRequired
          errorMessage={({ validationDetails }) => {
            if (validationDetails.valueMissing) {
              return 'Contact email required';
            }
            if (validationDetails.typeMismatch) {
              return 'Enter a valid email address';
            }
          }}
          label="Contact email"
          labelPlacement="outside"
          name="contactEmail"
          placeholder="Enter restaurant email"
          type="email"
        />

        <AddressFormPart />

        <SelectCuisineType />

        <Input
          isRequired
          errorMessage={({ validationDetails }) => {
            if (validationDetails.valueMissing) {
              return 'Restaurant image required';
            }
            if (validationDetails.typeMismatch) {
              return 'Enter a valid url';
            }

            return errors.pictureUrl;
          }}
          label="Link to restaurant image"
          labelPlacement="outside"
          name="pictureUrl"
          placeholder="Enter restaurant image"
          type="url"
        />

        <Input
          isRequired
          errorMessage={({ validationDetails }) => {
            if (validationDetails.valueMissing) {
              return 'Default preparation time required';
            }
            if (validationDetails.badInput) {
              return 'Must be a number';
            }
          }}
          label="Default preparation time (minutes)"
          labelPlacement="outside"
          name="defaultPreparationTimeMinutes"
          placeholder="Enter default preparation time"
          type="number"
        />

        <Checkbox
          isRequired
          classNames={{
            label: 'text-small',
          }}
          isInvalid={!!errors.terms}
          name="terms"
          validationBehavior="aria"
          value="true"
          onValueChange={() =>
            setErrors((prev) => ({ ...prev, terms: undefined }))
          }
        >
          I agree to the terms and conditions
        </Checkbox>

        {errors.terms && (
          <span className="text-danger text-small">{errors.terms}</span>
        )}

        <div className="flex gap-4">
          <Button className="w-full" color="primary" type="submit">
            Submit
          </Button>
          <Button type="reset" variant="bordered">
            Reset
          </Button>
        </div>
      </div>

      {submitted && (
        <div className="text-small text-default-500 mt-4">
          Submitted data: <pre>{JSON.stringify(submitted, null, 2)}</pre>
        </div>
      )}
    </Form>
  );
}
