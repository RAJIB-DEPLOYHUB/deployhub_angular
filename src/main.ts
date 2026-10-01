import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <main style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; text-align: center; padding: 2rem;">
      <h1 style="font-size: 2.5rem; color: #ef4444; margin-bottom: 0.5rem;">🛡️ DeployHub Angular 17</h1>
      <p style="font-size: 1.25rem; color: #94a3b8; max-width: 600px; margin-bottom: 2rem;">
        Enterprise standalone components, Vite build optimizations & automated DeployHub deployment.
      </p>
      <div style="background: rgba(34, 197, 94, 0.15); border: 1px solid #22c55e; color: #4ade80; padding: 0.75rem 1.5rem; border-radius: 9999px; font-weight: 600;">
        ● Health Status: Online (200 OK)
      </div>
    </main>
  `,
})
export class AppRootComponent {}

bootstrapApplication(AppRootComponent).catch(err => console.error(err));
