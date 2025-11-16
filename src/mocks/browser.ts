import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

// Configure le Service Worker avec les handlers
export const worker = setupWorker(...handlers);

// Fonction pour démarrer avec configuration complète
export async function startMockWorker() {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    await worker.start({
      onUnhandledRequest: 'warn',
      serviceWorker: {
        url: '/mockServiceWorker.js',
        options: {
          // Scope pour capturer toutes les requêtes
          scope: '/'
        }
      },
      // Attendre que le Service Worker soit ready
      waitUntilReady: true
    });
    
    console.log('✅ MSW Started Successfully');
    console.log('🔶 Mocking API:', window.location.origin);
    
    return worker;
  } catch (error) {
    console.error('❌ Failed to start MSW:', error);
    throw error;
  }
}