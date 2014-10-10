console.log('The Iron Yard Rocks');
_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};
var url = 'https://api.github.com/users/saintvictoria';
var urlrepo = 'https://api.github.com/users/saintvictoria/repos';
var urlorg ='https://api.github.com/users/saintvictoria/orgs';

var repoTemplate =$('#repo-temp').text(),
    renders = _.template(repoTemplate);

    $.getJSON(urlrepo).done(function (repo_data){

      _.each(repo_data, function(x){
        $('#repo_list').append(renders(x));

  })
  });


var template = $('#user_stuff').html(),
    render = _.template(template);

    $.getJSON(url).done( function (user_data){


      $('#sidebar').append(render(user_data));

  });

var orgTemplate = $('#org_stuff').html(),
    rendered =_.template(orgTemplate);

      $.getJSON(urlorg).done( function (org_data){

      _.each(org_data, function(y){
      $('#undersidebar').append(rendered(y));

  })
  });
