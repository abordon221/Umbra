import { useState } from 'react';

export default function App() {
  const [email, setEmail] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log({ email, city });
    setSubmitted(true);
  }

  return (
    <div className='p-8 max-w-xl mx-auto'>
      <h1 className='text-3xl font-bold mb-4'>Umbra — Every Fix Covered</h1>
      <p className='mb-6'>Book trusted pros in minutes. Transparent pricing, reliable arrivals, smarter scheduling.</p>
      {!submitted ? (
        <form onSubmit={handleSubmit} className='space-y-3'>
          <input
            className='border p-2 w-full'
            placeholder='Email'
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            required
          />
          <input
            className='border p-2 w-full'
            placeholder='City'
            value={city}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCity(e.target.value)}
          />
          <button className='bg-black text-white px-4 py-2 rounded' type='submit'>Join Waitlist</button>
        </form>
      ) : (
        <p className='text-green-600 font-semibold'>Thanks! You’re on the list.</p>
      )}
    </div>
  );
}

