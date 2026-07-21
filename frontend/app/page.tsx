"use client";

import AnalyzeButton from "@/components/AnalyzeButton";
import DisplayOutput from "@/components/DisplayOutput";
import InputBox from "@/components/InputBox";
import { useState } from "react";

export default function Home() {
  const [requirement, setRequirement] = useState<string[]>([]);
  const [entities, setEntities] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  async function handleAnalyze() {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:8000/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: requirement,
        }),
      });

      const data = await response.json();
      console.log(data);
      setEntities(data.entities);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-3xl text-blue-600 font-bold">Scaffl</h1>
      <InputBox
        value={requirement}
        onChange={setRequirement}
        placeholder="Enter requirements..."
      />
      <AnalyzeButton onClick={handleAnalyze} loading={loading} />

      {entities.length > 0 && (
        <DisplayOutput>
          <h2 className="text-xl font-bold mb-3">Entities</h2>
          {entities.map((entity) => (
            <div key={entity}>{entity}</div>
          ))}
        </DisplayOutput>
      )}
    </div>
  );
}
