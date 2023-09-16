"use client"
import Link from 'next/link'

export default function Button() {
  return (
    <Link href="/about">
      <button className="btn btn-primary">?</button>
    </Link>
  );
}