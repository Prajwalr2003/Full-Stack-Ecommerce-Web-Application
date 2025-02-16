import { Button, Checkbox, Label, Spinner, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useRef, useState } from "react";
import axios from "axios";
import { useToast } from "../../context/ToastContext";

function Register() {
  let [isLoading, setIsLoading] = useState(false);
  const { showToast } = useToast();
  const navigate = useNavigate();
  let name = useRef(null);
  let email = useRef(null);
  let password = useRef(null);
  const handleRegistration = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    let registrationData = {
      fullname: name.current.value,
      email: email.current.value,
      password: password.current.value,
    };
    try {
      const response = await axios.post(
        "http://127.0.0.1:3000/api/v1/user/register",
        registrationData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status == 201) {
        showToast("User Registration Successfull", "success");
        navigate("/login");
      } else {
        showToast("User Registration Failed", "error");
      }
    } catch (error) {
      console.log("ERROR: Registration Failed", error);
    }

    setIsLoading(false);
  };
  return (
    <>
      <div className="p-4 pb-20 shadow">
        <form
          className="flex justify-center items-center min-h-screen"
          method="POST"
          onSubmit={handleRegistration}
        >
          <div className="py-10 border-b border-black dark:border-white rounded-lg w-[500px]">
            <div className="flex mb-6">
              <img
                src="../../temp/logo.png"
                className="h-6 sm:h-9"
                alt="E-COMMERCE Logo"
              />
              <span className="self-center whitespace-nowrap text-lg font-semibold dark:text-white lg:mt-2">
                E-COMMERCE
              </span>
            </div>
            <h2 className="text-4xl font-bold">Sign up</h2>
            <div className="mt-6">
              <div className="mb-2 block">
                <Label htmlFor="name" value="Full name" />
              </div>
              <TextInput
                id="name"
                type="text"
                placeholder="firstname middlename surname"
                ref={name}
                required
                shadow
              />
            </div>
            <div className="mt-4">
              <div className="mb-2 block">
                <Label htmlFor="email" value="Email" />
              </div>
              <TextInput
                id="email"
                type="email"
                placeholder="your@email.com"
                ref={email}
                required
                shadow
              />
            </div>
            <div className="mt-4">
              <div className="mb-2 block">
                <Label htmlFor="password" value="Password" />
              </div>
              <TextInput
                id="password"
                placeholder="**************"
                type="password"
                ref={password}
                required
                shadow
              />
            </div>
            <div className="flex items-center gap-2 mt-6">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <div className="mt-6">
              {!isLoading ? (
                <Button type="submit" className="w-full">
                  Sign Up
                </Button>
              ) : (
                <Button type="submit" color="dark" className="w-full">
                  <Spinner color="info" className="" />
                </Button>
              )}
            </div>
            <div className="flex mx-auto justify-center items-center mt-5">
              <div className="border-b w-[40%]"></div>
              <p className="text-md mt-4 mx-3 mb-4">OR</p>
              <div className="border-b w-[40%]"></div>
            </div>
            <Button color="gray" type="submit" className="mt-6 w-full">
              <FcGoogle className="mr-3 h-5 w-6" />
              Sign in with Google
            </Button>
            <span className="flex justify-center my-4">
              <p className="mx-2 p-1">Already have an account?</p>
              <Link
                to="/login"
                className="text-bold cursor-pointer hover:bg-gray-200 p-1 rounded-sm hover:text-black"
              >
                Sign in
                <div className="border w-[55px] mx-auto mt-1 border-black dark:border-white"></div>
              </Link>
            </span>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
