import { createPetrolStation } from "../app-data/petrol-stations-dao";

petrolStation1 = 1;
it('createStation', async () => {
    expect(await createPetrolStation(petrolStation1)).toBe(3);
})