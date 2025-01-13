import { Button, TextInput } from "flowbite-react";
import React from "react";

const SellerAccountManagement = () => {
  return (
    <div className="flex flex-wrap gap-10 justify-center mt-10">
      <div className="flex justify-start items-center flex-col">
        <img
          src="../../temp/profileimage.jpg"
          alt="profileImage"
          className="w-36 h-36 rounded-[50%]"
        />
        <Button color="gray" className="my-2">
          Change Photo
        </Button>
        <TextInput
          id="company"
          placeholder="Company name"
          type="text"
          required
          shadow
        />
      </div>
      <div className="p-2">
        <div className="border p-5 rounded-xl shadow">
          <p className="text-xl font-bold">Name</p>
          <div className="flex flex-wrap gap-8 justify-center items-center mt-4">
            <TextInput
              id="firstname"
              placeholder="firstname"
              type="text"
              required
              shadow
            />
            <TextInput
              id="lastname"
              placeholder="lastname"
              type="text"
              required
              shadow
            />
          </div>
        </div>
        <div className="p-5 border mt-8 rounded-xl shadow">
          <p className="text-xl font-bold">Gender</p>
          <div className="flex gap-6 mt-4">
            <div className="flex items-center gap-2">
              <input type="radio" checked />
              <p>Male</p>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" />
              <p>Female</p>
            </div>
          </div>
        </div>
        <div className="p-5 border mt-8 rounded-xl shadow ">
          <p className="text-xl font-bold mb-4">Email Address</p>
          <TextInput
            id="email"
            placeholder="youremail@email.com"
            type="email"
            required
            shadow
          />
        </div>
        <div className="p-5 border mt-8 rounded-xl shadow">
          <p className="text-xl mb-5 font-bold">Mobile Number</p>
          <TextInput
            id="phone"
            placeholder="+1234567890"
            type="email"
            required
            shadow
          />
        </div>
        <Button color="red" className="mt-10 mx-4 mb-20 lg:mx-0 lg:p-0">
          Delete Account
        </Button>
      </div>
    </div>
  );
};

export default SellerAccountManagement;
