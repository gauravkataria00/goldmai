import ComingSoon from './pages/ComingSoon'
import HomePage from './pages/HomePage'

function App() {
  // NOTE:
  // .env must be inside frontend root: goldmai/frontend/.env
  // Vite env variables only load AFTER server restart
  // Must restart dev server after editing .env
  // If ComingSoon shows when it shouldn't, restart the dev server

  console.log('ENV:', import.meta.env)
  console.log('MAINTENANCE:', import.meta.env.VITE_MAINTENANCE_MODE)

  const isMaintenance = String(import.meta.env.VITE_MAINTENANCE_MODE) === 'true'
  console.log('IS MAINTENANCE (after String check):', isMaintenance)

  if (isMaintenance) {
    return <ComingSoon />
  }

  return <HomePage />
}

export default App
