'use client';

import { useForm } from 'react-hook-form';

export default function MyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm();

  const onSubmit = async (data) => {
    //API call ko simulate karta hai
    await new Promise((resolve) => setTimeout(resolve, 4000));
    console.log('data===============>', data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 py-8 px-4 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-indigo-50/20"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f1f5f9' fill-opacity='0.4'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      <div className="relative max-w-2xl mx-auto">
        {/* Company Logo/Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full mb-4 shadow-lg">
            <span className="text-3xl font-bold text-white">Co</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Professional Registration</h1>
          <p className="text-gray-600 text-lg">
            Please complete all required fields to create your account
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden backdrop-blur-sm">
          {/* Progress Bar */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2"></div>

          {/* Header Section */}
          <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black px-8 py-8 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Account Registration</h2>
                <p className="text-gray-300">Complete your professional profile</p>
              </div>
              <div className="hidden md:flex items-center space-x-2 text-gray-400">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <div className="w-16 h-1 bg-gray-700 rounded"></div>
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-gray-400 text-sm font-bold">2</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="px-8 py-10">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Personal Information Section */}
              <div className="border-b border-gray-200 pb-8">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 text-xl">👤</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Personal Information</h3>
                    <p className="text-gray-600">Please provide your personal details</p>
                  </div>
                </div>

                {/* Name Fields Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div className="group">
                    <label className="block text-sm font-bold text-gray-800 mb-3 uppercase tracking-wide">
                      First Name <span className="text-red-600">*</span>
                    </label>
                    <div className="relative">
                      <input
                        {...register('firstName', {
                          required: 'First name is required',
                          minLength: {
                            value: 2,
                            message: 'First name must be at least 2 characters'
                          },
                          maxLength: {
                            value: 50,
                            message: 'First name cannot exceed 50 characters'
                          }
                        })}
                        placeholder="Enter your first name"
                        className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 bg-gray-50 hover:bg-white group-hover:border-blue-400 text-gray-900 font-medium"
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                    </div>
                    {errors.firstName && (
                      <p className="text-red-600 text-sm mt-2 flex items-center font-medium">
                        <span className="mr-2">⚠️</span>
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>

                  {/* Last Name */}
                  <div className="group">
                    <label className="block text-sm font-bold text-gray-800 mb-3 uppercase tracking-wide">
                      Last Name <span className="text-red-600">*</span>
                    </label>
                    <div className="relative">
                      <input
                        {...register('lastName', {
                          required: 'Last name is required',
                          minLength: {
                            value: 2,
                            message: 'Last name must be at least 2 characters'
                          },
                          maxLength: { value: 50, message: 'Last name cannot exceed 50 characters' }
                        })}
                        placeholder="Enter your last name"
                        className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 bg-gray-50 hover:bg-white group-hover:border-blue-400 text-gray-900 font-medium"
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                    </div>
                    {errors.lastName && (
                      <p className="text-red-600 text-sm mt-2 flex items-center font-medium">
                        <span className="mr-2">⚠️</span>
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Contact Information Section */}
              <div className="border-b border-gray-200 pb-8">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Contact Information</h3>
                    <p className="text-gray-600">How we can reach you</p>
                  </div>
                </div>

                {/* Email */}
                <div className="group mb-6">
                  <label className="block text-sm font-bold text-gray-800 mb-3 uppercase tracking-wide">
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Please enter a valid email address'
                        }
                      })}
                      placeholder="Enter your professional email"
                      className="w-full px-4 py-4 pl-12 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 bg-gray-50 hover:bg-white group-hover:border-blue-400 text-gray-900 font-medium"
                    />
                    <div className="absolute left-4 top-4 text-gray-500 text-xl">📧</div>
                  </div>
                  {errors.email && (
                    <p className="text-red-600 text-sm mt-2 flex items-center font-medium">
                      <span className="mr-2">⚠️</span>
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone and Age Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="group">
                    <label className="block text-sm font-bold text-gray-800 mb-3 uppercase tracking-wide">
                      Phone Number <span className="text-red-600">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        {...register('phone', {
                          required: 'Phone number is required',
                          pattern: {
                            value: /^[\+]?[1-9][\d]{0,15}$/,
                            message: 'Please enter a valid phone number'
                          }
                        })}
                        placeholder="Enter phone number"
                        className="w-full px-4 py-4 pl-12 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 bg-gray-50 hover:bg-white group-hover:border-blue-400 text-gray-900 font-medium"
                      />
                      <div className="absolute left-4 top-4 text-gray-500 text-xl">📱</div>
                    </div>
                    {errors.phone && (
                      <p className="text-red-600 text-sm mt-2 flex items-center font-medium">
                        <span className="mr-2">⚠️</span>
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* Age */}
                  <div className="group">
                    <label className="block text-sm font-bold text-gray-800 mb-3 uppercase tracking-wide">
                      Age <span className="text-red-600">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        {...register('age', {
                          required: 'Age is required',
                          min: { value: 18, message: 'You must be at least 18 years old' },
                          max: { value: 120, message: 'Please enter a valid age' }
                        })}
                        placeholder="Enter your age"
                        className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 bg-gray-50 hover:bg-white group-hover:border-blue-400 text-gray-900 font-medium"
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                    </div>
                    {errors.age && (
                      <p className="text-red-600 text-sm mt-2 flex items-center font-medium">
                        <span className="mr-2">⚠️</span>
                        {errors.age.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Gender */}
                <div className="group mt-6">
                  <label className="block text-sm font-bold text-gray-800 mb-3 uppercase tracking-wide">
                    Gender <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <select
                      {...register('gender', { required: 'Please select your gender' })}
                      className="w-full px-4 py-4 pl-12 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 bg-gray-50 hover:bg-white group-hover:border-blue-400 appearance-none text-gray-900 font-medium"
                    >
                      <option value="">Select your gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="absolute left-4 top-4 text-gray-500 text-xl">👤</div>
                    <div className="absolute right-4 top-4 text-gray-500 text-xl">⌄</div>
                  </div>
                  {errors.gender && (
                    <p className="text-red-600 text-sm mt-2 flex items-center font-medium">
                      <span className="mr-2">⚠️</span>
                      {errors.gender.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Security Section */}
              <div className="border-b border-gray-200 pb-8">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-red-600 text-xl">🔒</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Security Credentials</h3>
                    <p className="text-gray-600">Create a secure password for your account</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200">
                  <div className="space-y-6">
                    {/* Password */}
                    <div className="group">
                      <label className="block text-sm font-bold text-gray-800 mb-3 uppercase tracking-wide">
                        Password <span className="text-red-600">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="password"
                          {...register('password', {
                            required: 'Password is required',
                            minLength: {
                              value: 8,
                              message: 'Password must be at least 8 characters'
                            },
                            pattern: {
                              value:
                                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
                              message:
                                'Password must contain uppercase, lowercase, number, and special character'
                            }
                          })}
                          placeholder="Create a strong password"
                          className="w-full px-4 py-4 pl-12 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 bg-white hover:bg-gray-50 group-hover:border-blue-400 text-gray-900 font-medium"
                        />
                        <div className="absolute left-4 top-4 text-gray-500 text-xl">🔐</div>
                      </div>
                      {errors.password && (
                        <p className="text-red-600 text-sm mt-2 flex items-center font-medium">
                          <span className="mr-2">⚠️</span>
                          {errors.password.message}
                        </p>
                      )}
                    </div>

                    {/* Confirm Password */}
                    <div className="group">
                      <label className="block text-sm font-bold text-gray-800 mb-3 uppercase tracking-wide">
                        Confirm Password <span className="text-red-600">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="password"
                          {...register('confirmPassword', {
                            required: 'Please confirm your password',
                            validate: (value, formValues) =>
                              value === formValues.password || 'Passwords do not match'
                          })}
                          placeholder="Confirm your password"
                          className="w-full px-4 py-4 pl-12 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 bg-white hover:bg-gray-50 group-hover:border-blue-400 text-gray-900 font-medium"
                        />
                        <div className="absolute left-4 top-4 text-gray-500 text-xl">🔐</div>
                      </div>
                      {errors.confirmPassword && (
                        <p className="text-red-600 text-sm mt-2 flex items-center font-medium">
                          <span className="mr-2">⚠️</span>
                          {errors.confirmPassword.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="border-b border-gray-200 pb-8">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-purple-600 text-xl">🌐</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Additional Information</h3>
                    <p className="text-gray-600">Optional professional details</p>
                  </div>
                </div>

                {/* Website */}
                <div className="group">
                  <label className="block text-sm font-bold text-gray-800 mb-3 uppercase tracking-wide">
                    Website <span className="text-gray-500">(Optional)</span>
                  </label>
                  <div className="relative">
                    <input
                      type="url"
                      {...register('website', {
                        pattern: {
                          value: /^https?:\/\/.+\..+/,
                          message: 'Please enter a valid URL (starting with http:// or https://)'
                        }
                      })}
                      placeholder="https://yourwebsite.com"
                      className="w-full px-4 py-4 pl-12 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 bg-gray-50 hover:bg-white group-hover:border-blue-400 text-gray-900 font-medium"
                    />
                    <div className="absolute left-4 top-4 text-gray-500 text-xl">🌐</div>
                  </div>
                  {errors.website && (
                    <p className="text-red-600 text-sm mt-2 flex items-center font-medium">
                      <span className="mr-2">⚠️</span>
                      {errors.website.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Agreement Section */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 text-xl">📋</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Terms & Preferences</h3>
                    <p className="text-gray-600">Please review and accept our terms</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Terms and Conditions */}
                  <div className="flex items-start p-4 bg-white rounded-xl border border-blue-200">
                    <input
                      type="checkbox"
                      {...register('terms', {
                        required: 'You must accept the terms and conditions'
                      })}
                      className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-2 border-gray-400 rounded mt-1 transition duration-200"
                    />
                    <label className="ml-4 block text-sm text-gray-800 font-medium">
                      I hereby agree to the{' '}
                      <span className="text-blue-600 font-bold hover:underline cursor-pointer">
                        Terms and Conditions
                      </span>{' '}
                      and{' '}
                      <span className="text-blue-600 font-bold hover:underline cursor-pointer">
                        Privacy Policy
                      </span>{' '}
                      of this service <span className="text-red-600">*</span>
                    </label>
                  </div>
                  {errors.terms && (
                    <p className="text-red-600 text-sm ml-4 flex items-center font-medium">
                      <span className="mr-2">⚠️</span>
                      {errors.terms.message}
                    </p>
                  )}

                  {/* Newsletter */}
                  <div className="flex items-start p-4 bg-white rounded-xl border border-blue-200">
                    <input
                      type="checkbox"
                      {...register('newsletter')}
                      className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-2 border-gray-400 rounded mt-1 transition duration-200"
                    />
                    <label className="ml-4 block text-sm text-gray-800 font-medium">
                      I would like to receive newsletters, updates, and promotional materials about
                      products and services
                    </label>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full font-bold py-5 px-8 rounded-xl focus:outline-none focus:ring-4 transition duration-300 transform shadow-2xl border ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed text-gray-600 border-gray-400'
                      : 'bg-gradient-to-r from-gray-800 via-gray-900 to-black hover:from-gray-900 hover:via-black hover:to-gray-800 text-white focus:ring-gray-300 hover:scale-105 hover:shadow-3xl border-gray-700'
                  }`}
                >
                  <span className="flex items-center justify-center text-lg">
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-600 mr-3"></div>
                        PROCESSING APPLICATION...
                      </>
                    ) : (
                      <>
                        <span className="mr-3 text-2xl">🚀</span>
                        SUBMIT APPLICATION
                      </>
                    )}
                  </span>
                </button>
              </div>

              {/* Footer */}
              <div className="text-center pt-6 border-t border-gray-200">
                <p className="text-gray-600 font-medium">
                  Already have an account?{' '}
                  <span className="text-blue-600 font-bold hover:underline cursor-pointer">
                    Sign In Here
                  </span>
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  By submitting this form, you acknowledge that you have read and understood our
                  terms of service.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
