// ESM
import { fakerFR as faker } from "@faker-js/faker";
import Customer from './Costumer';

const Customers = () => {
  const customersList = Array.from({ length: 100 }, () => ({
    id: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    phone: faker.phone.number(),
    job: faker.person.jobType()
  }));

  return (
    <div className='d-flex flex-wrap gap-2'>
      {customersList.map((customerData) => (
        <Customer data={customerData} key={customerData.id} />
      ))}
    </div>
  );
};
export default Customers;
