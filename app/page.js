export default function LearnWithRanjanWebsite() {
  const freeClasses = [
    {
      title: 'Class 9 Science',
      desc: 'Concept-based free classes with NCERT coverage.',
    },
    {
      title: 'Class 10 Maths',
      desc: 'Board-focused maths lectures and practice.',
    },
    {
      title: 'Class 11 Physics',
      desc: 'Strong fundamentals for competitive exams.',
    },
  ];

  const paidCourses = [
    {
      title: 'Foundation Batch',
      price: '₹999',
      features: 'Full syllabus + Notes + Doubt support',
    },
    {
      title: 'Board Booster Course',
      price: '₹1499',
      features: 'Important questions + PYQs + Tests',
    },
    {
      title: 'Crash Course',
      price: '₹699',
      features: 'Quick revision for exams',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="bg-gradient-to-r from-indigo-700 to-blue-700 px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-6xl font-extrabold">Learn With Ranjan</h1>
          <p className="mt-6 max-w-2xl text-xl text-indigo-100">
            Free & Premium Learning for Classes 9–11
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="https://www.youtube.com/@learnwithranjan07"
              className="rounded-2xl bg-white px-6 py-3 font-semibold text-indigo-700"
            >
              Watch Free Classes
            </a>

            <a
              href="https://instagram.com/learn_with_ranjan07?igsh=NWUyOXd2M2w0NWdw"
              className="rounded-2xl border border-white/30 bg-white/10 px-6 py-3"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-10 text-4xl font-bold">Free Classes</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {freeClasses.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg"
            >
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="mt-3 text-slate-600">{item.desc}</p>

              <a
                href="https://www.youtube.com/@learnwithranjan07"
                className="mt-6 inline-block rounded-xl bg-indigo-600 px-5 py-3 text-white"
              >
                Watch Now
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-10 text-4xl font-bold">Paid Courses</h2>

          <div className="grid gap-8 md:grid-cols-3">
            {paidCourses.map((course) => (
              <div
                key={course.title}
                className="rounded-3xl bg-white p-8 shadow-lg"
              >
                <h3 className="text-3xl font-bold">{course.title}</h3>

                <div className="mt-4 text-4xl font-extrabold text-indigo-700">
                  {course.price}
                </div>

                <p className="mt-5 text-slate-600">{course.features}</p>

                <button className="mt-8 w-full rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 px-5 py-3 font-semibold text-white">
                  Enroll Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 px-6 py-16 text-center text-slate-300">
        <h3 className="text-2xl font-bold text-white">Learn With Ranjan</h3>
        <p className="mt-4 text-slate-400">
          Quality education for students of Classes 9–11.
        </p>
      </footer>
    </div>
  );
}
