import { useState } from "react";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    dateOfBirth: "",
    assembly: "",
    constituency: "",
    district: "",
    panchayath: "",
    municipality: "",
    corporation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="flex flex-wrap justify-center items-center h-screen bg-gray-100">
      <form className="bg-white shadow-md rounded px-8 py-6 w-96" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <div className="grid grid-cols-1 gap-4">
          <input
            className="input"
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            className="input"
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            className="input"
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            className="input"
            type="tel"
            placeholder="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <input
            className="input"
            type="date"
            placeholder="Date of Birth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
          />
          <input
            className="input"
            type="text"
            placeholder="Assembly"
            name="assembly"
            value={formData.assembly}
            onChange={handleChange}
          />
          <input
            className="input"
            type="text"
            placeholder="Constituency"
            name="constituency"
            value={formData.constituency}
            onChange={handleChange}
          />
          <input
            className="input"
            type="text"
            placeholder="District"
            name="district"
            value={formData.district}
            onChange={handleChange}
          />
          <input
            className="input"
            type="text"
            placeholder="Panchayath"
            name="panchayath"
            value={formData.panchayath}
            onChange={handleChange}
          />
          <input
            className="input"
            type="text"
            placeholder="Municipality"
            name="municipality"
            value={formData.municipality}
            onChange={handleChange}
          />
          <input
            className="input"
            type="text"
            placeholder="Corporation"
            name="corporation"
            value={formData.corporation}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-center mt-6">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
