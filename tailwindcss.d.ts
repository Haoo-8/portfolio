// tailwindcss.d.ts
declare module 'tailwindcss' {
  export interface Config {
    content?: string[] | { files: string[], extract?: unknown }[]
    darkMode?: 'media' | 'class' | string
    theme?: Record<string, unknown>
    plugins?: unknown[]
    corePlugins?: unknown
  }
}
