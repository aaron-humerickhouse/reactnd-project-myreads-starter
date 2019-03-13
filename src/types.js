import PropTypes from 'prop-types'

export const bookPropType = PropTypes.shape({
  allowAnonLogging: PropTypes.bool,
  authors: PropTypes.arrayOf(PropTypes.string),
  averageRating: PropTypes.number,
  canonicalVolumeLink: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.string),
  contentVersion: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  imageLinks: PropTypes.shape({
    smallThumbnail: PropTypes.string,
    thumbnail: PropTypes.string
  }),
  industryIdentifiers: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    identifier: PropTypes.string
  })),
  infoLink: PropTypes.string,
  language: PropTypes.string,
  maturityRating: PropTypes.string,
  pageCount: PropTypes.number,
  panelizationSummary: PropTypes.shape({
    containsEpubBubbles: PropTypes.bool,
    containsImageBubbles: PropTypes.bool
  }),
  previewLink: PropTypes.string,
  printType: PropTypes.string,
  publishedDate: PropTypes.string,
  publisher: PropTypes.string,
  ratingsCount: PropTypes.number,
  readingModes: PropTypes.shape({
    text: PropTypes.bool,
    image: PropTypes.bool
  }),
  shelf: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string,
});
