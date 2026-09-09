'use client';
import { useMemo, useState } from 'react';
import type { Bar } from '@/lib/content/types';
import { BarCard } from './cards';
export function BarDirectory({ bars }: { bars: Bar[] }) {
  const [query, setQuery] = useState('');
  const [district, setDistrict] = useState('All districts');
  const districts = ['All districts', ...new Set(bars.map((x) => x.district))];
  const result = useMemo(
    () =>
      bars.filter(
        (x) =>
          (district === 'All districts' || x.district === district) &&
          `${x.name} ${x.style} ${x.summary}`
            .toLowerCase()
            .includes(query.toLowerCase().trim()),
      ),
    [bars, query, district],
  );
  return (
    <>
      <div className="filters">
        <label>
          Find a place
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Name, mood or style"
            type="search"
          />
        </label>
        <label>
          Neighbourhood
          <select
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
          >
            {districts.map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
        </label>
        <output aria-live="polite">
          {result.length} {result.length === 1 ? 'place' : 'places'}
        </output>
      </div>
      <div className="bar-list">
        {result.map((bar) => (
          <BarCard key={bar.id} bar={bar} />
        ))}
      </div>
      {result.length === 0 && (
        <div className="empty">
          <h2>No places found.</h2>
          <p>Try another search or neighbourhood.</p>
          <button
            onClick={() => {
              setQuery('');
              setDistrict('All districts');
            }}
          >
            Clear filters
          </button>
        </div>
      )}
    </>
  );
}
