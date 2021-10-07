import { createGlobalStyle } from 'styled-components'

export const theme = {
  color: {
    primary: '#ff6978',
    secondary: '3f4043',
    gray: '#54565a',
    blue: '#4abdf1',
    dark: '#313131',
    background: '#F2F2F2'
  },
  fonts: {
    small: '1.2rem',
    normal: '1.4rem',
    large: '1.8rem',
    extraLarge: '3rem',
    h6: '1.4rem',
    h5: '1.6rem',
    h4: '2rem',
    h3: '2.5rem',
    h2: '4rem',
    h1: '7rem'
  },
  lines: {
    small: '2.5rem',
    medium: '3rem',
    big: '5rem',
    extraLarge: '7rem'
  }
} as const

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  a, address, b, body, div, form, h1, h2, h3, header, html, i, img, label, li, p, s, section, small, span, summary, time, ul, video {
    border: 0;
    font-size: 100%;
    font: inherit;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
  }

  img, video {
    height: auto;
    max-width: 100%;
  }
  
  img, svg, video {
    display: block;
  }
  img {
    border-style: solid;
  }

  html {
    font-size: 62.5%;
  }

  html, body {
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    box-sizing: border-box;
    position: relative;
    font-weight: 400;
    background: ${theme.color.background};

    h1 {
      font-size: ${theme.fonts.h1};
    }

    h2 {
      font-size: ${theme.fonts.h2};
    }

    h3 {
      font-size: ${theme.fonts.h3};
    }

    h4 {
      font-size: ${theme.fonts.h4};
    }

    h5 {
      font-size: ${theme.fonts.h5};
    }

    h6 {
      font-size: ${theme.fonts.h6};
    }

    ul {
      list-style: none;
    }

    a {
      text-decoration: none;
      color: inherit;
      border-bottom-style: none;
    }

    button {
      all: unset;
    }

    input:focus, textarea:focus, select:focus {
      outline: none;
    }

    input:required {
      box-shadow: none;
    }

    input:invalid {
      box-shadow: none;
    }
  }
`
