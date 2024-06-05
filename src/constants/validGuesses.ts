import { CONFIG } from './config'

export const VALIDGUESSES = [
  'sinná',
  'lollá',
  'sukkú',
  'payyó',
  'payél',
  'hipín',
  'beydá',
  "honk’i",
  "tonc’í",
  "honk’ó",
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
