"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "@/components/ui/Button";
import Checkbox from "@/components/ui/Checkbox";
import Input from "@/components/ui/Input";
import { loginSchema, LoginSchema } from "@/lib/login-schema";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginSchema) => {
    try {
      console.log("Login Data:", data);

      // Next Step:
      // signIn("credentials", {
      //   email: data.email,
      //   password: data.password,
      //   redirect: false,
      // });

      alert("Login Successful (Mock)");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="min-h-screen bg-[#F8F9FB]">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left Section */}
        <section className="flex items-center justify-center bg-white px-8 py-12">
          <div className="w-full max-w-md">
            {/* Logo */}
            <div className="mb-16">
              <h1 className="text-3xl font-bold tracking-tight text-[#2F66F6]">
                ticktock
              </h1>
            </div>

            {/* Heading */}
            <div className="mb-10">
              <h2 className="text-4xl font-bold text-gray-900">
                Welcome back
              </h2>

              <p className="mt-2 text-gray-500">
                Sign in to your account
              </p>
            </div>

            {/* Login Form */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <Input
                label="Email"
                type="email"
                placeholder="name@example.com"
                {...register("email")}
                error={errors.email?.message?.toString()}
              />

              <Input
                label="Password"
                type="password"
                placeholder="••••••••"
                {...register("password")}
                error={errors?.password?.message?.toString()}
              />

              <div className="flex items-center justify-between">
                <Checkbox label="Remember me" />

                <button
                  type="button"
                  className="text-sm font-medium text-[#2F66F6] hover:underline"
                >
                  Forgot Password?
                </button>
              </div>

              <Button
                type="submit"
                loading={isSubmitting}
              >
                Sign In
              </Button>
            </form>

            {/* Demo Credentials */}
            <div className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-4">
              <h3 className="mb-2 font-semibold text-blue-700">
                Demo Credentials
              </h3>

              <p className="text-sm text-gray-700">
                Email: <strong>admin@tentwenty.com</strong>
              </p>

              <p className="text-sm text-gray-700">
                Password: <strong>password123</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Right Section */}
        <section className="hidden lg:flex items-center justify-center bg-[#2F66F6] px-20">
          <div className="max-w-lg">
            <h2 className="mb-8 text-6xl font-bold text-white">
              ticktock
            </h2>

            <p className="text-lg leading-9 text-blue-100">
              Introducing ticktock, our cutting-edge timesheet web application
              designed to revolutionize how you manage employee work hours.
              With ticktock, you can effortlessly track and monitor employee
              attendance and productivity from anywhere, anytime, using any
              internet-connected device.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}