import styled, { createGlobalStyle } from 'styled-components';

export const Page = styled('div')({});

export const MainAppCSS = createGlobalStyle(({ theme }) => ({
  body: {
    backgroundColor: `${theme.colors.black[1000]} !important`,
  },
  // Desktop and tablet
  '.Page.main-app > .Content': {
    position: 'fixed',
    top: 0,
    right: 0,
    width: 'calc(100% - 70rem)',
    height: '100%',
    overflowY: 'auto',
    backgroundColor: theme.colors.gray[0],
    borderTopLeftRadius: '20rem',
    borderBottomLeftRadius: '20rem',
    boxShadow: 'inset 14rem 0 10rem -12rem rgb(0, 0, 0, 0.3)',
    '& > .Main': {
      minHeight: 'calc(100% - 80rem)',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-evenly',
      padding: '25rem',
      boxSizing: 'border-box',
      '& > .CircleLoader': {
        height: 'calc(100vh - 150rem)',
      },
      '& > .Section': {
        width: '100%',
        minHeight: '100%',
        padding: '45rem 25rem',
        boxSizing: 'border-box',
        '&:last-of-type': {
          maxWidth: '425rem',
        },
        '&:first-of-type': {
          maxWidth: '750rem',
        },
        '&:only-of-type': {
          marginRight: 'calc(((100% - 750rem - 425rem) / 3) + 425rem)',
          '@media (max-width: 1200px)': {
            marginRight: 0,
          },
        },
      },
    },
    '& > .Bureaucracy': {
      width: '100%',
      maxWidth: '800rem',
      padding: '0 50rem 50rem 50rem',
      boxSizing: 'border-box',
      marginLeft: 'calc(((100% - 750rem - 425rem + 25rem) / 3) - 25rem)',
      '@media (max-width: 1300px)': {
        marginLeft: 0,
      },
      '@media (max-width: 1200px)': {
        margin: '0 auto',
      },
    },
  },
  // Mobile
  '.Page.main-app': {
    '& > .Main': {
      minHeight: 'calc(100vh - 60rem)', // minus TabBar height
      position: 'relative',
      padding: '10rem',
      boxSizing: 'border-box',
      backgroundColor: theme.colors.gray[0],
      '& > .CircleLoader': {
        height: 'calc(100vh - 60rem)',
      },
      '& > .Section': {
        padding: '10rem',
        boxSizing: 'border-box',
      },
    },
    '& > .AppBar + .Main': {
      minHeight: 'calc(100vh - 150rem)', // minus AppBar and TabBar height
      marginTop: '90rem',
      borderTopLeftRadius: '16rem',
      borderTopRightRadius: '16rem',
      boxShadow: '0 0 8rem rgb(0, 0, 0, 0.1)',
      '& > .CircleLoader': {
        height: 'calc(100vh - 150rem)',
      },
      '& > .Section': {
        padding: '30rem 10rem',
      },
    },
    '& > .Bureaucracy': {
      position: 'relative',
      padding: '0rem 20rem 80rem 20rem',
      boxSizing: 'border-box',
      backgroundColor: theme.colors.gray[0],
    },
  },
  // Spacing of the coponents
  '.Section > *, .Form > *': {
    '&.NavBar + .FileGallery': {
      marginTop: '50rem',
    },
    '&.NavBar + .FileDetails': {
      marginTop: '76rem',
    },
    '@media (max-width: 1200px)': {
      '&.NavBar + .FileDetails': {
        marginTop: '50rem',
      },
    },
    '@media (max-width: 768px)': {
      '&.NavBar + .FileDetails': {
        marginTop: '40rem',
      },
    },
  },
}));

export const SingleFormCSS = createGlobalStyle({
  // Desktop, tablet and mobile
  '.Page.single-form': {
    '.Main': {
      maxWidth: '410rem',
      minHeight: 'calc(100vh - 60rem)', // minus Bureaucracy height
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '80rem 20rem',
      boxSizing: 'border-box',
      margin: '0 auto',
      '@media (max-width: 768px)': {
        minHeight: '100vh',
      },
    },
    '.Bureaucracy': {
      padding: '15rem 20rem',
    },
    // Spacing of the coponents
    '.Main > *, .Form > *': {
      '&.Link + .Response, &.Checkbox + .Response, &.TextInput + .Response, &.Response + .ActionButton': {
        marginTop: '15rem',
      },
      '&.Link + .Subheading, &.TextInput + .TextInput': {
        marginTop: '20rem',
      },
      '&.TextInput + .Checkbox, &.TextInput + .Link, &.TextInput + .ActionButton, &.Checkbox + .ActionButton': {
        marginTop: '30rem',
      },
      '&.Subheading + .Form, &.Subheading + .ActionButton': {
        marginTop: '40rem',
      },
    },
  },
});
