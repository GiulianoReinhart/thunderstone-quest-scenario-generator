import {Cookies} from 'react-cookie-consent'

export const handleDeclineCookie = () => {
  Object.keys(Cookies.get()).forEach(cookieName => {
    const neededAttributes = {path: '/', domain: '.tsq-quest-generator.web.app'}

    if (['_ga', '_gat', '_gid'].some(word => cookieName.startsWith(word))) {
      Cookies.remove(cookieName, neededAttributes)
    }
  })
}
