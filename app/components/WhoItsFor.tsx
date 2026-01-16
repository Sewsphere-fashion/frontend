export default function WhoItsFor() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-6">

        {/* Box 1 */}
        <div
          className="relative h-[320px] rounded-xl overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1520975916090-3105956dac38')",
          }}
        >
          {/* Fixed label */}
          <p className="absolute top-6 left-6 z-20 text-primary text-[18px] font-medium">
            For Clients
          </p>

          <div className="relative z-10 p-6 pt-12 flex flex-col justify-center h-full">
            <h3 className="text-white text-[45px] leading-[56px] font-semibold mb-2">
              Order custom and ready-made fashion with confidence
            </h3>
            <p className="text-gray-200 text-[20px] leading-[32px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aliquid ea non fugit porro quam
              delectus nihil earum ipsa facilis iure.
            </p>
          </div>
        </div>

        {/* Box 2 */}
        <div
          className="relative h-[320px] rounded-xl overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1556905055-8f358a7a47b2')",
          }}
        >
          {/* Fixed label */}
          <p className="absolute top-6 left-6 z-20 text-primary text-[18px] font-medium">
            For Designers
          </p>

          <div className="relative z-10 p-6 flex flex-col justify-center h-full">
            <h3 className="text-white text-[45px] leading-[56px] font-semibold mb-2">
              Focus on craft, not chaos
            </h3>
            <p className="text-gray-200 text-[20px] leading-[32px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aliquid ea non fugit porro quam
              delectus nihil earum ipsa facilis iure.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
