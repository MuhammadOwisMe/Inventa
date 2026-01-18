'use client';

import { useState } from 'react';
import Button from './button';

export default function ContactForm() {
    return (
        <form className="bg-[#1C2226] p-8 rounded-2xl border border-white/5 flex flex-col gap-6 w-full" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col gap-2 w-full">
                    <label className="text-white/60 text-sm">Name</label>
                    <input
                        type="text"
                        placeholder="John Doe"
                        className="bg-[#15191D] border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#1AE5D6] transition-colors"
                    />
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <label className="text-white/60 text-sm">Email</label>
                    <input
                        type="email"
                        placeholder="john.me@gmail.com"
                        className="bg-[#15191D] border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#1AE5D6] transition-colors"
                    />
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <label className="text-white/60 text-sm">Subject</label>
                <input
                    type="text"
                    placeholder="How can we help?"
                    className="bg-[#15191D] border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#1AE5D6] transition-colors"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label className="text-white/60 text-sm">Message</label>
                <textarea
                    rows={5}
                    placeholder="Tell us about your project"
                    className="bg-[#15191D] border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#1AE5D6] transition-colors resize-none"
                />
            </div>

            <button
                className="bg-[#1AE5D6] text-black font-bold py-4 rounded-lg hover:opacity-90 transition-opacity mt-2"
            >
                Send Message
            </button>
        </form>
    );
}
