import fs from 'fs'
import path from 'path'

const relativePath = process.cwd()
const sourceDir = path.join(relativePath, '.vercel/output/static/_astro')
const destDir = path.join(relativePath, '.vercel/output/static')
const destFileName = 'script.js'

const latestFile = fs.readdirSync(sourceDir)
  .map(fileName => ({ fileName, mtime: fs.statSync(path.join(sourceDir, fileName)).mtimeMs }))
  .sort((a, b) => b.mtime - a.mtime)[0].fileName

fs.copyFileSync(path.join(sourceDir, latestFile), path.join(destDir, destFileName))
