// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var obj = new Object();

    if (currency > 10000) obj.error = "You are rich, my friend! We don't have so much coins for exchange";
    else {
        var rest;
        var hs = Math.floor(currency / 50);
        rest = currency % 50;
        var qs = Math.floor(rest / 25);
        rest = rest % 25;
        var ds = Math.floor(rest / 10);
        rest = rest % 10;
        var ns = Math.floor(rest / 5);
        var ps = rest % 5;
        if (hs > 0) obj["H"] = hs;
        if (qs > 0) obj["Q"] = qs;
        if (ds > 0) obj["D"] = ds;
        if (ns > 0) obj["N"] = ns;
        if (ps > 0) obj["P"] = ps;
    }
    return obj;
}
