import { Button, Label, Radio, TextInput } from "flowbite-react";
import ProfileSidebar from "../components/ProfileSidebar";
const Profile = () => {
  return (
    <>
      <div className="flex flex-wrap pt-16 gap-2 lg:gap-60 lg:justify-start">
        <ProfileSidebar />
        <div>
          <h2 className="text-center pt-12 text-3xl text-gray-500 font-bold mb-8">
            Profile
          </h2>
          <div className="flex flex-wrap gap-10 justify-center mt-14">
            <div className="flex flex-col">
              <img
                src="../../temp/profileimage.jpg"
                alt="profileImage"
                className="w-36 h-36 rounded-[50%]"
              />
              <Button color="gray" className="mt-2">
                Change Photo
              </Button>
            </div>
            <div>
              <h5 className="text-xl py-2 px-3 lg:px-0 font-bold">Name</h5>
              <div className="flex flex-wrap justify-center items-center mt-4">
                <TextInput
                  id="firstname"
                  placeholder="firstname"
                  type="text"
                  required
                  shadow
                  className="lg:mr-6 w-60"
                />
                <TextInput
                  id="lastname"
                  placeholder="lastname"
                  type="text"
                  required
                  shadow
                  className="lg:mr-6 w-60 mt-2 lg:mt-0"
                />
              </div>
              <div className="p-3 lg:p-0">
                <h5 className="text-xl mt-8 font-bold">Gender</h5>
                <div className="flex gap-6 mt-3">
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
              <div className="p-3 lg:p-0">
                <h5 className="text-xl mt-8 font-bold">Email Address</h5>
                <TextInput
                  id="email"
                  placeholder="youremail@email.com"
                  type="email"
                  required
                  shadow
                  className="mt-3"
                />
              </div>
              <div className="p-3 lg:p-0">
                <h5 className="text-xl mt-8 font-bold">Mobile Number</h5>
                <TextInput
                  id="phone"
                  placeholder="+1234567890"
                  type="email"
                  required
                  shadow
                  className="mt-3"
                />
              </div>
              <Button color="red" className="mt-10 mx-4 mb-20 lg:mx-0 lg:p-0">
                Delete Account
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
