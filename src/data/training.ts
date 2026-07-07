import type { TrainingEntry } from '../types';

export const training: TrainingEntry = {
  id: 'depi',
  program: 'Digital Egypt Pioneers Initiative (DEPI) — Full Stack Web Development',
  issuer: 'Ministry of Communications & Information Technology, Egypt',
  duration: 'Jun 2025 – Dec 2025',
  description:
    'A government-sponsored, production-oriented program focused on backend and full-stack development. It mattered less for the syllabus than for the pressure test: cohort-wide ranking, a real capstone delivered on a deadline with a team, and outside evaluation of the code — not a self-paced certificate.',
  highlights: [
    { label: 'National ranking', value: '4th — Software Engineering track (Round 3)' },
    { label: 'Recognition', value: 'Top Performer across all tracks' },
    { label: 'Certificate', value: 'Certificate of Distinction, awarded at the national closing ceremony' },
    { label: 'Capstone', value: 'Bookify — Hotel Reservation Platform' },
  ],
  relatedProjectId: 'bookify',
};
