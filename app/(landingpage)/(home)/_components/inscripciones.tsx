import ButtonHero from "./button-hero";
import StarsCanvas from "./landing-star-background";
import PricingCard from "./pricing-card";

interface ImageClipBox {
  src: string;
  clipClass: string;
}
const ImageClipBox = ({ src, clipClass }: ImageClipBox) => {
  return (
    <div className={clipClass}>
      <img src={src} />
    </div>
  );
};
const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10 ">
      <div className="relative rounded-lg bg-black  text-blue-50 sm:overflow-hidden z-10">
        <section className="py-10 relative w-full h-full flex flex-col justify-center items-center bg-transparent text-white">
          {/* The star background */}
          <StarsCanvas />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Inscripciones
            </h2>
            <p className="text-lg text-gray-300 mb-12">
              Start tracking and improving your finance management
            </p>

            <div className="flex flex-col md:flex-row gap-8 items-stretch justify-center">
              <PricingCard
                planName="Free"
                price="$0,00/month"
                description="Great for trying out Finament and for tiny teams"
                buttonText="Start for Free"
                features={[
                  "Account Aggregation",
                  "Expense Tracking",
                  "Budgeting Tools",
                  "Transaction Insights",
                  "Basic Security",
                ]}
              />
              <PricingCard
                planName="Professional"
                price="$98,00/month"
                description="Best for growing startups and growth companies"
                buttonText="Sign Up with Professional"
                highlight
                highlightLabel="Most Popular"
                features={[
                  "Everything in Free",
                  "Customizable Dashboards",
                  "Advanced Budgeting",
                  "Investment Tracking",
                  "Enhanced Security",
                ]}
              />
              <PricingCard
                planName="Enterprise"
                price="$160,00/month"
                description="Best for large companies and teams requiring high security"
                buttonText="Sign Up with Enterprise"
                features={[
                  "Financial Planning Tools",
                  "Priority Support",
                  "Premium Widgets",
                  "Advanced Security",
                  "Integration with 3rd-Party Services",
                ]}
              />
            </div>
          </div>
        </section>
        {/* <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            clipClass="contact-clip-path-1"
            src="img/contact-1.webp"
          />
          <ImageClipBox
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
            src="img/contact-2.webp"
          />
        </div>
        <div className="absolute -top-40 left-20  w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80 ">
          <ImageClipBox
            clipClass="absolute md:scale-125"
            src="img/swordman-partial.webp"
          />
          <ImageClipBox
            clipClass="sword-man-clip-path md:scale-125"
            src="img/swordman.webp"
          />
        </div>
        <div className="flex flex-col items-center text-center">
          <p className="font-general text-[10px] uppercase">
            ¡Únete a nuestra plataforma de astrofotografía!
          </p>
          <p className="special-font mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[6rem]">
            Inscripciones
          </p>
          <ButtonHero
            id="contact-btn"
            title="contact us"
            containerClass="mt-10 cursor-pointer"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
