'use client';

import Image from 'next/image';
import Link from 'next/link';
import ComponentPage from './_components/page';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome Home</h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Navigate through our different sections using the links below.
          </p>
        </div>

        <ComponentPage />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <Link href="/about" className="block">
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">About</h3>
              <p className="text-gray-600">Learn more about us</p>
            </div>
          </Link>

          <Link href="/services" className="block">
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Services</h3>
              <p className="text-gray-600">Explore our services</p>
            </div>
          </Link>

          <Link href="/blog" className="block">
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Blog</h3>
              <p className="text-gray-600">Read our latest posts</p>
            </div>
          </Link>

          <Link href="/files" className="block">
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Files</h3>
              <p className="text-gray-600">Access file resources</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
