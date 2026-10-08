import Root from '@/components/Root';
import Grain from '@/components/Grain';
import Nav from '@/components/Nav';
import ActRail from '@/components/ActRail';
import Hero from '@/components/scenes/Hero';
import About from '@/components/scenes/About';
import Manifesto from '@/components/scenes/Manifesto';
import Script from '@/components/scenes/Script';
import Disciplines from '@/components/scenes/Disciplines';
import BreakGrid from '@/components/scenes/BreakGrid';
import BackstageWall from '@/components/scenes/BackstageWall';
import Posters from '@/components/scenes/Posters';
import Redemption from '@/components/scenes/Redemption';
import FullBleed from '@/components/scenes/FullBleed';
import People from '@/components/scenes/People';
import Interval from '@/components/scenes/Interval';
import Finale from '@/components/scenes/Finale';

export default function Page() {
  return (
    <Root>
      <Grain />
      <Nav />
      <ActRail />
      <Hero />
      <About />
      <Manifesto />
      <Script />
      <Disciplines />
      <BreakGrid />
      <BackstageWall />
      <Posters />
      <Redemption />
      <FullBleed />
      <People />
      <Interval />
      <Finale />
    </Root>
  );
}
