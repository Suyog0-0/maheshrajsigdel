"use client";

import React, { useState } from 'react';

export default function PublicationsPage() {
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const publications = [
    {
      id: 1,
      title: "Thyroid Dysfunction in Chronic Kidney Disease Patients",
      authors: "Khadge R, Sigdel MR, Pandit R, Jha B, Yadav BK",
      journal: "Acta Scientific Medical Sciences",
      year: 2025,
      volume: "9.6",
      pages: "115-121",
      type: "Journal Article",
    },
    {
      id: 2,
      title: "Association between Dialysis Adequacy and Health related quality of life in Maintenance Hemodialysis in a tertiary care center of Nepal",
      authors: "Pandey J, Sigdel MR, Nepali R, Kafle MP, Shrestha M, Shah DS",
      journal: "Kidney International Reports",
      year: 2025,
      volume: "10(2)",
      pages: "S449",
      doi: "10.1016/j.ekir.2024.11.808",
      type: "Journal Article",
    },
    {
      id: 3,
      title: "Comparison of the clinical profile of IgA Nephropathy with other primary Glomerulonephritis in Nepalese patients undergoing native kidney biopsy",
      authors: "Saud K, Shah DS, Sigdel MR, Gautam N",
      journal: "Kidney International Reports",
      year: 2025,
      volume: "10(2)",
      pages: "S626-S627",
      doi: "10.1016/j.ekir.2024.11.1113",
      type: "Journal Article",
    },
    {
      id: 4,
      title: "Assessment of Dietary Salt compliance in patients with hypertension under antihypertensive therapy",
      authors: "Acharya S, Sigdel MR, Singh DS",
      journal: "Kidney International Reports",
      year: 2025,
      volume: "10(2)",
      pages: "S344-S345",
      doi: "10.1016/j.ekir.2024.11.638",
      type: "Journal Article",
    },
    {
      id: 5,
      title: "Mental and psychosocial health of living kidney donors in Tribhuvan University Teaching Hospital, Nepal: gratitude, contenment and apprehension",
      authors: "Bhurtyal N, Shah DS, Sigdel MR, Kafle MP, Shrestha M, Nepali R, Dhakal N",
      journal: "Kidney International Reports",
      year: 2025,
      pages: "S557-S558",
      type: "Journal Article",
    },
    {
      id: 6,
      title: "Association between Tacrolimus Trough level and incidence of new onset Diabetes Mellitus after kidney Transplantation",
      authors: "Pandey J, Sigdel MR, Nepali R, Kafle MP, Shrestha M, Shah DS",
      journal: "Kidney International Reports",
      year: 2025,
      pages: "S554",
      type: "Journal Article",
    },
    {
      id: 7,
      title: "BK Virus Nephropathy and transplant outcomes: a single center study",
      authors: "Ojha P, Shah DS, Phuyal M, Sigdel MR",
      journal: "JIOM Nepal",
      year: 2024,
      type: "Journal Article",
    },
    {
      id: 8,
      title: "MEST C Score and Treatment Response in IgA Nephropathy in a Tertiary Care Hospital: A Descriptive Cross-sectional Study",
      authors: "Thapa S, Sigdel MR",
      journal: "J Nepal Med Assoc",
      year: 2024,
      volume: "62(276)",
      pages: "536-41",
      type: "Journal Article",
    },
    {
      id: 9,
      title: "Metabolic Syndrome in patients with Urinary Tract Stone Disease: A Hospital based Single Center Study",
      authors: "Ali R, Sigdel MR",
      journal: "JIOM Nepal",
      year: 2023,
      volume: "45(3)",
      pages: "1-6",
      type: "Journal Article",
    },
    {
      id: 10,
      title: "Assessment of Volume Status using Body Composition Monitor for Blood Pressure Control in Patients undergoing maintenance Hemodialysis: a randomized Controlled Trial",
      authors: "Dhakal N, Sapkota NK, Sigdel MR",
      journal: "JIOM Nepal",
      year: 2023,
      volume: "45(1)",
      type: "Journal Article",
    },

    // ---------- ADDED PUBLICATIONS (11–47) BELOW ----------
    {
      id: 11,
      title: "Ultrasonographic Assessment of Renal Parameters in Apparently Healthy Medical Students of a University Hospital",
      authors: "Thapa S, Khanal UP, Paudel Sharma, Sigdel MR",
      journal: "JIOM Nepal",
      year: 2023,
      volume: "45(1)",
    },
    {
      id: 12,
      title: "Cataract among Patients with Renal Transplantation in a Tertiary Care Centre: A Descriptive Cross-sectional Study",
      authors: "Thapa M, Shrestha G B, Gautam P, Sigdel M R",
      journal: "J Nepal Med Assoc",
      year: 2023,
      volume: "61(257)",
      pages: "64-67",
    },
    {
      id: 13,
      title: "Factors Affecting Readmission in Hospitalized Patients with Chronic Kidney Disease: A Single Center Study",
      authors: "Wagle A, Sigdel MR",
      journal: "Journal of Institute of Medicine Nepal",
      year: 2022,
      volume: "44(2)",
    },
    {
      id: 14,
      title: "Transplant Renal Artery Stenosis in Living Donor Kidney Transplant Recipients",
      authors: "Dhakal N, Sigdel MR, Chalise PR, Bhurtyal N, Shah DS",
      journal: "Journal of Institute of Medicine Nepal",
      year: 2022,
      volume: "44(1)",
    },
    {
      id: 15,
      title: "Global Dialysis Perspective: Nepal",
      authors: "Sharma I, Bhattarai M, Sigdel MR",
      journal: "Kidney 360",
      year: 2022,
    },
    {
      id: 16,
      title: "Anti-SARS-CoV-2 Antibody Level among Renal Transplant Recipients: A Case Report from Nepal",
      authors: "Ranabhat K, Saud B, Adhikari S, Bhattarai S, Adhikari R, Luitel BR, Sigdel MR",
      journal: "Case Reports in Urology",
      year: 2022,
    },
    {
      id: 17,
      title: "Post-Transplant Erythrocytosis in Live Donor Kidney Transplant Recipients",
      authors: "Maharjan S, Chhetri S, Khatri B, Sapkota N, Sigdel MR",
      journal: "JIOM Nepal",
      year: 2020,
      pages: "62-66",
    },
    {
      id: 18,
      title: "Prevalence, Clinical Presentation, and Outcome of Tuberculosis in Patients with Chronic Kidney Disease",
      authors: "Pradhan RR, Sigdel MR",
      journal: "International Journal of Nephrology",
      year: 2020,
    },
    {
      id: 19,
      title: "Health related quality of life among haemodialysis and kidney transplant recipients from Nepal",
      authors: "Ranabhat K, Khanal P, Mishra SR, Khanal A, Tripathi S, Sigdel MR",
      journal: "BMC Nephrology",
      year: 2020,
    },
    {
      id: 20,
      title: "Incidence of Contrast Induced Acute Kidney Injury",
      authors: "Upadhaya P, Thapa P, Gajurel RM, Sigdel MR",
      journal: "JIOM Nepal",
      year: 2020,
    },
    {
      id: 21,
      title: "Preparedness for Coronavirus Disease in Hospitals of Nepal",
      authors: "Shrestha G S, Paneur H R, Acharya S P, Shrestha S K, Sigdel MR, Tiwari S",
      journal: "J Nepal Med Assoc",
      year: 2020,
      pages: "248-251",
    },
    {
      id: 22,
      title: "Systemic lupus erythematosus and pregnancy outcome in tertiary level hospital of Nepal",
      authors: "Rawal S, Paudyal P, Sigdel MR",
      journal: "Nep Med J",
      year: 2019,
    },
    {
      id: 23,
      title: "Chronic Kidney Disease in a Tertiary Care Hospital in Nepal",
      authors: "Sigdel MR, Pradhan RR",
      journal: "Journal of Institute of Medicine",
      year: 2018,
    },
    {
      id: 24,
      title: "Status of vitamin D and parameters of calcium homeostasis in renal transplant recipients in Nepal",
      authors: "Timalsina S, Sigdel MR, Baniya S, Subedee S",
      journal: "BMC Nephrology",
      year: 2018,
    },
    {
      id: 25,
      title: "Tuberculosis in Living Donor Kidney Transplant Recipients",
      authors: "Kafle MP, Sigdel MR, Shrestha M, Nepali R, Chhetri S, Shah DS",
      journal: "Transplantation",
      year: 2018,
    },
    {
      id: 26,
      title: "Abnormalities in Protocol Graft Kidney Biopsy 6 Months Posttransplantation",
      authors: "Shrestha M, Singh D, Sigdel MR, Kafle MP",
      journal: "Transplantation Proceedings",
      year: 2018,
    },
    {
      id: 27,
      title: "Spectrum of Infections in Living Donor Kidney Transplant Recipients",
      authors: "Kafle MP, Sigdel MR, Shrestha M, Shah DS",
      journal: "Transplantation Proceedings",
      year: 2018,
    },
    {
      id: 28,
      title: "Assessment of quality of life in patients undergoing hemodialysis",
      authors: "Joshi U, Subedi R, Poudel P, Ghimire PR, Panta S, Sigdel MR",
      journal: "International Journal of Nephrology and Renovascular Disease",
      year: 2017,
    },
    {
      id: 29,
      title: "Rhabdomyolysis in Earthquake Victims in Nepal",
      authors: "Nepali R, Sigdel MR, Shah DS",
      journal: "Kidney Int Rep",
      year: 2017,
    },
    {
      id: 30,
      title: "Outcome of low dose cyclophosphamide for lupus nephritis",
      authors: "Sigdel MR, Kafle MP, Shah DS",
      journal: "BMC Nephrology",
      year: 2016,
    },
    {
      id: 31,
      title: "Hepatitis E induced severe myositis",
      authors: "Nepali R, Shah DS, Sigdel MR",
      journal: "Journal of Institute of Medicine",
      year: 2016,
    },
    {
      id: 32,
      title: "Chronic kidney disease in south Asia",
      authors: "Mishra SR, Adhikari S, Sigdel MR",
      journal: "Lancet",
      year: 2016,
    },
    {
      id: 33,
      title: "Acquisition of history taking and clinical skills",
      authors: "Khanal S, Bhusal M, Sigdel MR",
      journal: "Journal of Institute of Medicine",
      year: 2015,
    },
    {
      id: 34,
      title: "Systemic lupus erythematosus with antiphospholipid syndrome",
      authors: "Sharma AK, Sitaula S, Thapa M, Gautam P, Shrestha GS, Gajurel BP, Sigdel MR",
      journal: "Journal of Institute of Medicine",
      year: 2014,
    },
    {
      id: 35,
      title: "Prevalence of specific types of kidney disease",
      authors: "Kafle MP, Shah DS, Shrestha S, Sigdel MR",
      journal: "Journal of Advances in Internal Medicine",
      year: 2014,
    },
    {
      id: 36,
      title: "Systemic Lupus Erythematosus presenting with Bullous lesion",
      authors: "Sigdel MR",
      journal: "Journal of Advances in Internal Medicine",
      year: 2013,
    },
    {
      id: 37,
      title: "Renal transplant in Nepal: medical complications",
      authors: "Shrestha S, Raut KB, Sigdel MR, Kaﬂe MP, Shah DS",
      journal: "Journal of Institute of Medicine",
      year: 2013,
    },
    {
      id: 38,
      title: "Lupus Nephritis: A comprehensive review",
      authors: "Sigdel MR, Shah D S, Raut K B",
      journal: "Journal of Institute of Medicine",
      year: 2013,
    },
    {
      id: 39,
      title: "Wasp bite in a referral hospital in Nepal",
      authors: "Sigdel MR, Raut KB",
      journal: "J Nepal Health Res Counc",
      year: 2013,
    },
    {
      id: 40,
      title: "Femoral artery pseudoaneurysm",
      authors: "Sigdel MR",
      journal: "Journal of Advances in Internal Medicine",
      year: 2013,
    },
    {
      id: 41,
      title: "Antibiotic sensitivity profile of uropathogens",
      authors: "Kattel HP, Mishra SK, Acharya J, Sigdel MR",
      journal: "Journal of Nepal Association for Medical Laboratory Sciences",
      year: 2012,
    },
    {
      id: 42,
      title: "Severe Immune Thrombocytopenic Purpura Treated with Plasma Exchange",
      authors: "Sigdel MR, Shah DS, Kafle MP, Raut KB",
      journal: "Kathmandu Univ Med J",
      year: 2012,
    },
    {
      id: 43,
      title: "Distal Renal Tubular Acidosis in Adolescence",
      authors: "Sigdel MR, Kafle MP, Raut K B",
      journal: "J Nepal Med Assoc",
      year: 2012,
    },
    {
      id: 44,
      title: "Prescribing medication in patients with impaired renal function",
      authors: "Bharati L, Sigdel M, Shakya R",
      journal: "Journal of Institute of Medicine",
      year: 2011,
    },
    {
      id: 45,
      title: "Renal Transplantation in Nepal – the first Year’s experience",
      authors: "Chalise P R, Shah DS, Sharma UK, Gyawali PR, Shrestha GK, Joshi BR, Kafle MP, Sigdel M",
      journal: "Saudi J of Kidney Dis Transpl",
      year: 2010,
    },
    {
      id: 46,
      title: "Urological complications after Kidney transplantation",
      authors: "Chalise PR, Sharma UT, Gyawali PR, Shrestha GN, Joshi BR, Gurung GS, Ghimire RK, Kafle MP, Sigdel MR",
      journal: "Kathmandu Univ Med J",
      year: 2010,
    },
    {
      id: 47,
      title: "Immune Thrombocytopenic Purpura in Pregnant women",
      authors: "Rawal S, Sigdel MR, Singh M, Baral J",
      journal: "Journal of Institute of Medicine",
      year: 2007,
    },
  ];

  const filteredPublications = publications.filter(pub => {
    const matchesYear = selectedYear === 'all' || pub.year.toString() === selectedYear;
    const matchesType = selectedType === 'all' || pub.type === selectedType;
    return matchesYear && matchesType;
  });

  const stats = [
    { label: 'Total Publications', value: publications.length },
    { label: 'Years Active', value: '2007-2025' },
    { label: 'Co-authors', value: '50+' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% center;
          }
          50% {
            background-position: 200% center;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 6s ease infinite;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        ::selection {
          background: rgba(251, 191, 36, 0.3);
          color: white;
        }
      `}</style>

      {/* Hero Section */}
      <div className="relative overflow-hidden pt-32 pb-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="relative inline-block mb-8">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent animate-gradient-x hover:scale-105 transition-transform duration-200 cursor-default">
              Publications
            </h1>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full animate-pulse"></div>
          </div>
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto mt-8">
            A comprehensive collection of research papers, clinical studies, and medical publications in nephrology and kidney care
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-center">
                <p className="text-3xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-slate-400 text-sm">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Publications List */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="space-y-6">
          {filteredPublications.map((pub, index) => (
            <div
              key={pub.id}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 hover:transform hover:scale-[1.02] group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="mt-1 p-2 bg-gradient-to-br from-amber-400 to-orange-400 rounded-lg shrink-0">
                      <svg className="w-5 h-5 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white group-hover:text-amber-400 transition-colors mb-2">
                        {pub.title}
                      </h3>
                      <p className="text-slate-400 text-sm mb-2">{pub.authors}</p>
                      <div className="flex flex-wrap items-center gap-3 text-sm">
                        <span className="text-amber-400 font-medium">{pub.journal}</span>
                        {pub.volume && (
                          <span className="text-slate-500">• Volume {pub.volume}</span>
                        )}
                        {pub.pages && (
                          <span className="text-slate-500">• Pages {pub.pages}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-3 shrink-0">
                  <div className="px-4 py-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-lg border border-amber-500/30">
                    <span className="text-amber-400 font-semibold">{pub.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {filteredPublications.length === 0 && (
            <div className="text-center py-20">
              <svg className="w-16 h-16 text-slate-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-slate-400 text-lg">No publications found matching your criteria</p>
              <p className="text-slate-500 text-sm mt-2">Try adjusting your filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}