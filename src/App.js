import './App.css';

function App() {
  return (
    <div className="app">
      <header className="logo-container">
        <img src="/gamecash_logo.png" alt="Gamecash logo" className="logo" />
      </header>
      <main className="grid-container">
        <div className="grid-button" onClick={() => {}}>🎮 Jeux Vidéo</div>
        <div className="grid-button" onClick={() => {}}>🛒 Vendre un Jeu</div>
        <div className="grid-button" onClick={() => {}}>📦 Produits Dérivés</div>
        <div className="grid-button" onClick={() => {}}>👤 Espace Client</div>
      </main>
    </div>
  );
}

export default App;
