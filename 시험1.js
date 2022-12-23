let books = [
  {
    no: 'inbn0002', title: '스프링',
    writer: '김기자', price: 40000
  },
  {
    no: 'inbn0003', title: '자바',
    writer: '이순신', price: 25000
  },
  {
    no: 'inbn0004', title: 'SQL',
    writer: '을지문덕', price: 32000
  },
]

function tbody() {
  list.innerHTML = "";
  for (let i = 0; i < books.length; i++) {
    list.innerHTML += `
  <tr>
  <td><input type="checkbox"></td>
  <td>${books[i].no}</td>
  <td>${books[i].title}</td>
  <td>${books[i].writer}</td>
  <td class="price">${books[i].price}</td>
  <td><button>삭제</button></td>
  </tr>`
  }
}
tbody();

function remove() {
  let tr = document.getElementsByTagName("tr");
  for (let i = 1; i < tr.length - 1; i++) {
    let btn = tr[i].children[5].children[0];
    btn.addEventListener("click", function (ev) {
      ev.target.closest("tr").remove();
      totalprice();
      for (let j = 0; j < books.length; j++) {
        if (ev.target.closest("tr").children[1].innerText == books[j].no) {
          books.splice(j, 1);
        }
      }
    })
  }
}
remove();

let addbtn = document.getElementsByClassName("btn");
addbtn[0].addEventListener("click", function () {
  let a = no.value
  let b = title.value
  let c = writer.value
  let d = price.value
  if (a == "" || b == "") {
    alert('도서 정보를 입력해 주세요');
    return;
  }
  books.push({ no: a, title: b, writer: c, price: d })
  tbody();
  no.value = "";
  title.value = "";
  writer.value = "";
  price.value = "";
  remove();
  totalprice();
})


function totalprice() {
  let pri = document.getElementsByClassName("price")
  let total = 0;
  for (let i = 0; i < pri.length; i++) {
    let num = [];
    num[i] = pri[i].innerText
    total += parseInt(num[i]);
    totalPrice.innerText = total
  }
}
totalprice();