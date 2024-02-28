

export type CountryCode = `CA` | `US`
export type Lang = `en` | `fr` | `es`

export type Locale = `${CountryCode}-${Lang}`

function setLocale(locale: Locale) {
  console.log(locale)
}

setLocale(`CA-en`)
