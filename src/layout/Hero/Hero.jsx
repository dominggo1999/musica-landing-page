/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import Plyr from 'plyr-react';
import 'plyr-react/dist/plyr.css';
import { AiFillWindows, AiFillGithub } from 'react-icons/ai';
import {
  HeroWrapper,
  Details,
  Title,
  Description,
  DemoVideo,
  LinkButton,
  LinksWrapper,
  WarningMessage,
} from './Hero.style';
import { Link } from '../../common/Link';

const Hero = () => {
  return (
    <HeroWrapper>
      <Details>
        <Title>Musica</Title>
        <Description>Desktop music player app created using
          {' '}
          <Link to="https://www.electronjs.org/">
            electron
          </Link>
          {' '}
          and
          {' '}
          <Link to="https://reactjs.org/">
            react
          </Link>
          .
        </Description>
        <LinksWrapper>
          <LinkButton to="https://mega.nz/file/yqhTGZiA#K-4d4bxDIfHu4ST_3DqW_Hlt3jjGlRTum9PzHrkrw5c">
            <AiFillWindows />
            Download zip
          </LinkButton>
          <LinkButton to="https://mega.nz/file/fy4zSLgb#zwwd0Vji2VvmJnUVpfVLKiI2i4jI6vmVNgQp6zeZ5RY">
            <AiFillWindows />
            Download msi
          </LinkButton>
        </LinksWrapper>
        <WarningMessage>*Only tested on windows 7 and windows 10</WarningMessage>

        <LinksWrapper>
          <LinkButton
            to="https://github.com/dominggo1999/music-player"
          >
            <AiFillGithub />
            Source Code
          </LinkButton>
        </LinksWrapper>
      </Details>
      <DemoVideo>
        <Plyr
          source={{
            type: 'video',
            title: 'Example title',
            sources: [
              {
                src: '/test.mp4',
                type: 'video/mp4',
              },
            ],
          }}
        >
        </Plyr>
      </DemoVideo>
    </HeroWrapper>
  );
};

export default Hero;
