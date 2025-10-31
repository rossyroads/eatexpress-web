import { Input, Select, SelectItem } from '@heroui/react';

function AddressForm() {
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
        name="address.street"
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
        name="address.houseNumber"
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
        name="address.postalCode"
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
        name="address.city"
        placeholder="Enter city"
      />
      <Select
        isRequired
        label="Country"
        labelPlacement="outside"
        name="address.country"
        placeholder="Select country"
      >
        <SelectItem key="Belgium">Belgium</SelectItem>
        <SelectItem key="France">France</SelectItem>
        <SelectItem key="Netherlands">Netherlands</SelectItem>
        <SelectItem key="United Kingdom">United Kingdom</SelectItem>
      </Select>
    </>
  );
}

export default AddressForm;
