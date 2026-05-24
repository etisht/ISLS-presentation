# Speaker Notes — Teacher Engagement in Online Micro-Credential PD
## ISLS 2025

---

### Slide 1 — Title

Hi everyone. My name is Eti, and I'm a researcher from the University of Haifa. This is joint work with Laila Sliman, Linor Hadar, and Tsafrir Goldberg from Haifa, and Arnon Hershkovitz from Tel Aviv University. Our study asks a deceptively simple question: when teachers log into an online professional development course, click around, post in forums, and take quizzes — what is that actually telling us about their engagement? And does it matter for their learning outcomes?

---

### Slide 2 — Motivation

Micro-credentials are growing fast, and the platforms they run on generate rich behavioral data. Yet most research still relies on surface metrics — login counts, completion rates — that don't tell us what's actually happening cognitively or socially during learning. On Hakaveret, Israel's national platform, there are 839 courses and over 46,000 enrollments — and yet there is no data-driven conceptualization of what engagement actually looks like there. We're essentially counting footsteps without asking where people are going or why. That's the gap we set out to address.

---

### Slide 3 — Theoretical Framework

Our work rests on two theoretical pillars. First, Knowles' adult learning theory: teachers are self-directed, autonomous learners driven by relevance and experience — and online platforms should, in theory, support that. Second, Finn and Zimmer's multidimensional engagement model: engagement is cognitive, behavioral, emotional, and social — four distinct dimensions that shouldn't be collapsed into a single click count. The challenge — the proxy problem — is that most studies use behavioral counts without testing whether those proxies actually reflect the underlying construct. Learning analytics gives us a way to test this empirically, rather than assume it.

---

### Slide 4 — Research Questions

We organized the study around three integrated questions. RQ1 is structural: what are the latent dimensions of engagement in this data — not imposed by theory, but revealed by the data itself. RQ2 is predictive: do those dimensions actually predict learning outcomes — course completion, activity completion, and practical classroom application. RQ3 is person-centered: are there distinct types of teachers that emerge from combining these dimensions, and what do those profiles look like? Each question builds on the previous one: structure, then prediction, then profiling.

---

### Slide 5 — Study Context & Data

Our data comes from Hakaveret — Israel's ministry-accredited micro-credential platform for teacher professional development. Courses are roughly equivalent to three hours of learning and typically include a quiz, a discussion forum, and a practical application component. We analyzed log data from eight courses spanning 2021 to 2025, resulting in 5,271 valid teacher records after cleaning. On the behavioral side, we captured forum comments and word count, quiz attempts, first-attempt scores and duration, time on platform from first to last log, task uploads, and total log records. All variables were standardized as Z-scores to allow comparison across courses with different baselines.

---

### Slide 6 — Method

Our analysis has three sequential steps, each addressing one research question. First, Exploratory Factor Analysis with Promax rotation — to let the data reveal the latent structure of engagement without imposing a predetermined model. Second, regression analysis — logistic for course completion, linear for the other two outcomes — using the factors as predictors. Third, two-step cluster analysis on the combined factor scores to identify distinct teacher profiles. This multi-method design moves us from structure, to prediction, to person-centered profiling in a replicable and integrated way.

---

### Slide 7 — Finding 1: Three Dimensions

The factor analysis revealed three interpretable dimensions that together explain 56% of the variance. Factor 1 — Forum Activity — loads strongly on all four forum variables and explains the largest share of variance at roughly 25%. That alone is telling: discussion is the dominant axis of behavioral differentiation between teachers. Factor 2 — Quiz Performance — captures assessment behavior: fewer attempts paired with a higher first-attempt score signals efficiency; the reverse signals struggle. Factor 3 — Learning Effort — reflects persistence: time on platform, task uploads, and quiz duration. Model fit is acceptable — KMO of 0.6 and Bartlett's test highly significant.

---

### Slide 8 — Finding 2: Forum Dominates

When we used the three factors to predict learning outcomes, the pattern was consistent and striking. For course completion, teachers with higher Forum Activity were nearly 15 times more likely to complete — OR = 14.895, p < .001 — with model accuracy improving from 89.6% to 95.4%. For completed activities, Forum Activity was again the strongest predictor (β = .428), followed by Learning Effort (β = .161). Quiz Performance was not significant for any of the three outcomes. Social participation in discussion is not just one factor among many — it's the dominant mechanism linking engagement to outcomes.

---

### Slide 9 — Finding 3: Three Profiles

Cluster analysis yielded a stable three-cluster solution. Active Collaborators are above average on forum participation and learning duration but average on quiz scores — they engage socially and invest time, and they tend to complete the course. Struggling Strivers have the highest log records and the longest time on platform — they're clearly putting in the effort — but their quiz scores are significantly below average. High effort does not translate to high achievement. Efficient Achievers show the opposite pattern: minimal activity, below-average forum participation, yet the highest quiz scores. They appear to learn efficiently, likely drawing on prior expertise. The takeaway: observable effort is not a reliable proxy for achievement.

---

### Slide 10 — Discussion

These patterns carry important interpretive weight. The dominance of forum activity confirms that social learning is the primary mechanism driving completion — discussion is where teachers externalize and deepen understanding. But Efficient Achievers complicate the picture: some teachers succeed without the community, likely because important learning happens offline — prior knowledge, independent reflection — outside what the logs can see. Struggling Strivers reveal a design failure: the platform allows high-effort learners to keep investing time without adequate feedback or support. And this raises a genuine tension: how do we design for discussion without coercing learners who don't need it to succeed?

---

### Slide 11 — Implications & Future Work

For designers: the priority should be meaningful, structured forum experiences — and early detection mechanisms for high-effort, low-achievement learners who need adaptive scaffolding and timely feedback. Rethinking what "completion" means — beyond activity checklists toward quality of engagement — is also warranted. For research: this is an initial stage of a larger program; we plan to expand to the full dataset to test structural stability, apply NLP to analyze the semantic quality of forum discourse rather than just its quantity, and incorporate multimodal data including self-reports and classroom observation. The limitations are real: eight courses, one platform, and behavioral data that cannot fully capture cognitive or emotional processes.

---

### Slide 12 — Conclusion

To close: this study provides the first empirically derived conceptualization of teacher engagement in a national micro-credential platform. Three dimensions — Forum Activity, Quiz Performance, and Learning Effort — emerge from the data. Forum participation alone is 15 times more predictive of course completion than other engagement behaviors. Three distinct teacher profiles exist in this population, and each requires a different kind of platform response. The overarching message: observable activity is not a reliable proxy for learning. We need to move beyond counting clicks and design environments that foster the kind of engagement that actually matters. Thank you — I'm happy to take questions.
