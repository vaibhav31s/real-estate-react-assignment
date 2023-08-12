import Image from "next/image";
import Card from "../../Components/Card";
import house from "../../img/house.jpg";
import { FaCalendar } from "react-icons/fa";
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
          <h1>Location</h1>
          <select className=" rounded-lg text-sm  border-none focus:ring-0 ">
            <option value="new york">New York, USA</option>
            <option value="chicago">Chicago, </option>
            <option value="san francisco">San Francisco, </option>
          </select>
        </div>

        <div className=" px-10 justify-items-center">
          <h1>When</h1>
          <h1 className=" flex flex-row justify-items-center items-center text-center gap-2">
            Select Move-in Date{" "}
            <FaCalendar className="text-center text-indigo-500" />{" "}
          </h1>
        </div>
        <div className="px-10">
          <h1>Price</h1>
          <select className="rounded-lg text-sm  border-none focus:ring-0">
            <option value="500-2,500"> $500-$2,500 </option>
            <option value="2500-3,500"> $2500-$3,500 </option>
            <option value="3500-5,500"> $3500-$5,500 </option>
          </select>
        </div>
        <div className="px-10 grid grid-row">
          <h1>Property Type</h1>
          <select className="rounded-lg text-sm  border-none focus:ring-0 ">
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

      <div className="flex mx-auto flex-wrap  gap-8  pt-10 justify-items-center justify-center">
        {additionalData.map((data) => (
          <Card {...data} />
        ))}
      </div>
    </div>
  );
}
