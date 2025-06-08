export const CreateCommentMessages = {
  text: {
    invalidFormat: 'text is required',
    lengthField: 'min length is 5, max is 1024'
  },
  rating: {
    invalidFormat: 'rating must be an integer number',
    min: 'rating must be at least 1',
    max: 'rating must be at most 5'
  },
  offerId: {
    invalidFormat: 'offerId field must be a valid id'
  },
  userId: {
    invalidFormat: 'userId field must be a valid id'
  },
} as const;
