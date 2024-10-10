var pets = [
  { name: "Polly", species: "bird", age: 1, adopted: false, adoptedDate: "", adoptionFee: 560 },
  { name: "Fluffy", species: "dog", age: 4, adopted: true, adoptedDate: "2023-03-27",adoptionFee: 890 },
  { name: "Daisy", species: "dog", age: 9, adopted: true, adoptedDate: "2021-01-05", adoptionFee: 780 },
  { name: "Coco", species: "rabbit", age: 3, adopted: true, adoptedDate: "2019-01-30", adoptionFee: 615 },
  { name: "Simba", species: "cat", age: 4, adopted: true, adoptedDate: "2019-09-30", adoptionFee: 995 },
  { name: "Oreo", species: "rabbit", age: 4, adopted: false, adoptedDate: "", adoptionFee: 605 },
  { name: "Bella", species: "cat", age: 6, adopted: false, adoptedDate: "", adoptionFee: 810 },
  { name: "Milo", species: "bird", age: 3, adopted: false, adoptedDate: "", adoptionFee: 740 },
  { name: "Buddy", species: "dog", age: 10, adopted: true, adoptedDate: "2021-02-01", adoptionFee: 735 },
  { name: "Pebbles", species: "bird", age: 4, adopted: false, adoptedDate: "", adoptionFee: 505 },
];

class PetHandler
{
  constructor(arr)
  {
    this.pets = arr;
  }

  findPetsInAgeRange(minAge, maxAge)
  {
    return this.pets.filter((pet) => pet.age >= minAge && pet.age <= maxAge);
  }

  listAdoptedPetsByDate()
  {
    let filteredPets = this.pets.filter((pet) => pet.adopted === true);

    filteredPets.sort((a, b) => new Date(b.adoptedDate) - new Date(a.adoptedDate));

    return filteredPets;
  }

  ListPets(...args)
  {
    let petList; 
    if(args.length === 0)
    {
      petList = this.pets;
    }
    else if(args.length === 1 && Array.isArray(args[0]))
    {
      petList = args[0];
    }
    else
    {
      petList = args;
    }
    

    const createPetItem = (pet) => 
    {
      let build = `${pet.name} | ${pet.species} | Age: ${pet.age}`;

      if(pet.adopted === true)
      {
        build += ` | Adopted!`;
      }

      return build;
    };

    return petList.map(createPetItem);
  }

  calculateUniqueAdoptionFee(...petNames)
  {
    const names = this.pets.filter((pet, i, arr) => {
      return petNames.includes(pet.name) && arr.findIndex((curr) => curr.name === pet.name) === i;
    });

    const total = names.reduce((sum, pet) =>  sum + pet.adoptionFee, 0)

    return total;
  }
}

//task 2
Array.prototype.findPetsInAgeRange = function(minAge, maxAge) 
{
  return new PetHandler(this).findPetsInAgeRange(minAge, maxAge);
};

Array.prototype.listAdoptedPetsByDate = function() 
{
  return new PetHandler(this).listAdoptedPetsByDate();
};

Array.prototype.ListPets = function(...args) 
{
  return new PetHandler(this).ListPets(...args);
};

Array.prototype.calculateUniqueAdoptionFee = function(...petNames) 
{
  return new PetHandler(this).calculateUniqueAdoptionFee(...petNames);
};

//testing
// console.log(`Pets in ragenge 5 - 9: \n${pets.findPetsInAgeRange(5, 9).ListPets()}`);

// console.log(`Adopted dates: \n${pets.listAdoptedPetsByDate().ListPets()}`);

// console.log(`Adoption price Poly, Fluffy, Daisy: \n${pets.calculateUniqueAdoptionFee("Poly", "Fluffy", "Daisy")}`);