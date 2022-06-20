var nameTamu, textDesc, ket;

function readFom() {
    nameTamu = document.getElementById("name").value;
    textDesc = document.getElementById("textDesc").value;
    ket = document.getElementById("ket").value;
  console.log(nameTamu, textDesc, ket);
}

document.getElementById("submit-3485").onclick = function () {
  readFom();
  firebase
    .database()
    .ref("tamu/" + nameTamu)
    .set({
    name: nameTamu,
    textDesc: textDesc,
      ket: ket,
    });
  document.getElementById("author").value = "";
  document.getElementById("wdp-textarea-3485").value = "";
  document.getElementById("ket").value = "";
};

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("tamu/" + nameTamu)
    .on("value", function (snap) {
      document.getElementById("name").value = snap.val().name;
      document.getElementById("desc").value = snap.val().textDesc;
      document.getElementById("ket").value = snap.val().ket;
    });
};

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .update({
      //   rollNo: rollV,
      name: nameV,
      gender: genderV,
      address: addressV,
    });
  alert("Data Update");
  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
};
document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .remove();
  alert("Data Deleted");
  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
};