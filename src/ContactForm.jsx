import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xbljeoao");

  if (state.succeeded) {
    return (
      <div>
        <p className="text-4xl text-[#010335] justify-center items-start p-40 bg-white">
          Thanks for joining!
        </p>
      </div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className="flex flex-col gap-4 w-[40%] text-black bg-white p-4 font-title justify-center max-lg:w-[80%]"
    >
      <label htmlFor="email" className="text-lg">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        className="border-b-2 black p-1"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />

      <label htmlFor="message" className="text-lg">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        className="border-b-2 black p-6"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />

      {/* Loading Message */}
      {state.submitting ? (
        <p className="text-lg text-[#0D1622]">Loading...</p>
      ) : (
        <button 
          type="submit" 
          disabled={state.submitting} 
          className="p-4 text-white bg-[#010335] rounded-md"
        >
          Submit
        </button>
      )}
    </form>
  );
}

function App() {
  return <ContactForm />;
}

export default App;
