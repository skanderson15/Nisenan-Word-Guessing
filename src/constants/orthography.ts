import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'a',
  'aa',
  'b',
  'd',
  "c’",
  'e',
  'ee',
  'h',
  'i',
  'ii',
  'k',
  "k’",
  'l',
  'm',
  'n',
  'o',
  'oo',
  'p',
  "p’",
  's',
  't',
  "t’",
  'u',
  'uu',
  'w',
  "y",
  "’",
  'ə',
  'əə',
  'ɨ',
  'ɨɨ',
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
