import { Input, Select, SelectItem } from '@heroui/react';

function AddressFormPart() {
  return (
    <>
      <Input
        isRequired
        errorMessage={({ validationDetails }) => {
          if (validationDetails.valueMissing) {
            return 'Street name required';
          }
        }}
        label="Street"
        labelPlacement="outside"
        name="street"
        placeholder="Enter street name"
      />
      <Input
        isRequired
        errorMessage={({ validationDetails }) => {
          if (validationDetails.valueMissing) {
            return 'Street number required';
          }
          if (validationDetails.badInput) {
            return 'Must be a number';
          }
        }}
        label="House number"
        labelPlacement="outside"
        name="street_number"
        placeholder="Enter house number"
        type="number"
      />
      <Input
        isRequired
        errorMessage={({ validationDetails }) => {
          if (validationDetails.valueMissing) {
            return 'Postal code required';
          }
        }}
        label="Postal code"
        labelPlacement="outside"
        name="postalCode"
        placeholder="Enter postal code"
      />
      <Input
        isRequired
        errorMessage={({ validationDetails }) => {
          if (validationDetails.valueMissing) {
            return 'City required';
          }
        }}
        label="City"
        labelPlacement="outside"
        name="city"
        placeholder="Enter city"
      />
      <Select
        isRequired
        label="Country"
        labelPlacement="outside"
        name="country"
        placeholder="Select country"
      >
        <SelectItem key="ar">Argentina</SelectItem>
        <SelectItem key="us">United States</SelectItem>
        <SelectItem key="ca">Canada</SelectItem>
        <SelectItem key="uk">United Kingdom</SelectItem>
        <SelectItem key="au">Australia</SelectItem>
      </Select>
    </>
  );
}

export default AddressFormPart;
