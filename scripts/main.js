/* <table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table> */

function createQ(q) {
    let out = document.createElement("td");

    out.innerText = q.name;
    out.className = "question";
    out.onclick = function() {
        let qd = document.createElement("div");
        qd.className = "qDiv";


        let qh = document.createElement("h1");
        qh.innerText = q.text;
        qd.appendChild(qh);

        if (q.image) {
            let qi = document.createElement("img");
            qi.src = q.image;
            qd.appendChild(qi);
        }

        display(qd, () => {
            let ans = document.createElement("h1");
            ans.innerText = "Answer: " + q.answer;
            display(ans, () => {
                out.className = "question used";
            });
        });
    };

    return out;
}


function display(el, callback) {
    let disp = document.getElementById("comPanel");

    disp.appendChild(el);

    disp.className = "down";


    disp.onclick = function() {
        disp.className = "";
        disp.innerHTML = "";
        callback();
    }
}

function createGame(g) {
    let tab = document.createElement("table");
    tab.className = "board";

    let theads = document.createElement("tr");
    for (let i = 0; i < g.length; i++) {
        let th = document.createElement("th");
        th.innerText = g[i].name;
        th.className = "category";
        theads.appendChild(th);
    }
    tab.appendChild(theads);

    for (let i = 0; i < 5; i++) {
        let r = document.createElement("tr");
        for (let j = 0; j < g.length; j++) {
            let qu = createQ(g[j].questions[i]);
            r.appendChild(qu);
        }
        tab.appendChild(r);
    }

    document.getElementById("gamePanel").appendChild(tab);
    let teamC = getTeams();
    createUI(teamC);
}

function createUI(teamC) {
    let controls = document.getElementById("controlPanel");

    for (let i = 0; i < teamC; i++) {
        let td = document.createElement("div");
        td.className = "teamDiv";
        td.style.width = `calc(${Math.floor(80 / teamC)}% - 10px)`;
        if (i == 0) {
            td.style.margin = "none";
            td.style.marginLeft = "10%";
        }

        let tn = document.createElement("input");
        tn.type = "text";
        // tn.value = "Team " + (i + 1);
        tn.className = "teamName";

        let tnd = document.createElement("div");
        tnd.className = "nameDiv";
        tnd.appendChild(tn);

        let tp = document.createElement("h1");
        tp.className = "points";
        tp.innerText = "0";
        tp.pointCount = 0;

        let tpbd = document.createElement("div");
        tpbd.className = "buttonDiv";
        
        let tpd = document.createElement("button");
        tpd.className = "decreasePoints";
        tpd.innerText = "-";
        tpd.onclick = () => {
            tp.pointCount -= 100;
            tp.innerText = tp.pointCount;
        };
        tpbd.appendChild(tpd);
        
        let tpi = document.createElement("button");
        tpi.className = "increasePoints";
        tpi.innerText = "+";
        tpi.onclick = () => {
            tp.pointCount += 100;
            tp.innerText = tp.pointCount;
        };
        tpbd.appendChild(tpi);

        td.appendChild(tnd);
        td.appendChild(tp);
        td.appendChild(tpbd);

        controls.appendChild(td);
    }
}

function getTeams() {
    let tcount = parseInt(prompt("How many teams?"));
    return tcount;
}


window.onload = () => {
    createGame(game);
};
