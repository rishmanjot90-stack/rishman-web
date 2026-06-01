import Image from 'next/image';

export default function ProfileIntro() {
  return (
    <section className="py-8 lg:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 lg:gap-14 items-start">
        {/* Image - Top on Mobile, Right on Desktop */}
        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
          <Image
            src="/me.jpg"
            alt="Dr. Rishman Jot Kaur Chahal"
            width={300}
            height={400}
            priority
            className="h-auto rounded-2xl shadow-lg"
          />
        </div>

        {/* Content - Below Image on Mobile, Left on Desktop */}
        <div className="order-2 lg:order-1 max-w-3xl">
          <div className="space-y-4 text-[17px] leading-7 text-foreground/90">
            <p>
              Dr. Chahal is currently working as an Assistant Professor of
              Economics in the Department of Humanities and Social Sciences at
              the Indian Institute of Technology Roorkee (IIT Roorkee). She is
              also a Joint Faculty member at the Mehta School of Data Science
              and Artificial Intelligence.
            </p>

            <p>
              Her research interests span Governance and Institutions, Financial
              Economics, Computational General Equilibrium (CGE) Modelling, Time
              Series Data Analysis, and Applied Machine Learning and Artificial
              Intelligence.
            </p>

            <p>
              She has published in leading journals including Energy Economics,
              International Review of Financial Analysis, Research in
              International Business and Finance, and the Journal of Behavioural
              and Experimental Finance. Her research has also been presented at
              international conferences such as WEAI, ASSA/AEA, and ADBI.
            </p>

            <p>
              Dr. Chahal is currently associated with multiple research projects
              supported by TIH–IIT Kharagpur, the Ministry of Road Transport and
              Highways (MoRTH), the University Grants Commission (UGC),
              SmartAlpha Pvt. Ltd., and IIT Roorkee.
            </p>

            <p>
              Prior to joining IIT Roorkee, she worked as a researcher with
              UNEP, Montreal, Canada, and earned her PhD in Economics from IIT
              Kanpur.
            </p>
          </div>

          <div className="mt-6">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800 transition"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// import Image from 'next/image';

// export default function ProfileIntro() {
//   return (
//     <div className="flex flex-col-reverse lg:flex-row gap-12 items-start">
//       {/* Left Content */}
//       <div className="flex-1 space-y-4 text-base leading-relaxed text-foreground/90">
//         <p>
//           Dr. Chahal is currently working as an Assistant Professor of Economics
//           in the Department of HSS at the Indian Institute of Technology Roorkee
//           (IITR) and is also a Joint Faculty member at the Mehta School of Data
//           Science and Artificial Intelligence at IITR. She primarily works in
//           Governance and Institutions, Financial Economics, Computational
//           General Equilibrium (CGE) Modelling, Time Series Data Analysis, and
//           Applied ML & AI.
//         </p>

//         <p>
//           She has publications in Energy Economics, International Review of
//           Financial Analysis, Research in International Business and Finance,
//           Journal of Behavioural and Experimental Finance, and has presented at
//           conferences such as WEAI, ASSA/AEA, and ADBI.
//         </p>

//         <p>
//           Before joining IIT Roorkee, she worked as a researcher with UNEP,
//           Montreal, Canada, and completed her PhD in Economics from IIT Kanpur.
//         </p>

//         <div className="pt-4">
//           <a
//             href="/resume.pdf"
//             download
//             className="inline-flex items-center px-5 py-2.5 rounded-lg bg-black text-white hover:bg-gray-800 transition"
//           >
//             Download Resume
//           </a>
//         </div>
//       </div>

//       {/* Right Image */}
//       <div className="w-full lg:w-auto flex justify-center lg:justify-end shrink-0">
//         <Image
//           src="/me.jpg"
//           alt="Dr. Rishman Jot Kaur Chahal"
//           width={350}
//           height={500}
//           priority
//           className="rounded-xl border shadow-lg h-auto max-w-full"
//         />
//       </div>
//     </div>
//   );
// }

// export default function ProfileIntro() {
//   return (
//     <div className="space-y-6">
//       <div>
//         <h1 className="text-4xl md:text-5xl font-bold mb-2">
//           Dr. Rishman Jot Kaur Chahal
//         </h1>
//         <p className="text-lg text-muted-foreground">
//           Assistant Professor & Researcher
//         </p>
//       </div>
//       <div className="space-y-4 text-base leading-relaxed text-foreground/90 max-w-3xl">
//         <p>
//           Dr. Chahal, is currently working as an assistant professor of
//           economics in the Department of HSS at Indian Institute of Technology
//           Roorkee (IITR) and also a joint faculty at the Mehta School of Data
//           Science and Artificial Intelligence at IITR. She primarily works in
//           Governance and Institutions, Financial Economics, Computational
//           General Equilibrium (CGE) Modelling, Time Series Data analysis and
//           Applied ML and AI. She has prestigious publications in Energy
//           Economics, International Review of Financial Analysis, Research in
//           International Business and Finance, Journal of Behavioural and
//           Experimental Finance and others along with prestigious conferences
//           like WEAI, ASSA/AEA, ADBI. She is also associated with 05 projects
//           supported by TIH – IIT Kharagpur, Ministry of Road Transport and
//           Highways (MoRTH), University Grants Commission (UGC), SmartAlpha Pvt.
//           Ltd. and IITR. Before joining IITR she also worked as a researcher
//           with UNEP, Montreal, Canada and completed her PhD in Economics from
//           IIT Kanpur.
//         </p>
//         <p>
//           With a strong academic background .She did her master's in economics
//           from Madras School of Economics and bachelor’s degree in Economics
//           (Honours) from Delhi University, I am committed to advancing knowledge
//           through rigorous research and quality education. My work involves
//           interdisciplinary collaboration, especially through the Mehta Family
//           School of Data Science and AI.
//         </p>
//         {/* <p>
//           Explore my educational background, professional experience, research
//           visits, and administrative contributions through the sections above.
//         </p> */}

//         <div className="mt-4">
//           <a
//             href="/resume.pdf"
//             download
//             className="inline-flex items-center px-5 py-2.5 rounded-lg bg-black text-white hover:bg-gray-800 transition"
//           >
//             Download Resume
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }
