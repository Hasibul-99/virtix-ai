
const AIGrowth = () => {
  return (
    <section className="ai-growth min-h-screen bg-gradient-to-br from-[#f3e7ff] via-[#e7f0ff] to-[#e7ffe7] py-20">
      <div className="container">
        <div className="growth-content flex flex-col items-center justify-center gap-8">
          <div className='md:w-3xl space-y-4'>
            <h2 className="text-6xl leading-[120%] text-[#0C0900] font-bold text-center">
              AI assistant designed to fuel your growth
            </h2>
            <p className="font-normal text-base leading-[140%] text-[#0C0900] text-center">
              AI-powered text enhancement polish your responses, ensuring professionalism and supporting human expertise every time.
            </p>
          </div>

          <div className="flex md:flex-row flex-col items-center justify-center gap-8">
            <div className="flex-1 bg-gradient-to-b from-[#F9F5FF] to-[rgba(249,245,255,0)] border border-[#F4EDFF] rounded-[20px] p-[32px_24px] space-y-4">
              <div className="feature-header">
                <h3 className="text-3xl leading-[120%] text-[#0C0900] font-bold">Communicate confidently</h3>
              </div>
              <p>
                AI-powered text enhancement polish your responses, ensuring professionalism and supporting human expertise every time.
              </p>

              <img src="/assets/images/whiteCard.png" className="w-full  h-[300px]object-cover" alt="whiteCard" />
            </div>
            <div className="flex-1 bg-gradient-to-b from-[#F9F5FF] to-[rgba(249,245,255,0)] border border-[#F4EDFF] rounded-[20px] p-[32px_24px] space-y-4">
              <div className="feature-header">
                <h3 className="text-3xl leading-[120%] text-[#0C0900] font-bold">Simplify your workflow</h3>
              </div>
              <p>
                Tag suggestions automatically tags conversations, saving you time on manual searching and tagging.
              </p>
              <img src="/assets/images/whiteCard.png" className="w-full  h-[300px]object-cover" alt="whiteCard" />
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default AIGrowth;