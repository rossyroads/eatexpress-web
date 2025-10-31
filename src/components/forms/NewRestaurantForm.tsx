import { Form, Input, Checkbox, Button, addToast } from '@heroui/react';
import React, { useState } from 'react';
import AddressForm from './AddressForm';
import { useCreateRestaurant } from '@/hooks/useRestaurant';
import type { TDailySchedule } from '@/api/restaurant';
import CuisineTypeSelect from './CuisineTypeSelect';
import ScheduleTableForm from '@/components/schedule/ScheduleTableForm';
import { useNavigate } from 'react-router-dom';

const scheduleTemplate: TDailySchedule[] = [
  {
    dayOfWeek: 'MONDAY',
    timeFrom: '00:00:00',
    timeTo: '00:00:00',
    closedAllDay: true,
  },
  {
    dayOfWeek: 'TUESDAY',
    timeFrom: '00:00:00',
    timeTo: '00:00:00',
    closedAllDay: true,
  },
  {
    dayOfWeek: 'WEDNESDAY',
    timeFrom: '00:00:00',
    timeTo: '00:00:00',
    closedAllDay: true,
  },
  {
    dayOfWeek: 'THURSDAY',
    timeFrom: '00:00:00',
    timeTo: '00:00:00',
    closedAllDay: true,
  },
  {
    dayOfWeek: 'FRIDAY',
    timeFrom: '00:00:00',
    timeTo: '00:00:00',
    closedAllDay: true,
  },
  {
    dayOfWeek: 'SATURDAY',
    timeFrom: '00:00:00',
    timeTo: '00:00:00',
    closedAllDay: true,
  },
  {
    dayOfWeek: 'SUNDAY',
    timeFrom: '00:00:00',
    timeTo: '00:00:00',
    closedAllDay: true,
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
  const navigate = useNavigate();
  const [errors, setErrors] = React.useState<Errors>({});
  const { submitRestaurant } = useCreateRestaurant();
  const [scheduleItems, setScheduleItems] =
    useState<TDailySchedule[]>(scheduleTemplate);

  const nestFormData = (flat: Record<string, FormDataEntryValue>) => {
    const out: any = {};
    for (const [k, v] of Object.entries(flat)) {
      if (k.startsWith('address.')) {
        out.address = out.address || {};
        const sub = k.split('.')[1];
        out.address[sub] = typeof v === 'string' ? v.trim() : v;
      } else {
        out[k] = typeof v === 'string' ? v.trim() : v;
      }
    }
    // optional: convert numeric fields
    if (out.age) out.age = Number(out.age) || undefined;
    return out;
  };

  // Real-time validation
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const data = Object.fromEntries(new FormData(e.currentTarget));
    const flat = Object.fromEntries(new FormData(e.currentTarget)) as Record<
      string,
      FormDataEntryValue
    >;
    const data = nestFormData(flat);
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

    // @ts-ignore
    data.openingHours = scheduleItems;

    // Clear errors and submit
    setErrors({});
    try {
      // @ts-ignore
      const newRestaurant = await submitRestaurant(data);
      if (newRestaurant) {
        addToast({
          title: 'Restaurant created successfully',
          color: 'success',
        });
        navigate('/r');
      }
    } catch (e) {
      addToast({
        title: 'Error creating restaurant',
        // @ts-ignore
        description: e.response.data.detail,
        color: 'danger',
      });
    }
  };

  return (
    <Form
      className="w-full justify-center items-center space-y-4"
      validationErrors={errors}
      onReset={() => {
        setScheduleItems(scheduleTemplate);
      }}
      onSubmit={onSubmit}
    >
      <div className="flex flex-col gap-4 max-w-md">
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

        <AddressForm />

        <CuisineTypeSelect />

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

        <ScheduleTableForm
          scheduleItems={scheduleItems}
          setScheduleItems={setScheduleItems}
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
    </Form>
  );
}
