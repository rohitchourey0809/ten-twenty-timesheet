'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

import Button from '@/components/ui/Button';
import Checkbox from '@/components/ui/Checkbox';
import Input from '@/components/ui/Input';
import { loginSchema, LoginSchema } from '@/lib/login-schema';

export default function LoginPage() {
  //   const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: LoginSchema) => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (
      data.email === 'admin@tentwenty.com' &&
      data.password === 'password123'
    ) {
      sessionStorage.setItem('token', 'dummy-jwt-token');

      toast.success('Login Successful!');
      window.location.href = '/dashboard';
      //   router.push("/dashboard");
    } else {
      toast.error('Invalid email or password');
    }
  };

  return (
    <main className="min-h-screen bg-[#F8F9FB]">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left */}
        <section className="flex items-center justify-center bg-white px-8 py-12">
          <div className="w-full max-w-md">
            {/* Logo */}
            <div className="mb-16">
              <h1 className="text-3xl font-bold text-[#2F66F6]">ticktock</h1>
            </div>

            {/* Heading */}
            <div className="mb-10">
              <h2 className="text-4xl font-bold text-gray-900">Welcome back</h2>

              <p className="mt-2 text-gray-500">Sign in to continue</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <Input
                label="Email"
                type="email"
                placeholder="name@example.com"
                {...register('email')}
                error={errors.email?.message?.toString()}
              />

              <Input
                label="Password"
                type="password"
                placeholder="••••••••"
                {...register('password')}
                error={errors.password?.message?.toString()}
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

              <Button type="submit" loading={isSubmitting}>
                Sign In
              </Button>
            </form>

            {/* Demo Credentials */}
            <div className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-4">
              <h3 className="mb-2 font-semibold text-blue-700">
                Demo Credentials
              </h3>

              <p className="text-sm">
                <strong>Email:</strong> admin@tentwenty.com
              </p>

              <p className="text-sm">
                <strong>Password:</strong> password123
              </p>
            </div>
          </div>
        </section>

        {/* Right */}
        <section className="hidden lg:flex items-center justify-center bg-[#2F66F6] px-20">
          <div className="max-w-lg">
            <h2 className="mb-8 text-6xl font-bold text-white">ticktock</h2>

            <p className="text-lg leading-9 text-blue-100">
              Introducing ticktock, our cutting-edge timesheet management
              application. Track employee work hours, manage weekly timesheets,
              and monitor productivity with a clean and modern interface.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
