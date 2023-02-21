"use client";

import Card from "./Card";

export default function Cards() {
  return (
    <div className="grid mt-10 pt-10 w-full grid-cols-1 gap-2 md:grid-cols-3">
      {/* User Card */}
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
