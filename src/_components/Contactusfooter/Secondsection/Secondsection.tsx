// components/ContactSection.tsx
"use client";

import Leftcontactfooter from "../Leftcontactfooter/Leftcontactfooter";
import Rightcontactfooter from "../Rightcontactfooter/Rightcontactfooter";

export default function Secondsection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
       <Leftcontactfooter/>
       <Rightcontactfooter/>
      </div>
    </section>
  );
}
