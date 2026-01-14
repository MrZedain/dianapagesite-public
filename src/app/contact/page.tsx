'use client';

import { useState } from 'react';

export default function Contact() {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [result, setResult] = useState('');
    const key = process.env.NEXT_PUBLIC_FORM_KEY;

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!key) {
            setResult('Form configuration error.');
            setStatus('error');
            return;
        }

        setStatus('sending');

        const formData = new FormData(event.currentTarget);
        formData.append('access_key', key);

        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult('Form submitted successfully');
            setStatus('success');
            event.currentTarget.reset();
        } else {
            console.error('Error', data);
            setResult(data.message);
            setStatus('error');
        }
    };


    return (
        <div className="max-w-4xl mx-auto px-6 sm:px-10 pb-3 pt-12 sm:pt-0 space-y-10">
            <h1 className="mb-10 text-3xl text-center font-medium text-[#bababa]">
                contact
            </h1>

            {/* Direct email */}
            <p className="text-sm text-center">
                <a
                    href="mailto:dianapage28@gmail.com"
                    className="text-[#fc1eba]"
                >
                    dianapage28@gmail.com
                </a>
            </p>

            {/* Intro text */}
            <p className="text-base leading-relaxed text-gray-700">
                Please feel free to contact me if you have any queries, or would like
                any additional information about my work.
            </p>

            {/* Contact form */}
            <form onSubmit={onSubmit} className="space-y-6">
                {/* Honeypot */}
                <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                />

                {/* Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                        <label htmlFor="fname" className="text-sm font-medium mb-1">
                            First Name
                        </label>
                        <input
                            id="fname"
                            name="First name"
                            type="text"
                            className="bg-[#f8f8f8] border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#fc1eba]"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="lname" className="text-sm font-medium mb-1">
                            Last Name
                        </label>
                        <input
                            id="lname"
                            name="Last name"
                            type="text"
                            className="bg-[#f8f8f8] border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#fc1eba]"
                        />
                    </div>
                </div>

                {/* Email */}
                <div className="flex flex-col">
                    <label htmlFor="email" className="text-sm font-medium mb-1">
                        Email Address
                    </label>
                    <input
                        id="email"
                        name="Email"
                        type="email"
                        required
                        className="bg-[#f8f8f8] border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#fc1eba]"
                    />
                </div>

                {/* Message */}
                <div className="flex flex-col">
                    <label htmlFor="message" className="text-sm font-medium mb-1">
                        Your Message
                    </label>
                    <textarea
                        id="message"
                        name="Message"
                        rows={5}
                        className="bg-[#f8f8f8] border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#fc1eba]"
                    />
                </div>

                {/* Submit */}
                <div className="flex justify-center min-h-11">
                    {status === 'idle' || status === 'sending' ? (
                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="bg-[#fc1eba] rounded text-white px-8 py-2 hover:opacity-90 transition-opacity disabled:opacity-60"
                        >
                            {status === 'sending' ? 'Sending…' : 'Send Message'}
                        </button>
                    ) : (
                        <p
                            className={`text-sm font-medium ${status === 'success' ? 'text-green-600' : 'text-red-600'
                                }`}
                        >
                            {result}
                        </p>
                    )}
                </div>
            </form>

        </div>
    );
}
