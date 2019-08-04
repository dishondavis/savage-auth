var thumbUp = document.getElementsByClassName("fa-thumbs-up");
<<<<<<< HEAD
var trash = document.getElementsByClassName("fa-trash");
=======
var trash = document.getElementsByClassName("throwAway");
>>>>>>> 7517e87a003e6516a50e892c30a2c3be21a76baa
var thumbDown = document.getElementsByClassName("fa fa-thumbs-down");

Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        fetch('messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'msg': msg,
            'thumbUp':thumbUp
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

Array.from(thumbDown).forEach(function(element) {
<<<<<<< HEAD
      element.addEventListener('click', function(){
        console.log("thumbDown", thumbDown)
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        fetch('countDown', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'msg': msg,
            'thumbUp':thumbUp
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

Array.from(trash).forEach(function(element) {
=======
>>>>>>> 7517e87a003e6516a50e892c30a2c3be21a76baa
      element.addEventListener('click', function(){
        console.log("thumbDown", thumbDown)
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        fetch('countDown', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'msg': msg,
            'thumbUp':thumbUp
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

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        alert("pug")
        console.log("Hello")
        const name = this.parentNode.parentNode.childNodes[1].innerText // Leon this is Not targeting the parent node properly so it wont delete
        const msg = this.parentNode.parentNode.childNodes[3].getAttribute('data-name')
        console.log(msg)
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
