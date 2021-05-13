function suggestion() {
    var contextarea = document.getElementById("keyword");
    var context = contextarea.value;

    var model = 'gpt2-harrypotter';
    var length = 'long';

    var formData = new FormData();
    formData.append("context", context);
    formData.append("model", model);
    formData.append("length", length);
    fetch(
        "/gpt2",
        {
            method: "POST",
            body: formData
        }
    )
        .then(response => {
            if (response.status == 200) {
                return response
            } else {
                throw Error("Please Enter Character");
            }
        })
        .then(response => response.json())
        .then(response => {
            var genstory = document.getElementsByClassName("story");

            genstory[0].innerHTML = context + response[0];

        })
        .catch(e => {
            var story = document.getElementsByClassName("story")[0];
            story.innerHTML = e;
        })
}

function readmore() {
    var context = document.getElementsByClassName('story');
    var model = 'gpt2-harrypotter';
    var length = 'long';

    var formData = new FormData();

    formData.append("context", context[0].innerHTML);
    formData.append("model", model);
    formData.append("length", length);
    fetch(
        "/gpt2",
        {
            method: "POST",
            body: formData
        }
    )
        .then(response => {
            if (response.status == 200) {
                return response
            } else {
                throw Error("Fail");
            }
        })
        .then(response => response.json())
        .then(response => {
            var genstory = document.getElementsByClassName("story");

            genstory[0].innerHTML = context[0].innerHTML + response[0];

        })
        .catch(e => {
            var story = document.getElementsByClassName("story")[0];
            story.innerHTML = e;
        })

}