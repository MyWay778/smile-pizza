import { type ReactElement } from 'react';
import ContentLoader from 'react-content-loader';

export default function ItemLoader(): ReactElement {
  return (
    <ContentLoader
      speed={2}
      width={260}
      height={478}
      viewBox="0 0 260 478"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <rect x="30" y="272" rx="0" ry="0" width="200" height="16" />
      <circle cx="130" cy="130" r="120" />
      {/* <circle cx="130" cy="130" r="130" /> */}
      <rect x="2" y="317" rx="10" ry="10" width="260" height="87" />
      <rect x="112" y="424" rx="20" ry="20" width="144" height="44" />
      <rect x="7" y="435" rx="0" ry="0" width="82" height="24" />
    </ContentLoader>
  );
}
