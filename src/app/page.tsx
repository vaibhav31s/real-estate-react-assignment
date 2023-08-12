import Image from "next/image";
import Card from "../../Components/Card";
import house from "../../img/house.jpg";
import { FaCalendar } from "react-icons/fa";
const additionalData = [
  {
    title: "Sunny Bungalow",
    address: "987 Sunshine Lane, Beachside Town",
    price: 1200,
    location: "Beachside Town",
    img: house, // Use appropriate image source
    beds: 2,
    bathrooms: 2,
    sqft: "6x7.5",
  },
  {
    title: "Urban Loft",
    address: "456 Loft Avenue, Metropolitan City",
    price: 2800,
    location: "Metropolitan City",
    img: house, // Use appropriate image source
    beds: 1,
    bathrooms: 1,
    sqft: "6x7.5",
  },
  {
    title: "Rustic Cabin",
    address: "123 Forest Road, Woodland Retreat",
    price: 9500,
    location: "Woodland Retreat",
    img: house, // Use appropriate image source
    beds: 2,
    bathrooms: 1,
    sqft: "6x7.5",
  },
  {
    title: "Lakefront Haven",
    address: "567 Lakeview Drive, Lakeside Village",
    price: 3200,
    location: "Lakeside Village",
    img: house, // Use appropriate image source
    beds: 3,
    bathrooms: 2,
    sqft: "6x7.5",
  },
  {
    title: "Country Estate",
    address: "789 Meadow Lane, Countryside",
    price: 5500,
    location: "Countryside",
    img: house, // Use appropriate image source
    beds: 4,
    bathrooms: 3,
    sqft: "6x7.5",
  },
  {
    title: "Country Estate",
    address: "789 Meadow Lane, Countryside",
    price: 5500,
    location: "Countryside",
    img: house, // Use appropriate image source
    beds: 4,
    bathrooms: 3,
    sqft: "6x7.5",
  },
];

export default function Home() {
  return (
    <div>
      <div className="flex  flex-row items-center justify-between p-10">
        <h1 className="text-4xl font-bold">Search properties to rent </h1>
        <select className=" rounded-lg text-sm  border-zinc-400 focus:ring-0 ">
          <option value="search-bar">Search with Search Bar</option>
          <option value="new york">New York, USA</option>
          <option value="chicago">Chicago, </option>
          <option value="san francisco">San Francisco, </option>
        </select>
      </div>
      <div className="divide-x  flex mx-auto flex-wrap  py-4  rounded-xl shadow-md justify-items-center justify-center   bg-white">
        <div className="px-10 ">
          <h1 className="text-gray-400">Location</h1>
          <select className="-ml-3 font-bold rounded-lg text-sm  border-none focus:ring-0 ">
            <option value="new york">New York, USA</option>
            <option value="chicago">Chicago, </option>
            <option value="san francisco">San Francisco, </option>
          </select>
        </div>

        <div className=" px-10 justify-items-center">
          <h1 className="text-gray-400">When</h1>
          <input type="date" className=" -ml-3 font-bold rounded-lg text-sm border-none focus:ring-0" id="birthday"  name="birthday"/>
        </div>
        <div className="px-10 grid grid--2 ">
          <h1 className="text-gray-400">Price</h1>
          <div className="w-full -ml-3">
           <select className="font-bold rounded-lg text-sm  border-none focus:ring-0">
            <option className="text-left" value="500-2,500"> $500-$2,500 </option>
            <option className="text-left" value="2500-3,500"> $2500-$3,500 </option>
            <option className="text-left" value="3500-5,500"> $3500-$5,500 </option>
          </select>
          </div>
        
        </div>
        <div className="px-10 grid grid-row">
          <h1 className="text-gray-400">Property Type</h1>
          <select className="font-bold -ml-3 rounded-lg text-sm  border-none focus:ring-0 ">
            <option value="houses"> Houses </option>
            <option value="apartment"> Apartment </option>
            <option value="condo"> Condo </option>
          </select>
        </div>
        <div className="px-10">
          <button className=" bg-indigo-600 rounded-lg px-10 py-4 text-white items-center justify-center">
            <span className="font-bold">Search</span>
          </button>
        </div>
      </div>

      <div className="flex mx-auto flex-wrap  gap-6   py-10 lg:justify-items-between sm:justify-items-center md:justify-items-center lg:justify-between sm:justify-center md:justify-center">
        {additionalData.map((data) => (
          <Card {...data} />
        ))}
      </div>
    </div>
  );
}
