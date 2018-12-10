//
// function on(){
//     $("#test").text(document.getElementById("in").value)
// }


function on() {
    var input =document.getElementById("in").value
    var pro =input.split(' ')
    var res = pro.sort(function (a,b) {return a - b})
    $('#test').text(res.join(' - '))
}