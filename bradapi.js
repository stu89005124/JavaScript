function checkTWId(id){
    let ret = false;
    var regex = /^[A-Z][12][0-9]{8}$/;
    let result = id.match(regex);
    if(result != null){
        let letters = "ABCDEFGHJKLMNPQRSTUVXYWZIO";
        let c12 = id.substr(0,1);
        let n12 = letters.indexOf(c12) + 10;
        let n1 = parseInt(n12 / 10);
        let n2 = n12 % 10;
        let n3 = parseInt(id.substr(1,1));
        let n4 = parseInt(id.substr(2,1));
        let n5 = parseInt(id.substr(3,1));
        let n6 = parseInt(id.substr(4,1));
        let n7 = parseInt(id.substr(5,1));
        let n8 = parseInt(id.substr(6,1));
        let n9 = parseInt(id.substr(7,1));
        let n10 = parseInt(id.substr(8,1));
        let n11 = parseInt(id.substr(9,1));
        let sum = n1*1 + n2*9 + n3*8 + n4*7 + n5*6 + n6*5 + n7*4 + n8*3 +
        n9*2 + n10*1 + n11*1;
        ret = sum % 10 == 0;
    }
    //作業 1.全部隨機 2.男女性別產生 3.特定地區  4.特定地區+性別

    return ret;
}

function createAnswer(n = 3){
    let porker = [];
    let rand;
    for (let i = 0; i < 10;i++){
        porker[i] = i;
    }
    for(let i = porker.length-1;i>0;i--){
        rand = parseInt(Math.random() * (i + 1));
        let value = porker[rand];
        porker[rand] = porker[i]; 
        porker[i] = value;
    }
    let ret ='';
    for(let i=0; i<n; i++) ret += porker[i];
    return ret;
}

function checkAB(ans, gus){
    let a = 0;
    let b = 0;
    for(let i = 0; i<gus.length;i++){
        if(gus.charAt(i) == ans.charAt(i)){
            a++;
        } else if (ans.indexOf(gus.charAt(i)) >= 0){
            b++;
        }
    }
    return `${a}A${b}B`;
}

function clone(source){
    if (typeof(sourcr) != 'object') return null;
    let target = new Object();
    for (let attr in source){
        target[attr] = source[attr];
    }
    return target;
}