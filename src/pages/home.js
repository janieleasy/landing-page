import React from 'react';

import HeaderContainer from '../containers/header';
import HeroContainer from '../containers/hero';
import DescriptContainer from '../containers/description';
import DownloadContainer from '../containers/download';
import SubscribeContainer from '../containers/subscribe';
import FooterContainer from '../containers/footer';

export default function Home() {
  return (
    <>
      <HeaderContainer />
      <main>
        <HeroContainer />
        <DescriptContainer />
        <DownloadContainer />
        <SubscribeContainer />
      </main>
      <FooterContainer />
    </>
  )
}
