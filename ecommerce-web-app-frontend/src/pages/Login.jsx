import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <form className="flex justify-center items-center h-[100vh]">
        <div className="p-10 border-b border-black dark:border-white rounded-lg w-[500px] lg:h-[650px shadow">
          <div className="flex mb-6">
            <img
              src="../../temp/logo.png"
              className="h-6 sm:h-9"
              alt="E-COMMERCE Logo"
            />
            <span className="self-center whitespace-nowrap text-lg font-semibold dark:text-white mt-2">
              E-COMMERCE
            </span>
          </div>
          <h2 className="text-4xl font-bold">Sign in</h2>
          <div className="mt-6">
            <div className="mb-2 block">
              <Label htmlFor="email" value="Email" />
            </div>
            <TextInput
              id="email"
              type="email"
              placeholder="your@email.com"
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
              required
              shadow
            />
          </div>
          <div className="flex items-center gap-2 mt-6">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button type="submit" className="mt-6 w-full">
            Sign In
          </Button>
          <Link to="#">
            <p className="text-center text-sm mt-5 ">Forgot your password?</p>
            <div className="border-b w-[170px] mx-auto mt-1"></div>
          </Link>
          <div className="flex mx-auto justify-center items-center mt-3">
            <div className="border-b w-[40%]"></div>
            <p className="text-md mt-4 mx-3 mb-4">OR</p>
            <div className="border-b w-[40%]"></div>
          </div>
          <Button color="gray" type="submit" className="mt-3 w-full">
            <FcGoogle className="mr-3 h-5 w-6" />
            Sign in with Google
          </Button>
          <span className="flex justify-center my-4">
            <p className="mx-2 p-1">Don't have an account?</p>
            <Link
              to="/sign-up"
              className="text-bold cursor-pointer hover:bg-gray-200 p-1 rounded-sm hover:text-black"
            >
              Sign up
              <div className="border w-[60px] mx-auto mt-1 border-black dark:border-white"></div>
            </Link>
          </span>
        </div>
      </form>
    </>
  );
}

export default Login;
