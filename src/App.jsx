import React from 'react';
import Buttonmc from './components/Button';

function App() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold">Hello world!</h1>
      <Buttonmc variant="primary">Primary</Buttonmc>
      <Buttonmc variant="secondary">Secondary</Buttonmc>
      <Buttonmc variant="outline">Outline</Buttonmc>
      <Buttonmc variant="danger">Danger</Buttonmc>
      {/* Classic MUI button for comparison */}
      <Buttonmc>Default MUI</Buttonmc>
    </div>
  );
}

export default App;
