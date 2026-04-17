/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { ViewSelector } from './components/ViewSelector';
import { VisualUI } from './components/VisualUI';
import { TerminalUI } from './components/TerminalUI';

type AppState = 'booting' | 'selecting' | 'visual' | 'terminal';

export default function App() {
  const [appState, setAppState] = useState<AppState>('booting');

   


  return (
    <>
      {appState === 'booting' && (
        <LoadingScreen onComplete={() => setAppState('selecting')} />
      )}
      
      {appState === 'selecting' && (
        <ViewSelector onSelect={(view) => setAppState(view)} />
      )}
      
      {appState === 'visual' && (
        <VisualUI onSwitchToTerminal={() => setAppState('terminal')} />
      )}
      
      {appState === 'terminal' && (
        <TerminalUI onSwitchToVisual={() => setAppState('visual')} />
      )}
    </>
  );
}
