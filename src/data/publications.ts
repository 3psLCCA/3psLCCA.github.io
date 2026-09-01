export type PublicationStatus = 'Published' | 'Accepted' | 'Submitted';

export interface Publication {
  type: 'Journal Article' | 'Conference Paper';
  status?: PublicationStatus;
  title: string;
  authors: string;
  venue: string;
  link?: string;
}

export const publications: Publication[] = [
  {
    type: 'Journal Article',
    title:
      'An Integrated Life Cycle Cost Assessment Framework Incorporating Cost of Carbon Dioxide Equivalent for Buildings Subjected to Natural Hazards',
    authors: 'Pajgade, R. P., Raghunandan, M., & Ghosh, S. (2025)',
    venue: 'Sustainable Cities and Society, 126, 106394.',
    link: 'https://www.sciencedirect.com/science/article/pii/S2210670725002707',
  },
  {
    type: 'Conference Paper',
    title:
      'A comparative life cycle cost assessment of short-span road bridges with prestressed concrete girders and steel girders',
    authors:
      'Pajgade, R. P., Mahasrankintakam, A. B., Jha, M. K., Ghosh, S., & Raghunandan, M. (2025)',
    venue:
      'In 9th International Symposium on Life Cycle Civil Engineering (IALCCE 2025), Melbourne, Australia.',
  },
  {
    type: 'Conference Paper',
    status: 'Accepted',
    title:
      'A Life-Cycle Sustainability Assessment Framework for Bridges with Parametric Evaluation of Social and Environmental Factors',
    authors:
      'Khare, N., Mahasrankintakam, A. B., Sulakhe, R. P., Gupta, S., Pajgade, R. P., Tankala, S., Raghunandan, M., & Ghosh, S. (2026)',
    venue:
      'In 3rd International Conference on Net-Zero Built Environment: Innovations in Materials, Structures, and Management Practices (Net-Zero Future 2026), Darmstadt, Germany.',
  },
  {
    type: 'Conference Paper',
    status: 'Submitted',
    title: 'Development of Life Cycle Cost Assessment Tool for Short-Span Bridges',
    authors:
      'Mahasrankintakam, A. B., Pajgade, R. P., Gupta, S., Ghosh, S., Raghunandan, M., George, C., Najwani, G., & Karia, P. C. (2026)',
    venue:
      'In 12th International Conference on the Behaviour of Steel Structures in Seismic Areas (STESSA 2026), New Delhi, India.',
  },
  {
    type: 'Conference Paper',
    status: 'Accepted',
    title: 'Life Cycle Cost Comparison of Steel Bridges Across Seismic Zones',
    authors:
      'Pajgade, R. P., Tankala, S., Raghunandan, M., Ghosh, S., Mahasrankintakam, A. B., Chikhalikar, S., & Jha, M. K. (2026)',
    venue:
      'In 12th International Conference on the Behaviour of Steel Structures in Seismic Areas (STESSA 2026), New Delhi, India.',
  },
];
