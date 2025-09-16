import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite'

const env =
  (globalThis as typeof globalThis & {
    process?: { env?: Record<string, string | undefined> }
  }).process?.env ?? {}

const repository = env.GITHUB_REPOSITORY ?? ''
const repositoryOwner = env.GITHUB_REPOSITORY_OWNER ?? env.GITHUB_ACTOR ?? ''
const repositoryName = repository.split('/')[1] ?? ''
const normalizedRepoName = repositoryName.toLowerCase()
const normalizedOwner = repositoryOwner.toLowerCase()
const isUserOrOrgSite =
  normalizedRepoName !== '' &&
  normalizedOwner !== '' &&
  normalizedRepoName === `${normalizedOwner}.github.io`
const isGitHubPagesBuild =
  env.GITHUB_ACTIONS === 'true' && repositoryName !== ''
const basePath =
  isGitHubPagesBuild && !isUserOrOrgSite ? `/${repositoryName}/` : '/'

// https://vite.dev/config/
export default defineConfig({
  base: basePath,
  plugins: [react(), tailwind()],
})
