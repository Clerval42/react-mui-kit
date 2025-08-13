import React from "react";
import UiButton from "./components/Button";
import { Add } from "@mui/icons-material";

function App() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold">Hello world!</h1>
      <div className="flex gap-2">
        <UiButton variant="primary">Primary</UiButton>
        <UiButton variant="secondary">Secondary</UiButton>
      </div>
      <div className="flex gap-2">
        <UiButton variant="primary" size="large">
          Large Primary
        </UiButton>
        <UiButton variant="primary" size="medium">
          Medium Primary
        </UiButton>
        <UiButton variant="primary" size="small">
          Small Primary
        </UiButton>
      </div>
      <div className="flex gap-2">
        <UiButton variant="secondary" size="large">
          Large Secondary
        </UiButton>
        <UiButton variant="secondary" size="medium">
          Medium Secondary
        </UiButton>
        <UiButton variant="secondary" size="small">
          Small Secondary
        </UiButton>
      </div>
      <div className="flex gap-2">
        <UiButton variant="primary" disabled>
          Primary Disabled
        </UiButton>
        <UiButton variant="secondary" disabled>
          Secondary Disabled
        </UiButton>
      </div>
      <div className="flex gap-2">
        <UiButton variant="primary" startIcon={<Add />}>
          Add Item
        </UiButton>
        <UiButton variant="secondary" endIcon={<Add />}>
          Next
        </UiButton>
      </div>
    </div>
  );
}

export default App;
