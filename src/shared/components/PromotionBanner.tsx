import { Button } from "./Button";

export const PromotionBanner = () => {
  // Data for the countdown timer circles
  const timerData = [
    { label: "Days", value: "05" },
    { label: "Hours", value: "23" },
    { label: "Minutes", value: "59" },
    { label: "Seconds", value: "35" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="bg-btn-black rounded-lg p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden relative">
        
        {/* --- Background Design: Blurred Ellipses (Right Side) --- */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-30 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-content-muted rounded-full blur-[100px]" />
        </div>

        {/* --- Section 1: Content (Left) --- */}
        <div className="flex flex-col gap-8 z-10 w-full md:w-1/2">
          {/* Small Title with Success Color */}
          <span className="text-btn-success font-semibold text-base">
            Categories
          </span>

          {/* Main Headline */}
          <h2 className="text-brand-white text-4xl md:text-6xl font-semibold leading-tight">
            Enhance Your <br /> Music Experience
          </h2>

          {/* Countdown Timer Grid */}
          <div className="flex items-center gap-4 md:gap-6">
            {timerData.map((item) => (
              <div 
                key={item.label}
                className="w-16 h-16 md:w-20 md:h-20 bg-brand-white rounded-full flex flex-col items-center justify-center shadow-lg"
              >
                <span className="text-content-dark font-bold text-lg leading-tight">
                  {item.value}
                </span>
                <span className="text-content-dark text-[10px] md:text-xs">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Reusable Button with Success Color */}
          <Button variant="success" className="w-fit px-12 py-4">
            Buy Now!
          </Button>
        </div>

        {/* --- Section 2: Image Visual (Right) --- */}
        <div className="w-full md:w-1/2 relative z-10 flex justify-center items-center">
          {/* Image Displayer Placeholder */}
          <div className="w-full aspect-square md:aspect-auto flex items-center justify-center group">
            <img 
              src="/path-to-your-speaker-image.png" 
              alt="Speaker" 
              className="object-contain w-full max-h-[400px] drop-shadow-[0_20px_50px_rgba(255,255,255,0.2)] transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

      </div>
    </section>
  );
};