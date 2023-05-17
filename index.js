let cont = document.getElementById("cont");
  document.getElementById("get").addEventListener("click", function () {
    document.getElementById("cont").innerText = "";
    let fibo = document.querySelector("#input").value;

    let fib1 = document.getElementById("num1");
    let fib2 = document.getElementById("num2");
    let num1 = 0;
    let num2 = 1;
    let ans = 0;

    if (fibo == "") {
      cont.innerText = "please enter any Number";
    } else if (fibo == 0) {
      fib1.innerText = num1;
    } else if (fibo == 1) {
      fib1.innerText = num1;
      fib2.innerText = num2;
    } else {
      console.log(num1);
      console.log(num2);
      fib1.innerText = num1;
      fib2.innerText = num2;
      while (ans <= fibo) {
        ans = num1 + num2;
        num1 = num2;
        num2 = ans;
        console.log(ans);

        let series = document.createElement("h1");
        series.innerText = ans;
        cont.append(series);
      }
    }
  });