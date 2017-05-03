import { getId, getSummary, getExternalLinks } from '../data/formatters';

export const getDisambiguationButtons = movies =>
  movies.map(movie => [{
    text: getSummary(movie),
    callback_data: `details ${getId(movie)}`,
  }]);

export const getExternalLinksButtons = getExternalLinks;