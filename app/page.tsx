import Link from 'next/link'

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f5f5' }}>
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem' }}>CareerMap AI</h1>
        <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem' }}>Your AI-powered career guidance platform</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link href="/login" style={{ padding: '0.75rem 2rem', background: '#000', color: 'white', borderRadius: '8px', fontWeight: 600, textDecoration: 'none' }}>
            Sign In
          </Link>
          <Link href="/signup" style={{ padding: '0.75rem 2rem', background: 'white', color: '#000', borderRadius: '8px', fontWeight: 600, textDecoration: 'none', border: '2px solid #000' }}>
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  )
}