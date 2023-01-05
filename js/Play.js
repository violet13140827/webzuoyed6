function chat() {
    creatDia();
}

// window.ontouchmove=function(e){   /*禁止页面滚动*///但是没有用
//         e.preventDefault && e.preventDefault();
//         e.returnValue=false;
//         e.stopPropagation && e.stopPropagation();
//         return false;
// }

//说话的
count = 2;
function creatDia() {
    var dia = document.createElement("img"); dia.src = "./img/dialog/d" + count + ".png"; dia.style.position = "absolute";
    dia.style.left = "10px"; dia.style.top = "30px";
    dia.style.animation = "dias 3s ease";
    document.body.appendChild(dia);

    dia.addEventListener("animationend", function () {
        document.body.removeChild(this);
    }, false);

    if (count == 5) {
        //document.body.appendChild(startbt);
        return 0;
    }
    count++;
    window.setTimeout(creatDia, 3000);
}

//换衣服
var clothtype = 1;//款式记录
//play代码
function ww() {
    clothtype++;
    if (clothtype == 7) clothtype = 1;
    clo = document.getElementById("cclo");
    if (clothtype == 1) {
        clo.style.top = "23%"; clo.style.width = "60%"; clo.style.left = "50%";
    } else if (clothtype == 2) {
        clo.style.top = "10%"; clo.style.width = "80%"; clo.style.left = "52%";
    } else if (clothtype == 3) {
        clo.style.top = "23%"; clo.style.width = "65%"; clo.style.left = "49%";
    } else if (clothtype == 4) {
        clo.style.top = "23%"; clo.style.width = "80%"; clo.style.left = "50%";
    } else if (clothtype == 5) {
        clo.style.top = "24%"; clo.style.width = "60%"; clo.style.left = "50%";
    } else if (clothtype == 6) {
        clo.style.top = "23%"; clo.style.width = "60%"; clo.style.left = "50%";
    }
    clo.src = "./img/衣服款式/a" + clothtype + ".png";
}

//firt bottom
function changebg1(e) {
    //变背景
    document.body.style.backgroundImage = "url(./img/其他.png)";
    //换标题
    document.getElementById("topframe").src = "./img/top/图标1.png";
    //删自己和style selection
    var frame = document.getElementById("changetext1");
    frame.parentNode.removeChild(frame);
    //加入毛綫选项
    addselectm();
    //删了自己
    e.parentNode.removeChild(e);
    //show yijia
    document.getElementById("yijia").style.opacity = "1";

    document.getElementById("selectframe").style.opacity = "1";
    //加入按钮2
    addbt2();
}
function addbt2() {
    var s1 = document.getElementById("s1");
    var pc1 = document.createElement("img");
    s1.appendChild(pc1);

    pc1.id = "nextbt2"; pc1.src = "img/bt/上下页 (2).png";
    pc1.onclick = changebt2;
}
function changebt2(e) {
    e = this;
    //warp
    document.getElementById("maoxian").style.flexWrap = "wrap";
    //换标题
    document.getElementById("topframe").src = "./img/top/图标3.png";
    //换选项
    changep();
    e.parentNode.removeChild(e);
    addbt3();
}

function addbt3() {
    var s1 = document.getElementById("s1");
    var pc1 = document.createElement("img");
    s1.appendChild(pc1);

    pc1.id = "nextbt2"; pc1.src = "img/bt/上下页 (2).png";
    pc1.onclick = changebt3;
}

function changebt3(e) {
    e = this;
    var s1 = document.getElementById("s1");
    //删了s1下面所有东西
    while (s1.hasChildNodes()) //当div下还存在子节点时 循环继续
    {
        s1.removeChild(s1.firstChild);
    }
    s1.style.opacity = "0.5";//背景虚化
    //加载动画
    // var prog=document.createElement("progress");
    // prog.id="prog";prog.max="100";prog.value="70";
    // s1.appendChild(prog);
    //删S1

    document.body.removeChild(s1);

    //加入s2
    var s2 = document.createElement("div"); s2.id = "s2";
    document.body.appendChild(s2);

    //生成图
    document.body.style.backgroundImage = "url()";

    var human = document.createElement("img"); human.src = "./img/人物形象卡/人" + clothtype + "/" + color + ".png";
    human.id = "human";
    s2.appendChild(human);

    var shang = document.createElement("img"); shang.src = "./img/人物形象卡/人" + clothtype + "/上.png";
    shang.id = "shang";
    s2.appendChild(shang);

    var xia = document.createElement("img"); xia.src = "./img/人物形象卡/人" + clothtype + "/下.png";
    xia.id = "xia";
    s2.appendChild(xia);

    var biaoti = document.createElement("img"); biaoti.src = "./img/人物形象卡/人" + clothtype + "/标题.png";
    biaoti.id = "biaoti";
    s2.appendChild(biaoti);

    var suanmin = document.createElement("img"); suanmin.src = "./img/人物形象卡/人" + clothtype + "/算命.png";
    suanmin.id = "suanmin";
    s2.appendChild(suanmin);

    switch (clothtype) {
        case 1: document.body.style.backgroundColor = "#74c3a6"; break;
        case 2: document.body.style.backgroundColor = "#b6d458"; break;
        case 3: document.body.style.backgroundColor = "#9d6aac"; break;
        case 4: document.body.style.backgroundColor = "#f39801"; break;
        case 5: document.body.style.backgroundColor = "#ee7c84"; break;
        case 6: document.body.style.backgroundColor = "#8ed1e2"; break;
        default: alert("出错了");
    }
    //adddecrations
    var dc1 = document.createElement("img"); dc1.src =dec1;
    dc1.id = "dc1";
    s2.appendChild(dc1);

    var dc2 = document.createElement("img"); dc2.src =dec2;
    dc2.id = "dc2";
    s2.appendChild(dc2);

    //share bottom
    addsharebt();

}

function changep() {
    //delect maoxian bellow
    var selections = document.getElementById("maoxian");
    while (selections.hasChildNodes()) //当div下还存在子节点时 循环继续  
    {
        selections.removeChild(selections.firstChild);
    }

    for (var i = 1; i <= 12; i++) {//用函数加li
        addLi(i);
    }
}

var decnum = 0;
//add dec
function addLi(e) {
    var dec = document.createElement("img");
    dec.setAttribute("class", "decrations");
    dec.src = "./img/dec/" + e + ".png";
    //dec.style.opacity="1";

    dec.onclick = changebt4;
    document.getElementById("maoxian").appendChild(dec);
}

var dec1 = "0"; var dec2 = "0";
function changebt4(e) {
    e = this;
    if (decnum < 2 || e.opacity == 1) {
        if (e.style.opacity == "1") {
            e.style.opacity = "0.7";
            e.style.backgroundColor = "rgba(255,255,255,0.2)";
            decnum -= 1;
            if (dec1 != "0" && dec2 != "0") {
                dec2 = "0";
            } else {
                dec1 = "0";
            }
            //deletefromclo();
        } else {
            e.style.opacity = "1"; e.style.backgroundColor = "gray";
            decnum += 1;
            if (dec1 == "0") {
                dec1 = e.src;
                //alert(dec1);
            } else {
                dec2 = e.src;
            }
            //         //alert(dec2);
            // addtoclo(e);
            // alert(e.src);
        }
    } else {
        if (e.style.opacity == "1") {
            e.style.opacity = "0.7";
            e.style.backgroundColor = "rgba(255,255,255,0.2)";
            decnum -= 1;
            if (dec1 != "0" && dec2 != "0") {
                dec2 = "0";
            } else {
                dec1 = "0";
            }
            //deletefromclo(e);
        } else {
            alert("只能选两个");
        }
    }
}


//e是装饰本体
// function deletefromclo(e){
//     e=this;
//     if(dec1!="0" && dec2!="0"){
//         dec2="0";
//     }else{
//         dec1="0";
//     }
// }
// function addtoclo(e){
//     e=this;
//     if(dec1=="0"){
//         dec1=e.src;
//         //alert(e.src);
//     }else{
//         dec2=e.src;
//         //alert(dec2);
//     }
// }


//据clothtype 加入毛线选项
function addselectm() {
    for (var i = 1; i <= 5; i++) {
        document.getElementById("li" + i).src = "./img/毛线/" + clothtype + "/" + clothtype + " (" + i + ").png";
    }
}

//变色
function changem(e) {

    //全部去底减色
    for (var i = 1; i <= 5; i++) {
        document.getElementById("l" + i).style.backgroundColor = "rgba(255,255,255,0.2)";
        document.getElementById("li" + i).style.opacity = "0.7";
    }

    //上底增色
    e.style.opacity = "1";
    e.parentNode.style.backgroundColor = "gray";

    switch (e.id) {
        case "li1": hello1(1); break;
        case "li2": hello1(2); break;
        case "li3": hello1(3); break;
        case "li4": hello1(4); break;
        case "li5": hello1(5); break;
        default: alert("0");
    }
}
var color = 1;
//易服
function hello1(e) {
    document.getElementById("cclo").src = "./img/衣服款式/" + clothtype + "/" + clothtype + " (" + e + ").png";
    color = e;
}

function addsharebt() {
    //oncemore
    var oncemore = document.createElement("img");
    oncemore.id = "oncemore";
    oncemore.src = "./img/bt/onceMore.png";
    document.getElementById("ocm").appendChild(oncemore);
    //save
    var save = document.createElement("img");
    save.id = "save";
    save.src = "./img/bt/Save.png";
    document.getElementById("s2").appendChild(save);
    //qq
    var qq = document.createElement("img");
    qq.id = "qq";
    qq.src = "./img/bt/qq.png";
    document.getElementById("s2").appendChild(qq);

    //wx
    var wx = document.createElement("img");
    wx.id = "wx";
    wx.src = "./img/bt/wechat.png";
    document.getElementById("s2").appendChild(wx);
    //xl
    var xl = document.createElement("img");
    xl.id = "xl";
    xl.src = "./img/bt/weibo.png";
    document.getElementById("s2").appendChild(xl);
}

