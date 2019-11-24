import * as React from 'react'

function useReactMedia(query: string, defaultMatches?: boolean) {
  const windowExist = typeof window === 'object'
  const matchesValue =
    windowExist && defaultMatches === undefined
      ? window.matchMedia(query).matches
      : defaultMatches
  const [matches, setMatches] = React.useState(matchesValue)

  React.useEffect(() => {
    if (!windowExist) return

    const media = window.matchMedia(query)
    if (media.matches !== matches) setMatches(media.matches)
    const listener = () => setMatches(media.matches)
    media.addListener(listener)
    return () => media.removeListener(listener)
  }, [matches, query])

  return matches
}

export default useReactMedia
