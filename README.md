# useReactMedia

⚡ Just react-media with Hooks

⚡ Written in Typescript

⚡ Just the code you need (330b minified)

⚡ SSR Ready

## Install

`npm i use-react-media`

or

`yarn add use-react-media`

## Basic Usage

```jsx
import React from 'react'
import useReactMedia from 'use-react-media'

function App() {
  const matches = useReactMedia('(min-width: 600px)')

  return <div className="App">{matches ? 'Matching' : 'Not matching'}</div>
}
```

## Parameters

- **query**, a valid media query (`(min-width: 600px)`)
- **defaultMatches**, for SSR.

## SSR

If you wan tto render your component on the server side, you will need to use `defaultMatches` to tell the server side which version of the component you will want to render, maybe by analizing the user agent like bellow or any other mecanism.

```jsx
import React from 'react'
import useReactMedia from 'use-react-media'

function App() {
  const matches = useReactMedia(
    '(min-width: 600px)',
    /mobile/i.test(userAgent) // server user agent
  )

  return <div className="App">{matches ? 'Matching' : 'Not matching'}</div>
}
```
