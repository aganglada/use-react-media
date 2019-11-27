export function mockMatchMedia(matches: boolean) {
  window.matchMedia = jest.fn().mockImplementation(query => {
    return {
      matches,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }
  })
}
