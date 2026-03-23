"use client";

import { useState } from "react";
import Link from "next/link";
import SocialProviders from "@/components/SocialProviders";

interface AuthFormProps {
  mode: "sign-in" | "sign-up";
}

export default function AuthForm({ mode }: AuthFormProps) {
  const [showPassword, setShowPassword] = useState(false);

  const isSignUp = mode === "sign-up";

  return (
    <div className="flex w-full flex-col items-center">
      {/* Toggle link */}
      <p className="mb-6 text-body text-dark-700">
        {isSignUp ? "Already have an account? " : "Don\u0027t have an account? "}
        <Link
          href={isSignUp ? "/sign-in" : "/sign-up"}
          className="font-[500] text-dark-900 underline underline-offset-2 transition-colors hover:text-dark-700"
        >
          {isSignUp ? "Sign In" : "Sign Up"}
        </Link>
      </p>

      {/* Heading */}
      <h1 className="text-center text-heading-3 font-[700] text-dark-900 md:text-heading-2">
        {isSignUp ? "Join Nike Today!" : "Welcome Back!"}
      </h1>
      <p className="mt-2 text-center text-body text-dark-700">
        {isSignUp
          ? "Create your account to start your journey"
          : "Please enter your details to sign in to your account"}
      </p>

      {/* Social providers */}
      <div className="mt-8 w-full">
        <SocialProviders />
      </div>

      {/* Divider */}
      <div className="my-6 flex w-full items-center gap-4">
        <div className="h-px flex-1 bg-light-300" />
        <span className="text-caption text-dark-500">
          Or {isSignUp ? "sign up" : "sign in"} with
        </span>
        <div className="h-px flex-1 bg-light-300" />
      </div>

      {/* Form */}
      <form className="w-full space-y-5" onSubmit={(e) => e.preventDefault()}>
        {/* Full Name (sign-up only) */}
        {isSignUp && (
          <div>
            <label
              htmlFor="fullName"
              className="mb-1.5 block text-body-medium font-[500] text-dark-900"
            >
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              autoComplete="name"
              required
              className="w-full rounded-full border border-light-300 bg-light-100 px-5 py-3 text-body text-dark-900 placeholder:text-dark-500 transition-colors focus:border-dark-900 focus:outline-none"
            />
          </div>
        )}

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-body-medium font-[500] text-dark-900"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="johndoe@gmail.com"
            autoComplete="email"
            required
            className="w-full rounded-full border border-light-300 bg-light-100 px-5 py-3 text-body text-dark-900 placeholder:text-dark-500 transition-colors focus:border-dark-900 focus:outline-none"
          />
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="mb-1.5 block text-body-medium font-[500] text-dark-900"
          >
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="minimum 8 characters"
              autoComplete={isSignUp ? "new-password" : "current-password"}
              minLength={8}
              required
              className="w-full rounded-full border border-light-300 bg-light-100 px-5 py-3 pr-12 text-body text-dark-900 placeholder:text-dark-500 transition-colors focus:border-dark-900 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-dark-500 transition-colors hover:text-dark-900"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full rounded-full bg-dark-900 px-6 py-3.5 text-body-medium font-[500] text-light-100 transition-colors hover:bg-dark-700"
        >
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
      </form>

      {/* Footer text */}
      {isSignUp ? (
        <p className="mt-6 text-center text-footnote text-dark-500">
          By signing up, you agree to our{" "}
          <Link href="#" className="text-dark-900 underline underline-offset-2">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="#" className="text-dark-900 underline underline-offset-2">
            Privacy Policy
          </Link>
        </p>
      ) : (
        <div className="mt-4 text-center">
          <Link
            href="#"
            className="text-body-medium font-[500] text-dark-900 underline underline-offset-2 transition-colors hover:text-dark-700"
          >
            Forgot password?
          </Link>
        </div>
      )}
    </div>
  );
}
