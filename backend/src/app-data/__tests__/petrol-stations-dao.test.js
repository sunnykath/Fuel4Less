import { createPetrolStation } from './../petrol-stations-dao'

petrolStation1 = 1;
petrolStation2 = 1;
petrolStation3 = 1;

it('creates petrol station 1', async () => {
    expect(await createPetrolStation(petrolStation1)).toBe(false);
})