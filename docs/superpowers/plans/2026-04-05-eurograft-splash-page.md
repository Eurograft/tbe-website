# Eurograft Splash Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a minimal Next.js 14 splash page showing the Eurograft white logo centered on a white background with a cyan drop-shadow, ready to deploy to Vercel.

**Architecture:** Single-route Next.js 14 App Router project with Tailwind CSS. The logo is a static asset in `public/`. The drop-shadow is applied via a Tailwind `filter` utility. No dynamic content, no API routes.

**Tech Stack:** Next.js 14, React 18, TypeScript, Tailwind CSS, Jest + React Testing Library

---

## File Map

| Path | Action | Responsibility |
|---|---|---|
| `package.json` | Create (via scaffold) | Dependencies and scripts |
| `next.config.ts` | Create (via scaffold) | Next.js config (no changes needed) |
| `tsconfig.json` | Create (via scaffold) | TypeScript config |
| `tailwind.config.ts` | Modify | Add brand color tokens |
| `postcss.config.js` | Create (via scaffold) | PostCSS for Tailwind |
| `app/globals.css` | Modify | Tailwind directives, white body background |
| `app/layout.tsx` | Modify | Page title and metadata |
| `app/page.tsx` | Modify | Centered logo with drop-shadow |
| `public/TBE-Logo-White-EN.png` | Copy | Logo asset |
| `jest.config.ts` | Create | Jest configuration for Next.js |
| `jest.setup.ts` | Create | Testing Library setup |
| `app/page.test.tsx` | Create | Render test for the splash page |

---

### Task 1: Scaffold the Next.js project

**Files:**
- Create: all scaffold files in project root

- [ ] **Step 1: Run create-next-app**

Run from the `Website` directory:

```bash
npx create-next-app@14 . --typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*"
```

When prompted, accept all defaults. The `.` installs into the current directory.

Expected output ends with: `Success! Created your Next.js app`

- [ ] **Step 2: Verify scaffold**

```bash
ls
```

Expected output includes: `app/  public/  package.json  next.config.ts  tailwind.config.ts  tsconfig.json`

- [ ] **Step 3: Commit scaffold**

```bash
git init
git add package.json next.config.ts tsconfig.json tailwind.config.ts postcss.config.js .eslintrc.json .gitignore
git add app/ public/
git commit -m "chore: scaffold Next.js 14 app"
```

---

### Task 2: Copy the logo into public/

**Files:**
- Create: `public/TBE-Logo-White-EN.png`

- [ ] **Step 1: Copy the logo file**

```bash
cp "../Logo White/TBE-Logo-White-EN.png" public/TBE-Logo-White-EN.png
```

- [ ] **Step 2: Verify the file is present**

```bash
ls public/
```

Expected output includes: `TBE-Logo-White-EN.png`

- [ ] **Step 3: Commit**

```bash
git add public/TBE-Logo-White-EN.png
git commit -m "chore: add Eurograft logo to public assets"
```

---

### Task 3: Configure Tailwind with brand colors

**Files:**
- Modify: `tailwind.config.ts`

- [ ] **Step 1: Write a failing test for brand color presence**

Create `app/page.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import Page from './page'

describe('Splash page', () => {
  it('renders the Eurograft logo', () => {
    render(<Page />)
    const logo = screen.getByRole('img', { name: /eurograft logo/i })
    expect(logo).toBeInTheDocument()
  })

  it('logo has drop-shadow class applied', () => {
    render(<Page />)
    const logo = screen.getByRole('img', { name: /eurograft logo/i })
    expect(logo.className).toMatch(/drop-shadow/)
  })
})
```

- [ ] **Step 2: Set up Jest (tests will fail — that is expected)**

Create `jest.config.ts`:

```ts
import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({ dir: './' })

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}

export default createJestConfig(config)
```

Create `jest.setup.ts`:

```ts
import '@testing-library/jest-dom'
```

Install testing dependencies:

```bash
npm install --save-dev jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

- [ ] **Step 3: Run tests — expect them to fail**

```bash
npx jest --testPathPattern=app/page.test.tsx
```

Expected: FAIL — `Cannot find module './page'` or similar because `page.tsx` hasn't been updated yet.

- [ ] **Step 4: Update tailwind.config.ts with brand colors**

Replace the contents of `tailwind.config.ts` with:

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: '#2EAEE0',
          dark: '#3A3A3A',
        },
      },
      dropShadow: {
        logo: '0 0 20px #2EAEE0',
      },
    },
  },
  plugins: [],
}

export default config
```

- [ ] **Step 5: Commit**

```bash
git add tailwind.config.ts jest.config.ts jest.setup.ts app/page.test.tsx package.json package-lock.json
git commit -m "chore: configure Tailwind brand colors and Jest"
```

---

### Task 4: Implement the splash page

**Files:**
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Update globals.css**

Replace the contents of `app/globals.css` with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html,
body {
  background-color: #ffffff;
  margin: 0;
  padding: 0;
}
```

- [ ] **Step 2: Update layout.tsx**

Replace the contents of `app/layout.tsx` with:

```tsx
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Eurograft',
  description: 'Тъканна Банка Еурографт ЕООД',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

- [ ] **Step 3: Implement page.tsx**

Replace the contents of `app/page.tsx` with:

```tsx
import Image from 'next/image'

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
      <Image
        src="/TBE-Logo-White-EN.png"
        alt="Eurograft logo"
        width={320}
        height={120}
        priority
        className="w-full max-w-xs drop-shadow-logo"
      />
    </main>
  )
}
```

- [ ] **Step 4: Run tests — expect them to pass**

```bash
npx jest --testPathPattern=app/page.test.tsx
```

Expected:

```
PASS  app/page.test.tsx
  Splash page
    ✓ renders the Eurograft logo
    ✓ logo has drop-shadow class applied
```

- [ ] **Step 5: Commit**

```bash
git add app/globals.css app/layout.tsx app/page.tsx
git commit -m "feat: add Eurograft splash page with centered logo and cyan drop-shadow"
```

---

### Task 5: Verify locally

**Files:** none

- [ ] **Step 1: Start the dev server**

```bash
npm run dev
```

Expected output: `▲ Next.js 14.x.x` and `Local: http://localhost:3000`

- [ ] **Step 2: Open in browser**

Navigate to `http://localhost:3000`.

Expected: White page, Eurograft logo centered, subtle cyan glow visible around the white logo.

- [ ] **Step 3: Stop the dev server**

Press `Ctrl+C`.

- [ ] **Step 4: Run a production build to verify Vercel compatibility**

```bash
npm run build
```

Expected output ends with: `✓ Compiled successfully`

No errors or warnings about missing assets or misconfigured files.

- [ ] **Step 5: Commit build verification (no files changed)**

No commit needed — this step is verification only.

---

### Task 6: Final cleanup and Vercel readiness

**Files:**
- Modify: `.gitignore` (verify `.next/` and `node_modules/` are excluded)

- [ ] **Step 1: Verify .gitignore**

Open `.gitignore` and confirm these lines are present (they will be from the scaffold):

```
node_modules/
.next/
```

If missing, add them.

- [ ] **Step 2: Final commit**

```bash
git status
```

If any files are untracked or modified, stage and commit them:

```bash
git add -A
git commit -m "chore: final cleanup, ready for Vercel deployment"
```

- [ ] **Step 3: Verify deployment readiness**

The project is ready for Vercel. To deploy:
- **Via Vercel dashboard:** Push to GitHub and connect the repo at vercel.com
- **Via CLI:** Run `npx vercel` from the project root and follow the prompts

No `vercel.json` is required — Next.js is auto-detected.
