'use client';
import './main.css';
import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    const html = document.querySelector('html');
    html.classList.add('is-ready');
  }, []);
  return (
    <>
      <div className="App"></div>
    </>
  );
}
