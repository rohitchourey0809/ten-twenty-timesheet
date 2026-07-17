'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

import Button from '@/components/ui/Button';
import Checkbox from '@/components/ui/Checkbox';
import Input from '@/components/ui/Input';
import { loginSchema, LoginSchema } from '@/lib/login-schema';

export default function LoginPage() {
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
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (
      data.email === 'admin@tentwenty.com' &&
      data.password === 'password123'
    ) {
      sessionStorage.setItem('token', 'dummy-jwt-token');

      toast.success('Login Successful!');
      window.location.href = '/dashboard';
    } else {
      toast.error('Invalid email or password');
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* LEFT PANEL */}
        <section className="flex items-center justify-center bg-white">
          <div className="w-full max-w-[540px] px-20">
            {/* Logo */}
            <div className="mb-10">
              <h1 className="text-[54px] font-bold tracking-tight text-[#2F66F6]">
                ticktock
              </h1>
            </div>

            {/* Heading */}
            <div className="mb-10">
              <h2 className="text-[64px] font-bold leading-none text-[#111827]">
                Welcome back
              </h2>

              <p className="mt-3 text-[24px] text-gray-500">
                Sign in to continue
              </p>
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

              <Button
                type="submit"
                loading={isSubmitting}
                className="h-12 w-full rounded-lg bg-[#2F66F6] text-base font-semibold"
              >
                Sign In
              </Button>
            </form>

            {/* Demo Credentials */}
            <div className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-5">
              <h3 className="mb-3 text-lg font-semibold text-blue-700">
                Demo Credentials
              </h3>

              <p className="text-sm text-gray-700">
                <span className="font-semibold">Email:</span>{' '}
                admin@tentwenty.com
              </p>

              <p className="mt-0.5 text-xs text-gray-700">
                <span className="font-semibold">Password:</span> password123
              </p>
            </div>
          </div>
        </section>

        {/* RIGHT PANEL */}
        <section className="hidden lg:flex items-center justify-center bg-[#2F66F6]">
          <div className="max-w-[520px] px-12">
            <h2 className="text-[88px] font-bold leading-none text-white">
              ticktock
            </h2>

            <p className="mt-10 text-[28px] leading-[58px] text-white/90">
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
