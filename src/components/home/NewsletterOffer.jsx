// 6. NewsletterOffer.jsx
export default function NewsletterOffer() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h2 className="text-2xl md:text-4xl font-bold mb-5">
            Get 10% Off Your First Order!
          </h2>
          <p className="text-base md:text-xl mb-8 md:mb-10 text-neutral">
            Join thousands of parents and get exclusive deals & new arrival alerts
          </p>

          <form className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center max-w-md md:max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="input input-bordered input-md md:input-lg flex-1 rounded-full"
            />
            <button
              type="submit"
              className="btn btn-primary btn-md md:btn-lg rounded-full px-8 md:px-12"
            >
              Claim Offer
            </button>
          </form>

          <p className="text-xs md:text-sm mt-6 md:mt-8 opacity-70">
            We respect your privacy • Unsubscribe anytime
          </p>
        </div>
      </div>
    </section>
  );
}