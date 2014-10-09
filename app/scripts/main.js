console.log('The Iron Yard Rocks');
_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

var temp1 = $('#repo-temp').first()[0].innerText;
console.log('temp1=',temp1);

var template = _.template(temp1);
var repo1html = template({
  'repo': repos[0]
  });
console.log('repo1=',repo1html);
$('#repo_list').html(repo1html);
