document.addEventListener("DOMContentLoaded", onPageLoad);

function onPageLoad() {
    let inputBox = document.querySelector("#input-number");

    inputBox.oninput = function () {
        removeAllSections();
        makeSections(parseInt(inputBox.value));
    };
}

function makeSections(count) {
    var main = document.querySelector("main");

    for (var i = 0; i < count; i++) {

        var fragment = fragmentFromString(/*html*/ `
      <section id="sec${i}">
        <h4 contenteditable="true">Title ${i}</h4>
        <p contenteditable="true">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Inventore harum, quasi dicta ex totam quisquam quo tempore maxime, 
          commodi praesentium eius quod suscipit! 
          Tenetur magnam eligendi amet fugiat adipisci impedit.
        </p>
      </section>
    `);
        fragment.querySelector("h4").onclick = function (e) {
            e.currentTarget.style.backgroundColor = "#11AA1155";
        };
        main.append(fragment);
    }
}

function fragmentFromString(strHTML) {
    return document.createRange().createContextualFragment(strHTML);
}

function removeAllSections() {
    var test_sections = document.querySelectorAll("section");
    for (var i = 0; i < test_sections.length; i++) {
        test_sections[i].remove();
    }
}

function makeEditable(elem) {
    elem.onclick = function (e) {
        elem.contentEditable = true;
        elem.focus();
    };
    elem.onblur = function (e) {
        elem.contentEditable = false;
    };
}