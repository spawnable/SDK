#!/usr/bin/env node
// DNA D44CB3-264C-42C7-A5C3-08ABD2020DFBB3A70D-054E-4578-A183-0AE0DC5D30BB


const {root, exit,
file, jpeg, data, icon, host} 
= require("./exe/route")

root("http://localhost:3000")
file("src", root)
jpeg("img", root)
data("api", root)
icon("ico", root)
host("app", root)
// exe ---------------------------
// api layer
const {keep} 
= require("./exe/order")
const {path} 
= require("./exe/trace")
const {peek, sold, hold, sale} 
= require("./exe/patch")
const {feed, pack, ship} 
= require("./exe/batch")

const {gene, gate} 
= require("./exe/track")
const {code, zone} 
= require("./exe/group")
const {grid, cube} 
= require("./exe/query")
const {page} 
= require("./exe/store")
const {main, item} 
= require("./exe/serve")

// mod ---------------------------
// link
const {tech} 
= require("./mod/tech")
const {star} 
= require("./mod/star")
const {meet} 
= require("./mod/meet")
const {help} 
= require("./mod/help")

const {bond} 
= require("./mod/bond")
const {shop} 
= require("./mod/shop")
const {tool} 
= require("./mod/tool")

// gui ---------------------------
const {menu} 
= require("./gui/panel")
const {foot} 
= require("./gui/table")
const {tile} 
= require("./gui/board")
const {deck} 
= require("./gui/frame")
const {safe} 
= require("./gui/vault")
const {spot} 
= require("./gui/check")
const {plan} 
= require("./gui/print")


const {note} 
= require("./gui/shelf")
const {para} 
= require("./gui/paper")
const {link} 
= require("./gui/shape")
const {view} 
= require("./gui/media")
const {sign} 
= require("./gui/guide")
const {text} 
= require("./gui/topic")
const {card} 
= require("./gui/modal")


// launch layer
const {init} 
= require("./gui/start")

// template layer
const {head, body, html} 
= require("./gui/weave")

// pkg ---------------------------
// body layer
const {site} 
= require("./pkg/site")
const {sg00} 
= require("./pkg/sg00")
const {sg01}
= require("./pkg/sg01")
const {sg02} 
= require("./pkg/sg02")
const {sg03} 
= require("./pkg/sg03")
const {sg04}
= require("./pkg/sg04")
const {sg05} 
= require("./pkg/sg05")
const {sg06} 
= require("./pkg/sg06")
const {sg07}
= require("./pkg/sg07")
const {sg08} 
= require("./pkg/sg08")
const {sg09} 
= require("./pkg/sg09")
const {sg10}
= require("./pkg/sg10")
const {sg11} 
= require("./pkg/sg11")
const {sg12} 
= require("./pkg/sg12")
const {sg13} 
= require("./pkg/sg13")
const {sg14} 
= require("./pkg/sg14")
const {sg15} 
= require("./pkg/sg15")
const {sg16} 
= require("./pkg/sg16")

// api layer --------------------
grid("grid", data, "/obj")
cube("cube", data, "/obj")
gene("blockchain", data, 
  {box: "012/864/918"})
gate("stripe", data, "/ref")


// -> /env/obj/pkg{mod: <gui>}

// env layer --------------------
code("get", root, {
  open: ["us","sg"]
}, "/env")

// data layer --------------------
zone(
  "sg",root,code, "us",root,code,
  "our",root, "/env")
page(
  "nabla-pro", zone, 
  "company", zone,
  "info", zone,
  "support", zone,
  "saturday", zone, "/obj")
path("idx", root, "/box") 

// flow layer --------------------
keep("on", gate)

peek("no", path)
sold("on", peek)
hold("no", peek)
sale(sold, hold, "on", path)

feed("on", path)
pack("ok", feed)
ship("ok", pack, "no", path)

item([sale, ship], "/pkg")
main([zone, page], "/pkg")

// wrap layer --------------------
// inject data: 
menu(page, item, "/env") // inject url 
foot(page, item, "/env") // inject env

// part layer --------------------
tile("home", page) // page req
deck("shop", page) // page req
safe("shop", page) 

// generic component
view("stuff", page,
"home", page,
"technology", page,
"shop", page,
"standard-certification", page,
"booking", page,
"faq", page,
"about-us", page,
"visit-us", page,
"affliate-program", page,
"contact-us", page,
"warranty", page,
"return-policy", page,
"the-nabla-protection", page,
"delivery-and-shipping", page,
"privacy-policy", page,
"terms-of-use", page)

para("return-policy", page, "privacy-policy", page, "terms-of-use", page)
note(page)
link(page)
card("warranty", page, "visit-us", page, "contact-us", page, "booking", page, "affliate-program", page, "return-policy", page, "privacy-policy", page, "terms-of-use", page)
text("xxxx", page)
sign("home", page, "shop", page, "/obj")
spot("shop", page)
plan("shop", page)

// share / modify section
tech("xxxx", page)
star("xxxx", page)
meet("xxxx", page)
help("faq", page, "/obj")
bond("xxxx", page)
shop("xxxx", page)
tool("xxxx", page)


// body layer --------------------
// multi section  
//site(page)
site("/pkg",[
  "our|saturday|stuff", main])
sg00("/pkg",
  "sg|item", item)
  
sg01("/pkg", [tile, sign, note, link,
  "sg|nabla-pro|home", main])
  
sg02("/pkg", [view, note, link,
  "sg|nabla-pro|technology", main])
 
sg03("/pkg", [deck, sign, spot, plan, safe, note, 
  "sg|nabla-pro|shop", main])
  
sg04("/pkg", [view, note, link,
  "sg|nabla-pro|standard-certification", main])
  
sg05("/pkg", [view, note, card,
  "sg|nabla-pro|booking", main])
  
sg06("/pkg", [view, note, help,
  "sg|nabla-pro|faq", main])
  
sg07("/pkg", [view,
  "sg|company|about-us", main])
  
sg08("/pkg", [view, card,
  "sg|company|visit-us", main])
  
sg09("/pkg", [view, card,
  "sg|company|affliate-program", main])
  
sg10("/pkg", [view, note, card,
  "sg|support|contact-us", main])
  
sg11("/pkg", [view, note, card, link,
  "sg|support|warranty", main])
  
sg12("/pkg", [view, para, card, note, link,
  "sg|support|return-policy", main])
  
sg13("/pkg", [view, note, link,
  "sg|info|the-nabla-protection", main])

sg14("/pkg", [view, note,
  "sg|info|delivery-and-shipping", main])

sg15("/pkg", [view, para, card,
  "sg|info|privacy-policy", main])
  
sg16("/pkg", [view, para, card,
  "sg|info|terms-of-use", main])

// fire layer --------------------
init(page, item) // launch setup

// join layer --------------------
head([menu, foot, init])
body(site, sg00, sg01, sg02, sg03, sg04, sg05, sg06, sg07, sg08, sg09, sg10, sg11, sg12, sg13, sg14, sg15, sg16)
html([head, body]) // fixed

exit("end", 
code, zone, page,
path, main, 
menu, foot, init, 
head, body, html,
root, file, jpeg, data, icon, host)


