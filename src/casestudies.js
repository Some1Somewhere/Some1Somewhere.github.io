// TrueMark work page. Copy only; visuals are keyed by `visual` and rendered by
// src/pages/casestudy/visuals.js. Keep school, district and teacher names out.

const truemark = {
  intro: "Two years as the only engineer. Three things I'd point to.",
  impact: [
    { value: "2 → 2,300", label: "teachers" },
    { value: "229", label: "schools" },
    { value: "45,000", label: "students" },
    { value: "1", label: "engineer" },
  ],
  stories: [
    {
      slug: "pages",
      title: "Pages",
      cover: require("./assets/images/portfolio/case-pages.svg").default,
      tagline: "Word-style pages for every student essay",
      visual: "pages",
      problem: "Teachers grade in pages. Our editor scrolled. So teachers sent students to Google Docs, and schools wouldn't pay for a writing tool their teachers routed around.",
      built: "I put Word-style pages inside the editor: breaks as you type, editable headers, page numbers, footnotes that stay on their page, print that matches the screen. Started from one open-source extension, rebuilt most of it.",
      result: "The Google Docs objection stopped coming up in sales calls. 130,000+ essays. TipTap shipped the same feature 6 months later.",
    },
    {
      slug: "tutor",
      title: "The tutor",
      cover: require("./assets/images/portfolio/case-tutor.svg").default,
      tagline: "An AI tutor that asks instead of answers",
      visual: "tutor",
      image: require("./assets/images/truemark/tutor-mock.png"),
      problem: "The tutor is meant to ask, not answer. One teacher said it was writing for her students. One opinion can't change a prompt 45,000 students use, so I measured it.",
      built: "Pulled 186 of her tutor conversations and 200 matched ones from other classes out of Langfuse (where every AI conversation is logged) and had a model grade each turn: did the tutor write something the student could paste in? Hers: 13.0%. Others: 5.5%. She was right.",
      result: "Fixed the prompt in a day. The same replay now runs before every AI change, and the PM runs it herself. A student's review, from the TrueMark homepage: \"Your copilot sucks it didn't write my essay.\"",
    },
    {
      slug: "exam-day",
      title: "Exam day",
      cover: require("./assets/images/portfolio/case-exam.svg").default,
      tagline: "44 essays a minute, none lost",
      visual: "exam",
      problem: "In June, finals for 14 sections hit submit in one period, about 35x what the product could take. Every submit generated its report on the API pod, and compose_diffs spawned uncapped threads that starved the event loop. Health checks timed out, Kubernetes killed pods faster than they came back, 8 of 12 died. 158 students got errors mid-exam. Districts don't renew after a day like that.",
      built: "Split submit from grading. Submit now writes the submission and enqueues a Cloud Tasks job; a Cloud Run worker pool generates the report, with an inline fallback if the enqueue fails so the new path can never be worse than the old one. Deleted compose_diffs for a page-length index that is binary-searched at read time. Rolled out behind a flag, 0 to 100% over 8 days, alerts watched at every step. Load-tested by replaying a whole district: 5,000 students, 4,175 of 4,175 submits, all 292,617 Firestore writes verified.",
      result: "Two months later, a district benchmark 30x the size of the June class: 4,338 essays in a day, 2,844 students, a peak of 44 submits a minute (a 2,600-an-hour pace, 1.5x the rate that killed it in June), 0 failures a student saw. The June district renewed. Back-to-school went through, in the team's own words, \"without depleting customer goodwill.\"",
    },
  ],
};

export { truemark };
