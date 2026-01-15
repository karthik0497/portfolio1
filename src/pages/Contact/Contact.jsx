import React from "react";
import { Send, Phone, MapPin, Mail } from "lucide-react";
import { email, location, get_in_touch, phone, linkedin_profile, github_profile } from "@/pages/variables/varibles.js";


export default function Contact() {
  return (
    <main
      className="py-32 bg-slate-50 text-slate-900 min-h-screen"
      id="contact"
    >
      <section className="hero min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-200 p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Get in Touch!
              </h2>
              <p className="text-slate-600 text-lg">
                {get_in_touch}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Email</h3>
                    <p className="text-slate-600">{email}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Phone</h3>
                    <p className="text-slate-600">{phone}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-pink-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Location</h3>
                    <p className="text-slate-600">{location}</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center md:justify-end">
                <a
                  href={linkedin_profile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#0a66c2] text-white rounded-xl font-bold hover:bg-[#004182] transition-all transform hover:-translate-y-1 shadow-lg text-lg"
                >
                  <span>Connect on LinkedIn</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
