import Navbar from '@/app/components/navbar/Navbar';

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', backgroundColor: '#333' }}>
    
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '1rem' }}>
        <h1 style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: '3em', marginBottom: '0.5em' }}>
          Bienvenido al e-Commerce
        </h1>
        <h2 style={{ textAlign: 'center', color: 'white', fontSize: '1.5em', fontWeight: 'normal' }}>
          Regístrate para empezar a comprar
        </h2>
      </main>
    </div>
  );
}
