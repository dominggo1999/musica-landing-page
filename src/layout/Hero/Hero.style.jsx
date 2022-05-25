import tw, { styled, theme } from 'twin.macro';
import { Link } from '../../common/Link';

export const HeroWrapper = styled.main`
  ${tw` 
    text-white
    w-full 
    flex  
    flex-col
    md:flex-row
    items-center 
    gap-x-4
    gap-y-5
  `}
`;

export const Details = styled.div`
  ${tw`
    flex  
    flex-col 
    w-full
    xl:w-1/3 
  `}
`;

export const Title = styled.h1`
  ${tw`
    text-accent 
    font-semibold 
    text-3xl
    md:text-4xl
    xl:text-5xl 
    mb-3
  `}
`;

export const Description = styled.p`
  ${tw`
    md:text-lg
    xl:text-xl 
    mb-4
  `}

  a{
    ${tw`
      text-accent 
    `}
  }
`;

export const DemoVideo = styled.div`
  ${tw`
    w-full 
    xl:w-2/3
    xl:min-h-[460px]
  `}

  .plyr{
    ${tw`
      w-full
    `}

    --plyr-color-main : ${theme`colors.accent`} ;
  }

`;

export const LinksWrapper = styled.div`
  ${tw`
    flex  
    flex-wrap 
    gap-3
  `}
`;

export const LinkButton = styled.a`
  ${tw`
    rounded-full 
    text-primary 
    bg-accent 
    px-5 
    py-2  
    font-semibold 
    cursor-pointer 
    flex 
    items-center 
    text-sm
  `}

  svg{
    ${tw`
      text-xl 
      mr-2
    `}
  }
`;

export const WarningMessage = styled.span`
  ${tw`
    mt-3 
    text-sm 
    italic 
    mb-3
  `}
`;
