'use client';

import { useState } from 'react';
import { Guest } from '@/lib/supabase';

export default function RSVP() {
  const [step, setStep] = useState<'code' | 'form' | 'success'>('code');
  const [code, setCode] = useState('');
  const [guest, setGuest] = useState<Guest | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const [primaryGuest, setPrimaryGuest] = useState({
    name: '',
    attending: true,
    dietaryRestrictions: '',
  });
  
  const [plusOne, setPlusOne] = useState({
    name: '',
    attending: true,
    dietaryRestrictions: '',
  });

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/rsvp/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: code.trim() }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Invalid code');
      }

      if (data.hasRsvped) {
        setError('You have already submitted your RSVP. Please contact us if you need to make changes.');
        setLoading(false);
        return;
      }

      setGuest(data.guest);
      setPrimaryGuest({ ...primaryGuest, name: data.guest.primary_guest_name });
      setStep('form');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitRsvp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/rsvp/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          code: code.trim(),
          primaryGuest,
          plusOne: guest?.plus_one_allowed ? plusOne : null,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit RSVP');
      }

      setStep('success');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  if (step === 'success') {
    return (
      <div className="space-y-6 text-center">
        <h2 className="text-4xl font-serif text-amber-900 mb-8">Thank You! 🎉</h2>
        <div className="bg-rose-50 p-8 rounded-lg border-2 border-rose-200">
          <p className="text-xl text-amber-800 mb-4">
            Your RSVP has been received!
          </p>
          <p className="text-amber-700">
            We can't wait to celebrate with you on our special day.
          </p>
        </div>
        <button
          onClick={() => {
            setStep('code');
            setCode('');
            setGuest(null);
            setPrimaryGuest({ name: '', attending: true, dietaryRestrictions: '' });
            setPlusOne({ name: '', attending: true, dietaryRestrictions: '' });
          }}
          className="text-rose-500 hover:text-rose-600 underline"
        >
          Submit another RSVP
        </button>
      </div>
    );
  }

  if (step === 'code') {
    return (
      <div className="space-y-6">
        <h2 className="text-4xl font-serif text-amber-900 text-center mb-8">RSVP</h2>
        
        <div className="max-w-md mx-auto">
          <p className="text-amber-800 text-center mb-6">
            Please enter your unique RSVP code found on your invitation.
          </p>

          <form onSubmit={handleVerifyCode} className="space-y-4">
            <div>
              <label htmlFor="code" className="block text-amber-900 font-semibold mb-2">
                RSVP Code
              </label>
              <input
                id="code"
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value.toUpperCase())}
                className="w-full px-4 py-3 border-2 border-rose-200 rounded-lg focus:border-rose-400 focus:outline-none text-center text-lg font-mono uppercase"
                placeholder="Enter your code"
                required
              />
            </div>

            {error && (
              <div className="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading || !code.trim()}
              className="w-full bg-rose-400 hover:bg-rose-500 text-white font-serif text-lg py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Verifying...' : 'Continue'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-4xl font-serif text-amber-900 text-center mb-8">Complete Your RSVP</h2>
      
      <div className="max-w-2xl mx-auto">
        <div className="bg-rose-50 p-4 rounded-lg border-2 border-rose-200 mb-6 text-center">
          <p className="text-amber-800">
            Welcome, <span className="font-semibold">{guest?.primary_guest_name}</span>!
          </p>
        </div>

        <form onSubmit={handleSubmitRsvp} className="space-y-6">
          {/* Primary Guest */}
          <div className="bg-white/60 p-6 rounded-lg border-2 border-rose-200 space-y-4">
            <h3 className="text-xl font-serif text-rose-600">Your Information</h3>
            
            <div>
              <label className="block text-amber-900 font-semibold mb-2">Name</label>
              <input
                type="text"
                value={primaryGuest.name}
                onChange={(e) => setPrimaryGuest({ ...primaryGuest, name: e.target.value })}
                className="w-full px-4 py-2 border-2 border-rose-200 rounded-lg focus:border-rose-400 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-amber-900 font-semibold mb-2">Will you be attending?</label>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    checked={primaryGuest.attending}
                    onChange={() => setPrimaryGuest({ ...primaryGuest, attending: true })}
                    className="mr-2"
                  />
                  <span className="text-amber-800">Joyfully accepts</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    checked={!primaryGuest.attending}
                    onChange={() => setPrimaryGuest({ ...primaryGuest, attending: false })}
                    className="mr-2"
                  />
                  <span className="text-amber-800">Regretfully declines</span>
                </label>
              </div>
            </div>

            {primaryGuest.attending && (
              <div>
                <label className="block text-amber-900 font-semibold mb-2">
                  Dietary Restrictions or Allergies
                </label>
                <textarea
                  value={primaryGuest.dietaryRestrictions}
                  onChange={(e) => setPrimaryGuest({ ...primaryGuest, dietaryRestrictions: e.target.value })}
                  className="w-full px-4 py-2 border-2 border-rose-200 rounded-lg focus:border-rose-400 focus:outline-none"
                  rows={3}
                  placeholder="Please let us know of any dietary needs..."
                />
              </div>
            )}
          </div>

          {/* Plus One */}
          {guest?.plus_one_allowed && (
            <div className="bg-white/60 p-6 rounded-lg border-2 border-rose-200 space-y-4">
              <h3 className="text-xl font-serif text-rose-600">Plus One Information</h3>
              
              <div>
                <label className="block text-amber-900 font-semibold mb-2">Guest Name</label>
                <input
                  type="text"
                  value={plusOne.name}
                  onChange={(e) => setPlusOne({ ...plusOne, name: e.target.value })}
                  className="w-full px-4 py-2 border-2 border-rose-200 rounded-lg focus:border-rose-400 focus:outline-none"
                  placeholder="Leave blank if not bringing a plus one"
                />
              </div>

              {plusOne.name && (
                <>
                  <div>
                    <label className="block text-amber-900 font-semibold mb-2">Will they be attending?</label>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          checked={plusOne.attending}
                          onChange={() => setPlusOne({ ...plusOne, attending: true })}
                          className="mr-2"
                        />
                        <span className="text-amber-800">Yes</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          checked={!plusOne.attending}
                          onChange={() => setPlusOne({ ...plusOne, attending: false })}
                          className="mr-2"
                        />
                        <span className="text-amber-800">No</span>
                      </label>
                    </div>
                  </div>

                  {plusOne.attending && (
                    <div>
                      <label className="block text-amber-900 font-semibold mb-2">
                        Dietary Restrictions or Allergies
                      </label>
                      <textarea
                        value={plusOne.dietaryRestrictions}
                        onChange={(e) => setPlusOne({ ...plusOne, dietaryRestrictions: e.target.value })}
                        className="w-full px-4 py-2 border-2 border-rose-200 rounded-lg focus:border-rose-400 focus:outline-none"
                        rows={3}
                        placeholder="Please let us know of any dietary needs..."
                      />
                    </div>
                  )}
                </>
              )}
            </div>
          )}

          {error && (
            <div className="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setStep('code')}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-serif text-lg py-3 rounded-lg transition-colors"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-rose-400 hover:bg-rose-500 text-white font-serif text-lg py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Submitting...' : 'Submit RSVP'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

