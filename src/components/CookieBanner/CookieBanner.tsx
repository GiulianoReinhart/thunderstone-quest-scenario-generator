import {useEffect} from 'react'
import CookieConsent, {getCookieConsentValue} from 'react-cookie-consent'
import {initGA} from '../../utils/ga-utils'
import {handleDeclineCookie} from '../../utils/handleDeclineCookie'
import {StyledCookieBanner} from './CookieBanner.styled'

const CookieBanner = () => {
  useEffect(() => {
    const isConsent = getCookieConsentValue()
    console.log(isConsent)

    if (isConsent === 'true') {
      handleAcceptCookie()
    } else {
      handleDeclineCookie()
    }
  }, [])

  const handleAcceptCookie = () => {
    if (import.meta.env.VITE_GOOGLE_ANALYTICS_ID) {
      initGA(import.meta.env.VITE_GOOGLE_ANALYTICS_ID)
    }
  }

  return (
    <StyledCookieBanner>
      <CookieConsent
        buttonWrapperClasses="buttons"
        buttonText="Yeah, that’s alright"
        buttonClasses="accept"
        declineButtonText="Nope"
        disableStyles
        overlay
        enableDeclineButton
        flipButtons
        onAccept={handleAcceptCookie}
        onDecline={handleDeclineCookie}
      >
        <p>This website would like to use cookies for analytical purposes. Are you okay with that?</p>
      </CookieConsent>
    </StyledCookieBanner>
  )
}

export default CookieBanner
