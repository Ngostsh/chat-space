$(function() {

  var search_list = $("#user-search-result");
  var selected_list = $("#chat-group-users");
  
  function appendListUser(user) {
     var html = `<div class="chat-group-user clearfix">
     <p class="chat-group-user__name">${ user.name }</p>
     <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${ user.id }" data-user-name="${ user.name }">追加</div>
   </div>`
      search_list.append(html);
  }

  function appendUser(user_id, user_name) {
    var html = `<div class='chat-group-user'>
    <input name='group[user_ids][]' type='hidden' value='${ user_id }'>
    <p class='chat-group-user__name'>${ user_name }</p>
    <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
  </div>`
      selected_list.append(html);
  }

  function appendErrMsgToHTML(msg) {
    var html = `<div class='chat-group-user clearfix'>${ msg }</div>`
    search_list.append(html);
  }
  
    $("#user-search-field").on("keyup", function() {
      var input = $("#user-search-field").val();
      $.ajax({
        type: 'GET',
        url: '/users',
        data: { keyword: input },
        dataType: 'json'
      })
      
      .done(function(users) {
      $("#user-search-result").empty();
        if (users.length !== 0) {
          users.forEach(function(user){
            appendListUser(user);
          });
        }
        else {
          appendErrMsgToHTML("一致するユーザーが見つかりません");
        }
      })
      .fail(function() {
        alert('ユーザー検索に失敗しました');
      })
    });
    $(document).on("click", ".user-search-add", function() {
      var user_id = $(this).data('user-id');
      var user_name = $(this).data('user-name');
      appendUser(user_id, user_name);
    })
    $(document).on("click", ".user-search-add", function() {
      var parent = $(this).parent();
      $(parent).remove();
    })
    $(document).on("click", ".user-search-remove", function() {
      var parent = $(this).parent();
      $(parent).remove();
    })
  });