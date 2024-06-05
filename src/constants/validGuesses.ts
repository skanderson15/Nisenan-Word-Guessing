import { CONFIG } from './config'

export const VALIDGUESSES = [
  'sinna',
  'lolla',
  'sukku',
  'payyoo',
  'payel',
  'hipin',
  'beyda',
  "honk’i",
  "tonc’i",
  "honk’o",
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
