Package.describe({
  name: 'kahon:notificationsefficient',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.5');
  api.use(['standard-app-packages'], ['client','server']);
  api.use('accounts-base', 'server');
  
  // Allows the user of this package to choose their own Bootstrap
  // implementation.
  api.use(['twbs:bootstrap@3.3.1', 'nemo64:bootstrap@3.3.1_1'], 'client', {weak: true});
  
  api.addFiles(['client/notifications.html','client/notifications.js','client/style.css'],'client');
  api.addFiles(['server/main.js','server/publications.js'],'server');
  api.addFiles('shared/collections.js',['server','client'])
  
  api.imply(['templating'], 'client');
  api.imply('accounts-base', ['client', 'server']);
  api.export('kahonNotification')

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('kahon:notificationsefficient');
  api.addFiles('notificationsefficient-tests.js');
});
