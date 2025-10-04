import { FC } from 'react';
// -------- custom components -------- //
import Carousel from 'components/reuseable/Carousel';
import carouselBreakpoints from 'utils/carouselBreakpoints';
import NextLink from 'components/reuseable/links/NextLink';
import { TeamCard2 } from 'components/reuseable/team-cards';
// -------- data -------- //
import teams from 'data/team-list';

const Team8: FC = () => {
  return (
    <section className="wrapper bg-light">
      <div className="container py-14 py-md-16">
        <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
          {/* Left Column */}
          <div className="col-lg-4">
            <header className="text-center text-lg-start">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">Meet the Team</h2>
              <h3 className="display-5 mb-5">Save your time and money by choosing our professional team.</h3>
              <p>
              Our team is composed of experienced professionals who are passionate about delivering exceptional results.
              Each member brings unique skills and a commitment to excellence in everything we do.
              </p>
              <NextLink title="See All Members" href="#" className="btn btn-primary rounded-pill mt-3" />
            </header>
          </div>

          {/* Right Column - Carousel */}
          <div className="col-lg-8">
            <div className="swiper-container text-center mb-6">
              <Carousel grabCursor navigation={false} breakpoints={carouselBreakpoints}>
                {teams.map((team) => (
                  <TeamCard2 key={team.id} {...team} />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team8;
