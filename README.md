# use-react-media

⚡ react-media with Hooks

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
import useMedia from 'use-react-media'

function App() {
  const matches = useMedia('(min-width: 600px)')

  return <div className="App">{matches ? 'Matching' : 'Not matching'}</div>
}
```

## Parameters

- **query**, a valid media query (`(min-width: 600px)`)
- **defaultMatches**, for SSR.

## Server Side Rendering

If you want to render your component on the server side, you will need to use `defaultMatches` to tell the server side which version of the component you will want to render, maybe by analizing the user agent like bellow or any other mecanism.

```jsx
import React from 'react'
import useMedia from 'use-react-media'

function App() {
  const matches = useMedia(
    '(min-width: 600px)',
    /mobile/i.test(userAgent) // server user agent
  )

  return <div className="App">{matches ? 'Matching' : 'Not matching'}</div>
}
```

### Contributing

I would love to see you contributing to use-react-media, also by giving feedback.
If you think something is missing, [create a new issue](https://github.com/aganglada/use-react-media/issues).

[Pull request](https://github.com/aganglada/use-react-media/pulls) are more than welcome ❤️️


### License

MIT
