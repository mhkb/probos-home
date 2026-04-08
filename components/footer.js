import Link from "next/link";
import React from "react";
import Container from "./container";

export default function Footer() {
  const navigation = [
    { name: "Our Flagship", href: "#propkeeper" },
    { name: "Product Studio", href: "#studio" },
  ];
  
  const legal = [
    { name: "Terms", href: "#" },
    { name: "Privacy", href: "#" },
  ];

  return (
    <footer className="relative bg-slate-950 border-t border-slate-900">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 py-16 mx-auto lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              <Link href="/" className="flex items-center space-x-2 text-3xl font-bold text-white tracking-tight">
                Probos Technology<span className="text-probos-green">.</span>
              </Link>
            </div>

            <div className="max-w-md mt-6 text-gray-400 leading-relaxed">
              An Australian software studio dedicated to creating straightforward, dependable solutions for the property sector.
            </div>
            
            <div className="mt-8 text-sm text-gray-500 uppercase tracking-widest font-semibold">
              Location: Sydney, Australia
            </div>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-sm font-bold text-gray-200 uppercase tracking-widest mb-4">Studio</h3>
            <div className="flex flex-col space-y-2">
              {navigation.map((item, index) => (
                <Link key={index} href={item.href} className="text-gray-400 hover:text-probos-green transition-colors">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-sm font-bold text-gray-200 uppercase tracking-widest mb-4">Legal</h3>
            <div className="flex flex-col space-y-2">
              {legal.map((item, index) => (
                <Link key={index} href={item.href} className="text-gray-400 hover:text-probos-green transition-colors">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-sm font-bold text-gray-200 uppercase tracking-widest mb-4">Follow</h3>
            <div className="flex space-x-5 text-gray-500">
              <a href="#" className="hover:text-probos-green transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="py-8 border-t border-slate-900 text-sm text-center text-gray-500">
          Copyright © {new Date().getFullYear()} Probos Technology Pty Ltd. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
