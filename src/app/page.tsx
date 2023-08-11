import Image from "next/image";
import Card from "../../Components/Card";
import house from "../../img/house.jpg";
const additionalData = [
  {
    title: "Sunny Bungalow",
    address: "987 Sunshine Lane, Beachside Town",
    price: 120000,
    location: "Beachside Town",
    img: house, // Use appropriate image source
    beds: 2,
    bathrooms: 2,
    sqft: "1100 sqft",
  },
  {
    title: "Urban Loft",
    address: "456 Loft Avenue, Metropolitan City",
    price: 280000,
    location: "Metropolitan City",
    img: house, // Use appropriate image source
    beds: 1,
    bathrooms: 1,
    sqft: "900 sqft",
  },
  {
    title: "Rustic Cabin",
    address: "123 Forest Road, Woodland Retreat",
    price: 95000,
    location: "Woodland Retreat",
    img: house, // Use appropriate image source
    beds: 2,
    bathrooms: 1,
    sqft: "700 sqft",
  },
  {
    title: "Lakefront Haven",
    address: "567 Lakeview Drive, Lakeside Village",
    price: 320000,
    location: "Lakeside Village",
    img: house, // Use appropriate image source
    beds: 3,
    bathrooms: 2,
    sqft: "1800 sqft",
  },
  {
    title: "Country Estate",
    address: "789 Meadow Lane, Countryside",
    price: 550000,
    location: "Countryside",
    img: house, // Use appropriate image source
    beds: 4,
    bathrooms: 3,
    sqft: "4000 sqft",
  },
  // Add more data objects here...
];

export default function Home() {
  return (
    <div>
      <div className="flex  flex-row items-center justify-between p-16">
        <h1 className="text-4xl font-bold">Search properties to rent </h1>
        <input
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder=" Search with Search Bar "
        />
      </div>
      <div className="flex mx-auto flex-wrap  gap-6 justify-items-center justify-center text-center divide-x bg-white">
        <div className="mx-auto" >
          <h1>Location</h1>
          <select className="border-2 border-gray-300 bg-white rounded-lg text-sm focus:outline-none">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div className="mx-auto" >
          <h1>Location</h1>
          <select className="border-2 border-gray-300  rounded-lg text-sm focus:outline-none">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div className="mx-auto" >
          <h1>Location</h1>
          <select className="border-2 border-gray-300 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div className="mx-auto" >
          <h1>Location</h1>
          <select className="border-2   rounded-lg text-sm focus:outline-none">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
      </div>

      <div className="flex mx-auto flex-wrap  gap-6 justify-items-center justify-center">
        {additionalData.map((data) => (
          <Card {...data} />
        ))}
      </div>
    </div>
  );
}
