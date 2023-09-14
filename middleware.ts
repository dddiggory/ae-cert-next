import { NextRequest, NextResponse } from 'next/server'
import countries from './lib/countries.json'
import cityNicknames from './lib/citynicknames.json'

export const config = {
  matcher: '/',
}

function getNickname(city) {
  if(cityNicknames.hasOwnProperty(city)) {
      let nicknames = cityNicknames[city];
      return nicknames[Math.floor(Math.random() * nicknames.length)];
  } else {
      return '';
  }
}


export async function middleware(req: NextRequest) {
  
  const { nextUrl: url, geo } = req
  
  const country = geo.country || 'undefined'
  const city = geo.city || ''
  const region = geo.region || ''

  const countryInfo = countries.find((x) => x.cca2 === country)
  const cityNickname = getNickname(city);

  url.searchParams.set('country', country)
  url.searchParams.set('city', city)
  url.searchParams.set('region', region)
  url.searchParams.set('cityNickname', cityNickname)

  return NextResponse.rewrite(url)
}
