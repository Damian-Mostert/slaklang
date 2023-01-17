[![slaklang Logo](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgGHiW5lP9M3LuI0zi16h7p8Jw6ldX7Ih-Plx-I0RftCnQ4MmY49kuHx9360gzvEvZpfesfFtD2J6KdPzZmlx02FeFkxmv87XFkLFdMf_xlQ46O-NEaCY11OtnX1w9t8sgXXhhyE72_7mMuNzkRZ5M8Q_fpWcpvDqq7KbsNm8ys83QCK0kO15VEKSTJ/s1600/slak.png)]()
# about slaklang 1.1.0
auther : Damian Mostert
<br>email : swapswap365@gmail.com
<br>slak lang is curently a view engen for html templates, but soon will have a script compiler

# using a static server
```js
const express = require('express')
const slaklang = require('slaklang')
const app = express()
StaticUrl = "/"
StaticPath = __dirname+"/www"
app.use(StaticUrl,(req,res)=>{slaklang.express.static(StaticUrl,StaticPath,req,res)})
app.listen(8080)
```
once your static server is up, you can start using slak in your www file, all your slak files must end with .slak , they will handle both the GET and POST requests
# using pure JavaScript works in slakLang too :)
```php
<?_@
console.log("all java script things work :)")
_@?>
```
# what is slak lang?
slak lang is a smart hrml render engen allowing you to use java script to build your pages,
it also has built in language features, specified to build html and look simular to html, and some old php features
```php
<DOCTYPE html>
<?_@
@html/
@head/

/{}@_
@body/
for(m=0;m<10;m++){
  echo(<<<EOT
  even echo and eot works !
  EOT>>>)
    console.log(`@ java script works here too ${m}`)
}
/{style="background:#111;color:#fff"}@_
/{}@_

_@?>
<label>HTML WORKS TOO</label>
```
# slak labels santax
most slak labals build html parts, some are built as functions, but are still in development
```php
@html/ /*your html tag like img button body ...*/
//the tags inside
@label/echo("hello")/@_
console.log("label built") // then you can do your scripting here
/{style="color:red",cls="main"}@_ //your css, onclick and stuff like that, only deference is class is now cls
//using css
//unfortunately I couldn’t use style as a tag as it conflicts with your style config in your tag
// so i decided to use @css as a tag
@css/
echo(`
body{
  background:blue
}
`)
/{}@_
//you can always just use the link tag for external css
@link/ /{rel="stylesheet",href="/yourcss.css"}@_
// tail wind css works with .slak files too
```
# latest updates
```php
<?_@
//you can also declare tag options before the tag
style is "color:#fff;background:#111;font-family:arial"
@body/
@label/
echo("Slak lang just got so much better :) ")
/{style is "color:blue"}@_
/{}@_

M is 50 plus 20 with 5// ' plus ' and ' with ' works as +
console.log(M)

X is 10 // you can use is instead of =
if(X equals 10){ // you can use equals instead of ==
//Old scholl EOT works aswell
echo(<<<EOT
<p> hello </p>
EOT with <<<EOT
<p> there </p>
EOT)//you can use with instead of +
} elseif  // both 'else if' and 'elseif' can work
(X same as 20 and Y equals 50){// you can use and instead of &&
echo(" X is 20")//you can use 'same as' instead of ===
}

C equal to 10 //can also use equal to for =

if(C smaller than 10){
  console.log("C is smaller than 10")
}elseif(C bigger than equal to 10){
  console.log("C is bigger than 10 or is 10")
}


for(Z is 0;Z smaller than equal to 10;Z grow){//you can use 'grow' for ++ and 'shrink' for --
  @p/
  echo(`Z is ${Z}`)
  /{}@_
}
_@?>

```

```php
<?_@
//you can also declare tag options before the tag
style is "color:#fff;background:#111;font-family:arial"
@body/
@label/
echo("Slak lang just got so much coller ")
/{style is "color:blue"}@_
/{}@_
X is 10 plus 10 // you can use plus instead of +
Y is 50 // you can use is instead of =
if(X equals 10){ // you can use equals instead of ==
//Old scholl EOT works aswell
echo(<<<EOT
<p> hello </p>
EOT with "eh with ")//you can use with instead of +
} elseif  // both 'else if' and 'elseif' can work
(X same as 20 and Y equals 50){// you can use and instead of &&
echo(" X is 20")//you can use 'same as' instead of ===
}
for(Z is 0;Z<10;Z grow){//you can use 'grow' for ++ and 'shrink' for --
  echo(Z)
}
_@?>
```
```php
<?_@ //slaklang is now almost english
X is "hey" //you can now use ' is ' as =
console.log(X)
//Handle REQUEST method
if(req.method equals "POST"){//you can now use ' equals ' as ==
  bodycolor is "red" //you can also use "~" instead of '.' if youd like
}elseif(req~method equals "GET"){//both elseif end else if work, make shure to use it like }elseif ,breaking it will make elseif not work
  bodycolor is "yellow"
}
M1 is 0
M2 is 0
if(M1 equals 0 and M2 equals 0){ // you can use and instead of &&
  console.log("M1 is MM2")
}
_@?>
<!DOCTYPE html>
<head>
  <title>hello world</title>
</head>
<body style="background:#111;color:<?_@echo(bodycolor)_@?>;font-family:arial;">
  <?_@
  bld~label(()=>{ // you can also use bld instead of the @ tags for the basic js function that the @ tags actualy use
    echo("hey there")
  },style is "color:#fff")
  //handeling GET and POST
  if(req.method == "POST"){
    @p/echo("THIS WAS A POST REQUEST")/{}@_
      echo(<<<EOT
      <form method="GET">
        <input type="submit" value="go to GET page">
      </form>
      EOT)
    }//POST REQUEST
    else if(req.method equals "GET"){
    @p/echo("THIS WAS A GET REQUEST")/{}@_
      echo(<<<EOT
      <form method="POST">
        <input type="submit" value="go to POST page">
      </form>
      EOT>>>)
    }//GET REQUEST
  _@?>
<h1>The slak tag is a cool tool for using arrays while building your HTML</h1>
<?_@for(b is 0;b<100;b++){@p/@small/echo(`hey${b+1}... `)/{}@_/{}@_}_@?>
</body>
```
