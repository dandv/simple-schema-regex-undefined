Package.describe({
  name: 'dandv:records',
  version: '0.0.1',
  summary: 'Simple Schema Records',
});

Package.onUse(function(api) {
  api.use('mongo');
  api.use('aldeed:simple-schema');
  api.imply('aldeed:simple-schema');
  api.use('aldeed:collection2');
  api.imply('aldeed:collection2');
  api.addFiles('records.js');
});
