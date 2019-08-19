
$('document').ready(() => {


  $('#da').click(() => {
    $('#prvi').slideUp(1000);
    $('#omotac').slideDown(1000);
    reset();
  })

  $('#ne').click(() => {
    $('#ne').text('Ho HO HO??');
    $('#ne').click(() => {
      $('#ne').hide(1000);
    })
  })

  let un = $('#unos').val();

  reset();

  // unos klikom na dugme "DODAJ"
  $('#dodavanje').click(() => {
    unos();
  })

  //unos pritiskanjem tipke "ENTER"
  $('#unos').keypress((event) => {
    let keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
      unos();
    }
  })

  // brisanje stavki
  $('#brisanje').click(() => {
    if ($('#brisiSve').is(':checked')) {
      $('#lista').children('li').hide(1000);
    }
    else {
      $('input:checked').parent('li').hide(1000);
    }
    reset();
  })

  //definisanje funkcije unos
  function unos() {
    un = $('#unos').val();
    let li = $('<li> <input class="box" type="checkbox">' + ' ' + un + '</input></li>');
    li.addClass('mb-2 mt-2');
    if (un === '') {
      alert('Morate nešto uneti!');
    }
    else {
      $('#lista').append(li);
    }
    reset();
  }

  //definisanje funkcije reset
  function reset() {
    un = $('#unos').val('');
    $('#brisiSve').prop('checked', false);
    $('#unos').focus();
  }

  // precrtavanje urađenog
  $('ol').on('click', 'li', function () {
    $(this).css({ 'text-decoration': 'line-through', 'background-color': 'grey' });
    
  }
  )
})