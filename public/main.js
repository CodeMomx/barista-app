// document.querySelector('#submit')


const complete = document.getElementsByClassName("fa-circle-check");
// const thumbDown = document.getElementsByClassName("fa-thumbs-down");
const trash = document.getElementsByClassName("fa-ban");

Array.from(trash).forEach(function(element) {
  element.addEventListener('click', function(){
    const _id = this.parentNode.parentNode.id
    console.log(_id)
    fetch('orders', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        '_id': _id
      })
    }).then(function (response) {
      window.location.reload()
    })
  });
});
Array.from(complete).forEach(function(element) {
      element.addEventListener('click', function(){
        const _id = this.parentNode.parentNode.id
        const barista = this.parentNode.parentNode.parentNode.children[1].innerText
        console.log(_id, barista)
        fetch('orders', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            '_id': _id,
            'barista': barista
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

// Array.from(thumbDown).forEach(function(element) {
//   element.addEventListener('click', function(){
//     const name = this.parentNode.parentNode.parentNode.children[0].querySelector(".name").innerText
//     const msg = this.parentNode.parentNode.parentNode.children[0].querySelector(".msg").innerText
//     const thumbDown = parseFloat(this.parentNode.parentNode.children[0].innerText)
//     fetch('messagesDown', {
//       method: 'put',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify({
//         'name': name,
//         'msg': msg,
//         'thumbUp':thumbDown
//       })
//     })
//     .then(response => {
//       if (response.ok) return response.json()
//     })
//     .then(data => {
//       console.log(data)
//       window.location.reload(true)
//     })
//   });
// });


