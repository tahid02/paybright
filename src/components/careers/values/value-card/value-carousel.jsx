import React from 'react';
import { Carousel } from 'react-bootstrap';
import ValueCard from './card';

const ValueCarousel = () => {
  return (
    <section
      className="container-fluid  "
      style={{ backgroundColor: '#f2f2fa' }}
    >
      <Carousel
        className="text-dark "
        nextIcon={''}
        prevIcon={''}
        style={{
          height: `${window.innerWidth < 400 ? '60vh' : '50vh'}`,
          position: 'relative',
        }}
      >
        <Carousel.Item
          interval={1000}
          style={{ height: '50vh', position: 'relative' }}
        >
          <Carousel.Caption className="w-100  position-absolute start-0   text-start">
            <ValueCard
              img="https://www.datocms-assets.com/19671/1586202786-values-image.png?auto=format&dpr=1&w=400"
              h4=" We just get it done "
              p=" We execute and have a bias to action. We focus on solutions, not problems"
            />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          interval={1000}
          style={{ height: '50vh', position: 'relative' }}
        >
          <Carousel.Caption className="w-100  position-absolute start-0  text-start">
            <ValueCard
              img="https://www.datocms-assets.com/19671/1592230713-careers-values-2.png?auto=format&dpr=1&w=400"
              h4="We all work for each other"
              p=" We succeed or fail as a team. We have no room for egos or blame. "
            />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          interval={1000}
          style={{
            height: `${window.innerWidth < 400 ? '60vh' : '50vh'}`,
            position: 'relative',
          }}
        >
          <Carousel.Caption
            className="w-100  position-absolute start-0  text-start"
            // style={{ transform: 'translateY(-60%)' }}
          >
            <ValueCard
              img="https://www.datocms-assets.com/19671/1592230757-careers-values-3.png?auto=format&dpr=1&w=382"
              h4="  We are never done improving      "
              p="We are never satisfied with our product or the customer experience. We are always open to a new and better way.      "
            />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          interval={1000}
          style={{ height: '50vh', position: 'relative' }}
        >
          {' '}
          <Carousel.Caption className="w-100  position-absolute start-0  text-start">
            <ValueCard
              img="https://www.datocms-assets.com/19671/1586202786-values-image.png?auto=format&dpr=1&w=400"
              h4=" We just get it done "
              p=" We execute and have a bias to action. We focus on solutions, not problems"
            />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          interval={1000}
          style={{
            height: `${window.innerWidth < 400 ? '60vh' : '50vh'}`,
            position: 'relative',
          }}
        >
          <Carousel.Caption className="w-100  position-absolute start-0  text-start">
            <ValueCard
              img="https://www.datocms-assets.com/19671/1592230773-careers-team-sharing.png?auto=format&dpr=1&w=420"
              h4=" We do the right thing      "
              p=" We act with integrity, transparency, and fairness. We treat everyone the way we would want to be treated.      "
            />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default ValueCarousel;
