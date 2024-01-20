(function () { const e = document.createElement("link").relList; if (e && e.supports && e.supports("modulepreload")) return; for (const t of document.querySelectorAll('link[rel="modulepreload"]')) a(t); new MutationObserver(t => { for (const r of t) if (r.type === "childList") for (const f of r.addedNodes) f.tagName === "LINK" && f.rel === "modulepreload" && a(f) }).observe(document, { childList: !0, subtree: !0 }); function s(t) { const r = {}; return t.integrity && (r.integrity = t.integrity), t.referrerPolicy && (r.referrerPolicy = t.referrerPolicy), t.crossOrigin === "use-credentials" ? r.credentials = "include" : t.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r } function a(t) { if (t.ep) return; t.ep = !0; const r = s(t); fetch(t.href, r) } })(); 

let y = document.body.querySelectorAll(".buttons button"), l = document.body.querySelector("input[type=text]"), u = !0, c = 0, i = 0, n = !1; 
for (let o = 0; o < y.length; o++) 
    y[o].addEventListener("click", function (e) 
    { 
        document.dispatchEvent(new KeyboardEvent("keydown", { key: this.value })) 
    }); 

document.addEventListener("keydown", o => 
{ 
    if (document.activeElement.blur(), !u) 
    { 
        let e = l.value, s = o.key; 
        if (s == "Enter") 
        try 
        { 
            e = Function("return " + l.value)(), e === void 0 && (e = 0), n = !0 
        } 
        catch 
        { 
            e = "0" 
        } 
        finally 
        { 
            c = e 
        } 
        else if (s == "Backspace") 
            n ? e = 0 : e = l.value.substring(0, l.value.length - 1), n = !1; 
        else 
        { 
            let a = Number.parseInt(s); 
            if (Number.isInteger(a)) 
                n && (l.value = 0), l.value == 0 ? e = s : e = l.value + s, n = !1; 
            else switch (s) 
                { 
                    case "+": 
                    case "-": 
                    case "*": 
                    case "/": 
                    case ".": 
                    case "%": 
                                e = l.value + s, n = !1; 
                                break; 
                    
                    case "c": 
                                e = 0, n = !1; 
                                break; 
                                
                    case "M+": 
                                let t = 0; 
                                try 
                                { 
                                    t = Function("return " + l.value)(), e = t, c = e 
                                } 
                                catch 
                                { 
                                    t = 0 
                                } 
                                finally 
                                { 
                                    i += t 
                                } 
                                n = !1; 
                                break; 
                                
                    case "M-": 
                                t = 0; 
                                try 
                                { 
                                    t = Function("return " + l.value)(), e = t, c = e 
                                } 
                                catch 
                                { 
                                    t = 0 
                                } 
                                finally 
                                { 
                                    i -= t 
                                } 
                                n = !1; 
                                break; 
                                
                    case "M": 
                                e = i, c = e, n = !0; 
                                break; 
                    
                    case "MC": 
                                if (l.value == i) e = 0, i = 0;
                                break;
                } 
        } 
        e.length == 0 && (e = 0), l.value = e 
    } 
}); 

let d = document.getElementById("power"); 
d.addEventListener("click", () => 
{ 
    u ? (l.value = 0, u = !1, d.innerHTML = "ON") : (l.value = "", u = !0, d.innerHTML = "OFF")
    l.classList.toggle("calcShadow")
    y[0].parentElement.classList.toggle("calcShadow")
    d.classList.toggle("bg-red-800");
});
