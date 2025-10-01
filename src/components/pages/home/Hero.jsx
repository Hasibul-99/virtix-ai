import { Button } from 'antd';

const Hero = () => {
  return (
    <section className="hero-section min-h-screen bg-gradient-to-br from-[#f3e7ff] via-[#e7f0ff] to-[#e7ffe7] pt-40">
      <div className="container ">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-2 space-y-4">
            <h1 className="font-normal text-6xl leading-[120%] text-[#0C0900] font-semibold">
              Supercharge customer service with AI Agent
            </h1>
            <p className="font-normal text-2xl leading-relaxed text-gray-600">
              Unlock the full potential of your customer service with our AI-powered agent. Streamline interactions, boost efficiency, and deliver exceptional customer experiences.
            </p>
            <div className="flex items-center gap-4">
              <Button type="primary">Try for free</Button>
              <Button>Try for free</Button>
            </div>
            <div className="mt-10">
              <p className='font-normal text-[24px] leading-[140%] text-[#444444] font-bold'>Trusted by</p>
              <div className="flex items-center justify-between">
                <div>
                  <img src="/assets/images/slack.png" alt="slack" />
                </div>
                <div>
                  <img src="/assets/images/zoom.png" alt="zoom" />
                </div>
                <div>
                  <img src="/assets/images/asana.png" alt="asana" />
                </div>
                <div>
                  <img src="/assets/images/gumroad.png" alt="outreach" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <img src="/assets/images/image-1.png" alt="hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;