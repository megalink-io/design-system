import React, { useMemo, useContext } from 'react';
import { useForm, UseForm } from '../../../../hooks';
import { ColorScheme, DeviceType } from '../../../../context';
import { ActionButton, IconButton } from '../../actions';
import { Response } from '../../feedback';
import { Form, TextInput, Checkbox } from '../../inputs';
import { Logo } from '../../graphics';
import { FileGallery, FileDetails } from '../../media';
import { Main, Section, Visibility } from '../../layout';
import { Link, Bureaucracy, SideBar, NavBar, AppBar, TabBar } from '../../navigation';
import { CircleLoader } from '../../status';
import { Title, Heading, Subheading, Detail } from '../../typography';
import {
  HouseSVG,
  ListSVG,
  FolderSVG,
  SunSVG,
  NightSVG,
  AlarmSVG,
  GearSVG,
  DeleteSVG,
} from '../../../../icons';
import Page from '.';

const files = [
  {
    id: 'hans-veth-unsplash',
    created: new Date('2020-03-24T22:44:53.917Z'),
    modified: new Date('2020-03-24T22:44:53.917Z'),
    type: 'image/jpeg',
    src: '/images/hans-veth-unsplash-1920px.jpg',
    size: 189901,
    width: 1920,
    height: 1280,
    srcset: [
      {
        src: '/images/hans-veth-unsplash-1280px.jpg',
        size: 57605,
        width: 1280,
        height: 853,
      },
      {
        src: '/images/hans-veth-unsplash-640px.jpg',
        size: 19783,
        width: 640,
        height: 427,
      },
      {
        src: '/images/hans-veth-unsplash-320px.jpg',
        size: 7795,
        width: 320,
        height: 213,
      },
    ],
  },
  {
    id: 'harshil-gudka-unsplash',
    created: new Date('2020-03-24T22:44:53.917Z'),
    modified: new Date('2020-03-24T22:44:53.917Z'),
    type: 'image/jpeg',
    src: '/images/harshil-gudka-unsplash-1920px.jpg',
    size: 571003,
    width: 1920,
    height: 1275,
    srcset: [
      {
        src: '/images/harshil-gudka-unsplash-1280px.jpg',
        size: 174425,
        width: 1280,
        height: 850,
      },
      {
        src: '/images/harshil-gudka-unsplash-640px.jpg',
        size: 43079,
        width: 640,
        height: 425,
      },
      {
        src: '/images/harshil-gudka-unsplash-320px.jpg',
        size: 11876,
        width: 320,
        height: 213,
      },
    ],
  },
  {
    id: 'jerry-zhang-unsplash',
    created: new Date('2020-03-24T22:44:53.917Z'),
    modified: new Date('2020-03-24T22:44:53.917Z'),
    type: 'image/jpeg',
    src: '/images/jerry-zhang-unsplash-1920px.jpg',
    size: 345464,
    width: 1920,
    height: 1282,
    srcset: [
      {
        src: '/images/jerry-zhang-unsplash-1280px.jpg',
        size: 108949,
        width: 1280,
        height: 855,
      },
      {
        src: '/images/jerry-zhang-unsplash-640px.jpg',
        size: 31499,
        width: 640,
        height: 427,
      },
      {
        src: '/images/jerry-zhang-unsplash-320px.jpg',
        size: 9997,
        width: 320,
        height: 214,
      },
    ],
  },
  {
    id: 'jonathan-borba-unsplash',
    created: new Date('2020-03-24T22:44:53.917Z'),
    modified: new Date('2020-03-24T22:44:53.917Z'),
    type: 'image/jpeg',
    src: '/images/jonathan-borba-unsplash-1920px.jpg',
    size: 332686,
    width: 1920,
    height: 1280,
    srcset: [
      {
        src: '/images/jonathan-borba-unsplash-1280px.jpg',
        size: 103980,
        width: 1280,
        height: 853,
      },
      {
        src: '/images/jonathan-borba-unsplash-640px.jpg',
        size: 29936,
        width: 640,
        height: 427,
      },
      {
        src: '/images/jonathan-borba-unsplash-320px.jpg',
        size: 9808,
        width: 320,
        height: 213,
      },
    ],
  },
  {
    id: 'marian-kroell-unsplash',
    created: new Date('2020-03-24T22:44:53.917Z'),
    modified: new Date('2020-03-24T22:44:53.917Z'),
    type: 'image/jpeg',
    src: '/images/marian-kroell-unsplash-1920px.jpg',
    size: 299311,
    width: 1920,
    height: 1280,
    srcset: [
      {
        src: '/images/marian-kroell-unsplash-1280px.jpg',
        size: 115931,
        width: 1280,
        height: 853,
      },
      {
        src: '/images/marian-kroell-unsplash-640px.jpg',
        size: 44490,
        width: 640,
        height: 427,
      },
      {
        src: '/images/marian-kroell-unsplash-320px.jpg',
        size: 17134,
        width: 320,
        height: 213,
      },
    ],
  },
  {
    id: 'simon-marsault-unsplash',
    created: new Date('2020-03-24T22:44:53.917Z'),
    modified: new Date('2020-03-24T22:44:53.917Z'),
    type: 'image/jpeg',
    src: '/images/simon-marsault-unsplash-1920px.jpg',
    size: 328496,
    width: 1920,
    height: 2880,
    srcset: [
      {
        src: '/images/simon-marsault-unsplash-1280px.jpg',
        size: 98753,
        width: 1280,
        height: 1920,
      },
      {
        src: '/images/simon-marsault-unsplash-640px.jpg',
        size: 31114,
        width: 640,
        height: 960,
      },
      {
        src: '/images/simon-marsault-unsplash-320px.jpg',
        size: 9947,
        width: 320,
        height: 480,
      },
    ],
  },
  {
    id: 'wolfgang-hasselmann-unsplash',
    created: new Date('2020-03-24T22:44:53.917Z'),
    modified: new Date('2020-03-24T22:44:53.917Z'),
    type: 'image/jpeg',
    src: '/images/wolfgang-hasselmann-unsplash-1920px.jpg',
    size: 298515,
    width: 1920,
    height: 1280,
    srcset: [
      {
        src: '/images/wolfgang-hasselmann-unsplash-1280px.jpg',
        size: 71149,
        width: 1280,
        height: 853,
      },
      {
        src: '/images/wolfgang-hasselmann-unsplash-640px.jpg',
        size: 19057,
        width: 640,
        height: 427,
      },
      {
        src: '/images/wolfgang-hasselmann-unsplash-320px.jpg',
        size: 6362,
        width: 320,
        height: 213,
      },
    ],
  },
];

const SingleFormPage: React.FC = ({ children }) => (
  <Page variant="single_form">
    {children}
    <Bureaucracy centered>
      <Link href="https://www.example.com/imprint" target="_blank">
        Imprint
      </Link>
      <Link href="https://www.example.com/privacy-policy" target="_blank">
        Privacy policy
      </Link>
      <Link href="https://www.example.com/terms" target="_blank">
        Terms
      </Link>
    </Bureaucracy>
  </Page>
);

const MainAppPage: React.FC = ({ children }) => {
  const [deviceType] = useContext(DeviceType);
  const [colorScheme, setColorScheme] = useContext(ColorScheme);

  const changeColorScheme = () => {
    setColorScheme(prevState => (prevState === 'light' ? 'dark' : 'light'));
  };

  if (deviceType === 'desktop' || deviceType === 'tablet') {
    return (
      <Page variant="main_app">
        <SideBar
          topMenu={
            <>
              <IconButton
                icon={<HouseSVG />}
                label="Home"
                variant="tertiary"
                color="white"
                type="link"
                to="/"
                exact
              />
              <IconButton
                icon={<ListSVG />}
                label="Link pages"
                variant="tertiary"
                color="white"
                type="link"
                to="/link-pages"
              />
              <IconButton
                icon={<FolderSVG />}
                label="Media library"
                variant="tertiary"
                color="white"
                type="link"
                to="/media-library"
              />
            </>
          }
          bottomMenu={
            <>
              <IconButton
                icon={colorScheme === 'light' ? <NightSVG /> : <SunSVG />}
                label="Color scheme"
                variant="tertiary"
                color="white"
                type="button"
                onClick={changeColorScheme}
              />
              <IconButton
                icon={<AlarmSVG />}
                label="Notifications"
                variant="tertiary"
                color="white"
                type="link"
                to="/notifications"
                counter={7}
              />
              <IconButton
                icon={<GearSVG />}
                label="Settings"
                variant="tertiary"
                color="white"
                type="link"
                to="/settings"
              />
            </>
          }
        />
        <div className="Content">
          {children}
          <Bureaucracy>
            <Link href="https://www.example.com/imprint" target="_blank">
              Imprint
            </Link>
            <Link href="https://www.example.com/privacy-policy" target="_blank">
              Privacy policy
            </Link>
            <Link href="https://www.example.com/terms" target="_blank">
              Terms
            </Link>
          </Bureaucracy>
        </div>
      </Page>
    );
  }

  return (
    <Page variant="main_app">
      {children}
      <Bureaucracy centered>
        <Link href="https://www.example.com/imprint" target="_blank">
          Imprint
        </Link>
        <Link href="https://www.example.com/privacy-policy" target="_blank">
          Privacy policy
        </Link>
        <Link href="https://www.example.com/terms" target="_blank">
          Terms
        </Link>
      </Bureaucracy>
      <TabBar>
        <IconButton
          icon={<HouseSVG />}
          label="Home"
          variant="tertiary"
          color="gray"
          type="link"
          to="/"
          exact
        />
        <IconButton
          icon={<ListSVG />}
          label="Link pages"
          variant="tertiary"
          color="gray"
          type="link"
          to="/link-pages"
        />
        <IconButton
          icon={<FolderSVG />}
          label="Media library"
          variant="tertiary"
          color="gray"
          type="link"
          to="/media-library"
        />
      </TabBar>
    </Page>
  );
};

export const SingleFormLoadingPreview: React.FC = () => (
  <SingleFormPage>
    <Main>
      <CircleLoader size="large" color="colorful" centered />
    </Main>
  </SingleFormPage>
);

export const SignupPreview: React.FC = () => {
  const fieldsInfo = useMemo<UseForm.FieldsInfo>(
    () => ({
      email: {
        type: 'text_input',
        validate: value => {
          const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
          if (!value) {
            return 'Please enter your email.';
          }
          if (typeof value !== 'string' || !regex.test(value)) {
            return 'The email address is badly formatted.';
          }
          return '';
        },
      },
      password: {
        type: 'text_input',
        validate: value => {
          if (!value) {
            return 'Please enter a password.';
          }
          if (typeof value !== 'string' || value.length < 6) {
            return 'You password must have 6 characters or more.';
          }
          return '';
        },
      },
      agreements: {
        type: 'checkbox',
        validate: value => !value,
      },
    }),
    []
  );

  const form = useForm(fieldsInfo);

  const handleSubmit = async () => {
    try {
      form.validate();
      form.updateResponse({
        status: 'information',
        message: 'The registration was successful.',
      });
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <SingleFormPage>
      <Main>
        <Link href="https://www.megalink.io/">
          <Logo variant="logo" size="small" />
        </Link>
        <Subheading>Welcome to the familiy!</Subheading>
        <Form onSubmit={handleSubmit}>
          <TextInput
            {...(form.fields.email as UseForm.TextInput)}
            name="email"
            type="email"
            placeholder="Your email"
            required
          />
          <TextInput
            {...(form.fields.password as UseForm.TextInput)}
            name="password"
            type="password"
            placeholder="Your password"
            required
          />
          <Checkbox
            {...(form.fields.agreements as UseForm.Checkbox)}
            name="agreements"
            label={useMemo(
              () => (
                <>
                  I agree to the{' '}
                  <Link href="https://www.megalink.io/privacy-policy" target="_blank">
                    privacy policy
                  </Link>
                </>
              ),
              []
            )}
            required
            centered
          />
          <Response {...form.response} />
          <ActionButton
            {...form.button}
            type="submit"
            variant="primary"
            color="green"
            label="Sign up"
          />
        </Form>
      </Main>
    </SingleFormPage>
  );
};

export const MainAppLoadingPreview: React.FC = () => (
  <MainAppPage>
    <Main>
      <CircleLoader size="large" color="colorful" centered />
    </Main>
  </MainAppPage>
);

export const MediaLibraryPreview: React.FC = () => (
  <MainAppPage>
    <Visibility mobile>
      <AppBar>
        <Title color="white">Media library</Title>
        <Detail color="white">12 % of 0.5 GB used</Detail>
      </AppBar>
    </Visibility>
    <Main>
      <Section>
        <Visibility desktop tablet>
          <NavBar>
            <Title>Media library</Title>
            <Detail>12 % of 0.5 GB used</Detail>
            <ActionButton
              label="Upload"
              variant="primary"
              color="blue"
              type="button"
              onClick={() => {}}
            />
          </NavBar>
        </Visibility>
        <FileGallery rootPath="/media-library" files={files} />
      </Section>
    </Main>
  </MainAppPage>
);

export const MediaFilePreview: React.FC = () => (
  <MainAppPage>
    <Main>
      <Visibility desktop>
        <Section>
          <Visibility desktop tablet>
            <NavBar>
              <Title>Media library</Title>
              <Detail>12 % of 0.5 GB used</Detail>
              <ActionButton
                label="Upload"
                variant="primary"
                color="blue"
                type="button"
                onClick={() => {}}
              />
            </NavBar>
          </Visibility>
          <FileGallery rootPath="/media-library" files={files} />
        </Section>
      </Visibility>
      <Section>
        <NavBar>
          <Heading>{files[4].id}</Heading>
          <IconButton
            icon={<DeleteSVG />}
            label="Delete"
            variant="tertiary"
            type="button"
            onClick={() => {}}
          />
        </NavBar>
        <FileDetails file={files[4]} />
      </Section>
    </Main>
  </MainAppPage>
);

export default {
  title: 'Components/core/layout/Page',
  includeStories: [],
};
