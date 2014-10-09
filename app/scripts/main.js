console.log('The Iron Yard Rocks');
_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

var temp1 = $('#repo-temp').first()[0].innerText;
console.log('temp1=',temp1);

var template = _.template(temp1);

_.each(repos, function(repo) {

repo.days_ago=3;
var repo1html = template({
  'repo': repo
  });
console.log('repo1=',repo1html);
var $li = $('<li></li>');
$li.html(repo1html);
$('#repo_list').append($li);

});
