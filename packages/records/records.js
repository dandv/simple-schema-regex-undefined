'use strict';

Records = new SimpleSchema({
  note: {
    type: String,
    label: 'Notes',
    optional: true
  },
  userId: {
    type: SimpleSchema.RegEx.Id,
    optional: true
  }
});
