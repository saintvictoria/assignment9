console.log('The Iron Yard Rocks');
_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};
var url = 'https://api.github.com/users/saintvictoria';
var urlrepo = 'https://api.github.com/users/saintvictoria/repos';
var urlorg ='https://api.github.com/users/saintvictoria/orgs';
var urlstar ='https://api.github.com/users/saintvictoria/starred'

var repoTemplate =$('#repo-temp').html(),
    renders = _.template(repoTemplate);

    $.getJSON(urlrepo).done(function (repo_data){

      _.each(repo_data, function(x){
        x.updatedDate = moment(x.updated_at).fromNow();
        var output = renders(x);
        $('#repo_list').append(output);

  })
  });


var template = $('#user_stuff').html(),
    render = _.template(template);

    $.getJSON(url).done( function (user_data){

    user_data.createDate = moment(user_data.created_at).fromNow();
    $('#sidebar').append(render(user_data));

  });

var orgTemplate = $('#org_stuff').html(),
    rendered =_.template(orgTemplate);

      $.getJSON(urlorg).done( function (org_data){

      _.each(org_data, function(y){
      $('#undersidebar').append(rendered(y));

  })
  });

  $.getJSON(urlstar).done(function (star_data){
       $('#star').html(''+star_data.length);

    });
