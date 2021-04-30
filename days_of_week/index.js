var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        var body = document.querySelector('body');
        // var body = document.body
        var ul = document.createElement('ul');
        var li = "";
        for( var index = 0; index < days.length; index++){
            li = li + `<li>${days[index]}</li>`
        }
        // console.log(li);
        ul.innerHTML = li;
        body.append(ul);