import { useState } from "react";
import axiosInstance from "../api/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
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

  const handleSubmit = async (e) => {
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

    const passwordTest = passwordRegex.test(formData.password);
    if (!passwordTest) {
      toast.error(
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character."
      );
    }

    console.log(formData);
    e.preventDefault();
    try {
      if (passwordTest) {
        const response = await axiosInstance.post(
          "/api/user/register",
          formData
        );
        if (response.status == 200) {
          toast.success("User saved  successfully");
          setTimeout(() => {
            navigate("/");
          }, 4000);
        }
      }
    } catch (err) {
      if (err.response.status == 400) {
        toast.error(err.response.data);
      }
      console.error(err);
    }
    // Handle form submission here
  };

  return (
    <div className="flex flex-wrap justify-center items-center h-screen bg-gray-100">
      <form
        className="bg-white shadow-md rounded px-8 py-6 w-96"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <div className="grid grid-cols-1 gap-4">
          <input
            required
            className="input"
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            className="input"
            required
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            className="input"
            required
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            className="input"
            required
            type="tel"
            placeholder="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <input
            className="input"
            required
            type="date"
            placeholder="Date of Birth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
          />
          <select
            className="input"
            required
            name="assembly"
            value={formData.assembly}
            onChange={handleChange}
          >
            <option value="">Select Assembly</option>
            <option value="Sample Assembly 1">Sample Assembly 1</option>
            <option value="Sample Assembly 2">Sample Assembly 2</option>
          </select>
          {/* Add similar select dropdowns for other fields */}

          <select
            className="input"
            required
            name="constituency"
            value={formData.constituency}
            onChange={handleChange}
          >
            <option value="">Select constituency</option>
            <option value="Sample constituency 1">Sample constituency 1</option>
            <option value="Sample constituency 2">Sample constituency 2</option>
          </select>

          <select
            className="input"
            required
            name="district"
            value={formData.district}
            onChange={handleChange}
          >
            <option value="">Select district</option>
            <option value="Sample district 1">Sample district 1</option>
            <option value="Sample district 2">Sample district 2</option>
          </select>

          <select
            className="input"
            name="panchayath"
            required
            value={formData.panchayath}
            onChange={handleChange}
          >
            <option value="">Select panchayath</option>
            <option value="Sample panchayath 1">Sample panchayath 1</option>
            <option value="Sample panchayath 2">Sample panchayath 2</option>
          </select>

          <select
            className="input"
            required
            name="municipality"
            value={formData.municipality}
            onChange={handleChange}
          >
            <option value="">Select municipality</option>
            <option value="Sample municipality 1">Sample municipality 1</option>
            <option value="Sample municipality 2">Sample municipality 2</option>
          </select>
          <select
            className="input"
            required
            name="corporation"
            value={formData.corporation}
            onChange={handleChange}
          >
            <option value="">Select corporation</option>
            <option value="Sample corporation 1">Sample corporation 1</option>
            <option value="Sample corporation 2">Sample corporation 2</option>
          </select>
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
