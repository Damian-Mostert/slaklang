/*
Node Slak Lang compiler V3
*/
const express = require('express')
const router = express.Router()
const bld ={
        DOCTYPEhtml:()=>{string = string + `<!DOCTYPE html>`},
        str:(func,text)=>{
            string = string + text
          },
        str_:(data,text)=>{
          var entire = data.toString();
          var body = entire.slice(entire.indexOf(`{"`) + 2, entire.lastIndexOf(`"}`));
          eval(body+"=`"+text+"`")
        },
        for:(func,num)=>{
          var entire = func.toString();
          var body = entire.slice(entire.indexOf(`{`) + 1, entire.lastIndexOf(`}`));
          var body2 = body.slice(body.indexOf(`{`) + 1, body.lastIndexOf(`}`));
          var head1 = entire.slice(entire.indexOf(`()=>{(`) + 6, entire.lastIndexOf(`)`));
          var head2 = head1.slice(head1.indexOf(`)`)-1, 1);
        for(fornumver=0;fornumver<num;fornumver++){
          eval(head2+"="+fornumver)
          eval(body2)
        }
        },
        title:(sub)=>{
            extra = ""
            try{if(id){extra = extra + ` id ="${id}" `};id=null}catch(c){}
            try{if(cls){extra = extra + ` class ="${cls}" `};cls=null}catch(c){}
            try{if(style){extra = extra + ` style ="${style}" `};style=null}catch(c){}
            string = string + "<title"+extra+">"
            sub()
            string = string + "</title>"
          },
        link:()=>{
              extra = ""
              try{if(id){extra = extra + ` id ="${id}" `};id=null}catch(c){}
              try{if(cls){extra = extra + ` class ="${cls}" `};cls=null}catch(c){}
              try{if(style){extra = extra + ` style ="${style}" `};style=null}catch(c){}
              try{if(rel){extra = extra + ` rel ="${rel}" `};rel=null}catch(c){}
              try{if(href){extra = extra + ` href ="${href}" `};href=null}catch(c){}
              string = string + "<link"+extra+">"

            },
        h1:(sub)=>{
              extra = ""
              try{if(id){extra = extra + ` id ="${id}" `};id=null}catch(c){}
              try{if(cls){extra = extra + ` class ="${cls}" `};cls=null}catch(c){}
              try{if(style){extra = extra + ` style ="${style}" `};style=null}catch(c){}
              string = string + "<h1"+extra+">"
              sub()
              string = string + "</h1>"
            },
        h2:(sub)=>{
                extra = ""
                try{if(id){extra = extra + ` id ="${id}" `};id=null}catch(c){}
                try{if(cls){extra = extra + ` class ="${cls}" `};cls=null}catch(c){}
                try{if(style){extra = extra + ` style ="${style}" `};style=null}catch(c){}
                string = string + "<h2"+extra+">"
                sub()
                string = string + "</h2>"
              },
        h3:(sub)=>{
                  extra = ""
                  try{if(id){extra = extra + ` id ="${id}" `};id=null}catch(c){}
                  try{if(cls){extra = extra + ` class ="${cls}" `};cls=null}catch(c){}
                  try{if(style){extra = extra + ` style ="${style}" `};style=null}catch(c){}
                  string = string + "<h3"+extra+">"
                  sub()
                  string = string + "</h3>"
                },
        h4:(sub)=>{
                    extra = ""
                    try{if(id){extra = extra + ` id ="${id}" `};id=null}catch(c){}
                    try{if(cls){extra = extra + ` class ="${cls}" `};cls=null}catch(c){}
                    try{if(style){extra = extra + ` style ="${style}" `};style=null}catch(c){}
                    string = string + "<h4"+extra+">"
                    sub()
                    string = string + "</h4>"
                  },
        h5:(sub)=>{
                      extra = ""
                      try{if(id){extra = extra + ` id ="${id}" `};id=null}catch(c){}
                      try{if(cls){extra = extra + ` class ="${cls}" `};cls=null}catch(c){}
                      try{if(style){extra = extra + ` style ="${style}" `};style=null}catch(c){}
                      string = string + "<h5"+extra+">"
                      sub()
                      string = string + "</h5>"
                    },
        h6:(sub)=>{
                        extra = ""
                        try{if(id){extra = extra + ` id ="${id}" `};id=null}catch(c){}
                        try{if(cls){extra = extra + ` class ="${cls}" `};cls=null}catch(c){}
                        try{if(style){extra = extra + ` style ="${style}" `};style=null}catch(c){}
                        string = string + "<h6"+extra+">"
                        sub()
                        string = string + "</h6>"
                      },
        head:(sub)=>{
            extra = ""
            try{if(id){extra = extra + ` id ="${id}" `};id=null}catch(c){}
            try{if(cls){extra = extra + ` class ="${cls}" `};cls=null}catch(c){}
            try{if(style){extra = extra + ` style ="${style}" `};style=null}catch(c){}
            try{if(onclick){extra = extra + ` onclick ="${onclick}" `}onclick=null}catch(c){}
            string = string + "<head"+extra+">"
            sub()
            string = string + "</head>"
          },
        header:(sub)=>{
              extra = ""
              try{if(id){extra = extra + ` id ="${id}" `};id=null}catch(c){}
              try{if(cls){extra = extra + ` class ="${cls}" `};cls=null}catch(c){}
              try{if(style){extra = extra + ` style ="${style}" `};style=null}catch(c){}
              try{if(onclick){extra = extra + ` onclick ="${onclick}" `}onclick=null}catch(c){}
              string = string + "<header"+extra+">"
              sub()
              string = string + "</header>"
      },
        center:(sub)=>{
            extra = ""
            try{if(id){extra = extra + ` id ="${id}" `};id=null}catch(c){}
            try{if(cls){extra = extra + ` class ="${cls}" `};cls=null}catch(c){}
            try{if(style){extra = extra + ` style ="${style}" `};style=null}catch(c){}
            try{if(onclick){extra = extra + ` onclick ="${onclick}" `}onclick=null}catch(c){}
            string = string + "<center"+extra+">"
            sub()
            string = string + "</center>"
      },
        footer:(sub)=>{
                extra = ""
            try{if(id){extra = extra + ` id ="${id}" `};id=null}catch(c){}
            try{if(cls){extra = extra + ` class ="${cls}" `};cls=null}catch(c){}
            try{if(style){extra = extra + ` style ="${style}" `};style=null}catch(c){}
            try{if(onclick){extra = extra + ` onclick ="${onclick}" `}onclick=null}catch(c){}
            string = string + "<footer"+extra+">"
            sub()
            string = string + "</footer>"
      },
        css:(sub)=>{
            extra = ""
            try{if(id){extra = extra + ` id ="${id}" `};id=null}catch(c){}
            try{if(cls){extra = extra + ` class ="${cls}" `};cls=null}catch(c){}
            try{if(style){extra = extra + ` style ="${style}" `};style=null}catch(c){}
            try{if(onclick){extra = extra + ` onclick ="${onclick}" `}onclick=null}catch(c){}
            string = string + "<style"+extra+">"
            sub()
            string = string + "</style>"
          },
        img:()=>{
              extra = ""
          try{if(id){extra = extra + ` id ="${id}" `};id=null}catch(c){}
          try{if(cls){extra = extra + ` class ="${cls}" `};cls=null}catch(c){}
          try{if(style){extra = extra + ` style ="${style}" `};style=null}catch(c){}
          try{if(onclick){extra = extra + ` onclick ="${onclick}" `}onclick=null}catch(c){}
          try{if(src){extra = extra + ` src ="${src}" `}src=null}catch(c){}
          string = string + "<img"+extra+">"

        },
        br:()=>{
              extra = ""
          try{if(id){extra = extra + ` id ="${id}" `};id=null}catch(c){}
          try{if(cls){extra = extra + ` class ="${cls}" `};cls=null}catch(c){}
          try{if(style){extra = extra + ` style ="${style}" `};style=null}catch(c){}
          try{if(onclick){extra = extra + ` onclick ="${onclick}" `}onclick=null}catch(c){}
          string = string + "<br"+extra+">"
        },
        form:(sub)=>{
            extra = ""
            try{if(id){extra = extra + ` id ="${id}" `};id=null}catch(c){}
            try{if(cls){extra = extra + ` class ="${cls}" `};cls=null}catch(c){}
            try{if(style){extra = extra + ` style ="${style}" `};style=null}catch(c){}
            try{if(onclick){extra = extra + ` onclick ="${onclick}" `}onclick=null}catch(c){}
            try{if(type){extra = extra + ` type ="${type}" `}type=null}catch(c){}
            try{if(name){extra = extra + ` name ="${name}" `}name=null}catch(c){}
            try{if(action){extra = extra + ` action ="${action}" `}action=null}catch(c){}
            try{if(method){extra = extra + ` method ="${method}" `}method=null}catch(c){}
            string = string + "<form"+extra+">"
            sub()
            string = string + "</form>"
          },
        input:()=>{
          extra = ""
          try{if(id){extra = extra + ` id ="${id}" `};id=null}catch(c){}
          try{if(cls){extra = extra + ` class ="${cls}" `};cls=null}catch(c){}
          try{if(style){extra = extra + ` style ="${style}" `};style=null}catch(c){}
          try{if(onclick){extra = extra + ` onclick ="${onclick}" `}onclick=null}catch(c){}
          try{if(type){extra = extra + ` type ="${type}" `}type=null}catch(c){}
          try{if(name){extra = extra + ` name ="${name}" `}name=null}catch(c){}
          try{if(placeholder){extra = extra + ` placeholder ="${placeholder}" `}placeholder=null}catch(c){}
          try{if(value){extra = extra + ` value ="${value}" `}value=null}catch(c){}
          try{if(hidden){extra = extra + ` hidden `}hidden=null}catch(c){}
          try{if(required){extra = extra + ` required `}required=null}catch(c){}
          string = string + "<input"+extra+">"
        },
        button:(sub)=>{
            extra = ""
            try{if(id){extra = extra + ` id ="${id}" `};id=null}catch(c){}
            try{if(cls){extra = extra + ` class ="${cls}" `};cls=null}catch(c){}
            try{if(style){extra = extra + ` style ="${style}" `};style=null}catch(c){}
            try{if(onclick){extra = extra + ` onclick ="${onclick}" `}onclick=null}catch(c){}
            string = string + "<button"+extra+">"
            sub()
            string = string + "</button>"
          },
        label:(sub)=>{
              extra = ""
              try{if(id){extra = extra + ` id ="${id}" `};id=null}catch(c){}
              try{if(cls){extra = extra + ` class ="${cls}" `};cls=null}catch(c){}
              try{if(style){extra = extra + ` style ="${style}" `};style=null}catch(c){}
              try{if(onclick){extra = extra + ` onclick ="${onclick}" `}onclick=null}catch(c){}
              string = string + "<label"+extra+">"
              sub()
              string = string + "</label>"
        },
        span:(sub)=>{
              extra = ""
              try{if(id){extra = extra + ` id ="${id}" `};id=null}catch(c){}
              try{if(cls){extra = extra + ` class ="${cls}" `};cls=null}catch(c){}
              try{if(style){extra = extra + ` style ="${style}" `};style=null}catch(c){}
              try{if(onclick){extra = extra + ` onclick ="${onclick}" `}onclick=null}catch(c){}
              string = string + "<span"+extra+">"
              sub()
              string = string + "</span>"
        },
        small:(sub)=>{
              extra = ""
              try{if(id){extra = extra + ` id ="${id}" `};id=null}catch(c){}
              try{if(cls){extra = extra + ` class ="${cls}" `};cls=null}catch(c){}
              try{if(style){extra = extra + ` style ="${style}" `};style=null}catch(c){}
              try{if(onclick){extra = extra + ` onclick ="${onclick}" `}onclick=null}catch(c){}
              string = string + "<small"+extra+">"
              sub()
              string = string + "</small>"
        },
        strike:(sub)=>{
              extra = ""
              try{if(id){extra = extra + ` id ="${id}" `};id=null}catch(c){}
              try{if(cls){extra = extra + ` class ="${cls}" `};cls=null}catch(c){}
              try{if(style){extra = extra + ` style ="${style}" `};style=null}catch(c){}
              try{if(onclick){extra = extra + ` onclick ="${onclick}" `}onclick=null}catch(c){}
              string = string + "<strike"+extra+">"
              sub()
              string = string + "</strike>"
        },
        source:(sub)=>{
              extra = ""
              try{if(id){extra = extra + ` id ="${id}" `};id=null}catch(c){}
              try{if(cls){extra = extra + ` class ="${cls}" `};cls=null}catch(c){}
              try{if(style){extra = extra + ` style ="${style}" `};style=null}catch(c){}
              try{if(onclick){extra = extra + ` onclick ="${onclick}" `}onclick=null}catch(c){}
              try{if(src){extra = extra + ` src ="${src}" `}src=null}catch(c){}
              try{if(type){extra = extra + ` type ="${type}" `}type=null}catch(c){}
              string = string + "<source"+extra+">"
              sub()
              string = string + "</source>"
        },
        video:(sub)=>{
          extra = ""
          try{if(id){extra = extra + ` id ="${id}" `};id=null}catch(c){}
          try{if(cls){extra = extra + ` class ="${cls}" `};cls=null}catch(c){}
          try{if(style){extra = extra + ` style ="${style}" `};style=null}catch(c){}
          try{if(onclick){extra = extra + ` onclick ="${onclick}" `}onclick=null}catch(c){}
          try{if(src){extra = extra + ` src ="${src}" `}src=null}catch(c){}
          try{if(type){extra = extra + ` type ="${type}" `}type=null}catch(c){}
          try{if(controls){extra = extra + ` controls `}controls=null}catch(c){}
          try{if(width){extra = extra + ` width ="${width}" `}width=null}catch(c){}
          try{if(height){extra = extra + ` height ="${height}" `}height=null}catch(c){}
          string = string + "<video"+extra+">"
          sub()
          string = string + "</video>"
        },
        audio:(sub)=>{
          extra = ""
          try{if(id){extra = extra + ` id ="${id}" `};id=null}catch(c){}
          try{if(cls){extra = extra + ` class ="${cls}" `};cls=null}catch(c){}
          try{if(style){extra = extra + ` style ="${style}" `};style=null}catch(c){}
          try{if(onclick){extra = extra + ` onclick ="${onclick}" `}onclick=null}catch(c){}
          try{if(src){extra = extra + ` src ="${src}" `}src=null}catch(c){}
          try{if(type){extra = extra + ` type ="${type}" `}type=null}catch(c){}
          try{if(controls){extra = extra + ` controls `}controls=null}catch(c){}
          try{if(width){extra = extra + ` width ="${width}" `}width=null}catch(c){}
          try{if(height){extra = extra + ` height ="${height}" `}height=null}catch(c){}
          string = string + "<audio"+extra+">"
          sub()
          string = string + "</audio>"
        },
        select:(sub)=>{
              extra = ""
              try{if(id){extra = extra + ` id ="${id}" `};id=null}catch(c){}
              try{if(cls){extra = extra + ` class ="${cls}" `};cls=null}catch(c){}
              try{if(style){extra = extra + ` style ="${style}" `};style=null}catch(c){}
              try{if(onclick){extra = extra + ` onclick ="${onclick}" `}onclick=null}catch(c){}
              string = string + "<select"+extra+">"
              sub()
              string = string + "</select>"
        },
        option:(sub)=>{
              extra = ""
              try{if(id){extra = extra + ` id ="${id}" `};id=null}catch(c){}
              try{if(cls){extra = extra + ` class ="${cls}" `};cls=null}catch(c){}
              try{if(style){extra = extra + ` style ="${style}" `};style=null}catch(c){}
              try{if(onclick){extra = extra + ` onclick ="${onclick}" `}onclick=null}catch(c){}
              string = string + "<option"+extra+">"
              sub()
              string = string + "</option>"
        },
        label:(sub)=>{
              extra = ""
              try{if(id){extra = extra + ` id ="${id}" `};id=null}catch(c){}
              try{if(cls){extra = extra + ` class ="${cls}" `};cls=null}catch(c){}
              try{if(style){extra = extra + ` style ="${style}" `};style=null}catch(c){}
              try{if(onclick){extra = extra + ` onclick ="${onclick}" `}onclick=null}catch(c){}
              string = string + "<label"+extra+">"
              sub()
              string = string + "</label>"
        },
        output:(sub)=>{
              extra = ""
              try{if(id){extra = extra + ` id ="${id}" `};id=null}catch(c){}
              try{if(cls){extra = extra + ` class ="${cls}" `};cls=null}catch(c){}
              try{if(style){extra = extra + ` style ="${style}" `};style=null}catch(c){}
              try{if(onclick){extra = extra + ` onclick ="${onclick}" `}onclick=null}catch(c){}
              string = string + "<output"+extra+">"
              sub()
              string = string + "</output>"
        },
        canvas:(sub)=>{
              extra = ""
              try{if(id){extra = extra + ` id ="${id}" `};id=null}catch(c){}
              try{if(cls){extra = extra + ` class ="${cls}" `};cls=null}catch(c){}
              try{if(style){extra = extra + ` style ="${style}" `};style=null}catch(c){}
              try{if(onclick){extra = extra + ` onclick ="${onclick}" `}onclick=null}catch(c){}
              string = string + "<canvas"+extra+">"
              sub()
              string = string + "</canvas>"
        },
        noscript:(sub)=>{
              extra = ""
              try{if(id){extra = extra + ` id ="${id}" `};id=null}catch(c){}
              try{if(cls){extra = extra + ` class ="${cls}" `};cls=null}catch(c){}
              try{if(style){extra = extra + ` style ="${style}" `};style=null}catch(c){}
              try{if(onclick){extra = extra + ` onclick ="${onclick}" `}onclick=null}catch(c){}
              string = string + "<noscript"+extra+">"
              sub()
              string = string + "</noscript>"
        },
        pre:(sub)=>{
              extra = ""
              try{if(id){extra = extra + ` id ="${id}" `};id=null}catch(c){}
              try{if(cls){extra = extra + ` class ="${cls}" `};cls=null}catch(c){}
              try{if(style){extra = extra + ` style ="${style}" `};style=null}catch(c){}
              try{if(onclick){extra = extra + ` onclick ="${onclick}" `}onclick=null}catch(c){}
              string = string + "<pre"+extra+">"
              sub()
              string = string + "</pre>"
        },
        code:(sub)=>{
              extra = ""
              try{if(id){extra = extra + ` id ="${id}" `};id=null}catch(c){}
              try{if(cls){extra = extra + ` class ="${cls}" `};cls=null}catch(c){}
              try{if(style){extra = extra + ` style ="${style}" `};style=null}catch(c){}
              try{if(onclick){extra = extra + ` onclick ="${onclick}" `}onclick=null}catch(c){}
              string = string + "<code"+extra+">"
              sub()
              string = string + "</code>"
        },
        sup:(sub)=>{
              extra = ""
              try{if(id){extra = extra + ` id ="${id}" `};id=null}catch(c){}
              try{if(cls){extra = extra + ` class ="${cls}" `};cls=null}catch(c){}
              try{if(style){extra = extra + ` style ="${style}" `};style=null}catch(c){}
              try{if(onclick){extra = extra + ` onclick ="${onclick}" `}onclick=null}catch(c){}
              string = string + "<sup"+extra+">"
              sub()
              string = string + "</sup>"
        },
        table:(sub)=>{
              extra = ""
              try{if(id){extra = extra + ` id ="${id}" `};id=null}catch(c){}
              try{if(cls){extra = extra + ` class ="${cls}" `};cls=null}catch(c){}
              try{if(style){extra = extra + ` style ="${style}" `};style=null}catch(c){}
              try{if(onclick){extra = extra + ` onclick ="${onclick}" `}onclick=null}catch(c){}
              string = string + "<table"+extra+">"
              sub()
              string = string + "</table>"
        },
        tbody:(sub)=>{
              extra = ""
              try{if(id){extra = extra + ` id ="${id}" `};id=null}catch(c){}
              try{if(cls){extra = extra + ` class ="${cls}" `};cls=null}catch(c){}
              try{if(style){extra = extra + ` style ="${style}" `};style=null}catch(c){}
              try{if(onclick){extra = extra + ` onclick ="${onclick}" `}onclick=null}catch(c){}
              string = string + "<tbody"+extra+">"
              sub()
              string = string + "</tbody>"
        },
        tfoot:(sub)=>{
              extra = ""
              try{if(id){extra = extra + ` id ="${id}" `};id=null}catch(c){}
              try{if(cls){extra = extra + ` class ="${cls}" `};cls=null}catch(c){}
              try{if(style){extra = extra + ` style ="${style}" `};style=null}catch(c){}
              try{if(onclick){extra = extra + ` onclick ="${onclick}" `}onclick=null}catch(c){}
              string = string + "<tfoot"+extra+">"
              sub()
              string = string + "</tfoot>"
        },
        time:(sub)=>{
              extra = ""
              try{if(id){extra = extra + ` id ="${id}" `};id=null}catch(c){}
              try{if(cls){extra = extra + ` class ="${cls}" `};cls=null}catch(c){}
              try{if(style){extra = extra + ` style ="${style}" `};style=null}catch(c){}
              try{if(onclick){extra = extra + ` onclick ="${onclick}" `}onclick=null}catch(c){}
              string = string + "<time"+extra+">"
              sub()
              string = string + "</time>"
        },
        tt:(sub)=>{
              extra = ""
              try{if(id){extra = extra + ` id ="${id}" `};id=null}catch(c){}
              try{if(cls){extra = extra + ` class ="${cls}" `};cls=null}catch(c){}
              try{if(style){extra = extra + ` style ="${style}" `};style=null}catch(c){}
              try{if(onclick){extra = extra + ` onclick ="${onclick}" `}onclick=null}catch(c){}
              string = string + "<tt"+extra+">"
              sub()
              string = string + "</tt>"
        },
        strong:(sub)=>{
              extra = ""
              try{if(id){extra = extra + ` id ="${id}" `};id=null}catch(c){}
              try{if(cls){extra = extra + ` class ="${cls}" `};cls=null}catch(c){}
              try{if(style){extra = extra + ` style ="${style}" `};style=null}catch(c){}
              try{if(onclick){extra = extra + ` onclick ="${onclick}" `}onclick=null}catch(c){}
              string = string + "<strong"+extra+">"
              sub()
              string = string + "</strong>"
        },
        body:(sub)=>{
            extra = ""
            try{if(id){extra = extra + ` id ="${id}" `};id=null}catch(c){}
            try{if(cls){extra = extra + ` class ="${cls}" `};cls=null}catch(c){}
            try{if(style){extra = extra + ` style ="${style}" `};style=null}catch(c){}
            try{if(onclick){extra = extra + ` onclick ="${onclick}" `}onclick=null}catch(c){}
            string = string + "<body"+extra+">"
            sub()
            string = string + "</body>"
          },
        p:(sub)=>{
              extra = ""
              try{if(id){extra = extra + ` id ="${id}" `};id=null}catch(c){}
              try{if(cls){extra = extra + ` class ="${cls}" `};cls=null}catch(c){}
              try{if(style){extra = extra + ` style ="${style}" `};style=null}catch(c){}
              try{if(onclick){extra = extra + ` onclick ="${onclick}" `}onclick=null}catch(c){}
              string = string + "<p"+extra+">"
              sub()
              string = string + "</p>"
            },
        html:(sub)=>{
            extra = ""
            try{if(id){extra = extra + ` id ="${id}" `};id=null}catch(c){}
            try{if(cls){extra = extra + ` class ="${cls}" `};cls=null}catch(c){}
            try{if(style){extra = extra + ` style ="${style}" `};style=null}catch(c){}
            try{if(onclick){extra = extra + ` onclick ="${onclick}" `}onclick=null}catch(c){}
            string = string + "<html"+extra+">"
            sub()
            string = string + "</html>"
          },
        div:(sub)=>{
            extra = ""
            try{if(id){extra = extra + ` id ="${id}" `};id=null}catch(c){}
            try{if(cls){extra = extra + ` class ="${cls}" `};cls=null}catch(c){}
            try{if(style){extra = extra + ` style ="${style}" `};style=null}catch(c){}
            try{if(onclick){extra = extra + ` onclick ="${onclick}" `}onclick=null}catch(c){}
            string = string + "<div"+extra+">"
            sub()
            string = string + "</div>"
          },
        a:(sub)=>{
              extra = ""
              try{if(id){extra = extra + ` id ="${id}" `};id=null}catch(c){}
              try{if(cls){extra = extra + ` class ="${cls}" `};cls=null}catch(c){}
              try{if(style){extra = extra + ` style ="${style}" `};style=null}catch(c){}
              try{if(onclick){extra = extra + ` onclick ="${onclick}" `}onclick=null}catch(c){}
              try{if(href){extra = extra + ` href ="${href}" `}href=null}catch(c){}
              string = string + "<a"+extra+">"
              sub()
              string = string + "</a>"
            },
        embed:(sub)=>{
                  extra = ""
                  try{if(id){extra = extra + ` id ="${id}" `};id=null}catch(c){}
                  try{if(cls){extra = extra + ` class ="${cls}" `};cls=null}catch(c){}
                  try{if(style){extra = extra + ` style ="${style}" `};style=null}catch(c){}
                  try{if(onclick){extra = extra + ` onclick ="${onclick}" `}onclick=null}catch(c){}
                  try{if(src){extra = extra + ` src ="${src}" `}src=null}catch(c){}
                  string = string + "<embed"+extra+">"
                  sub()
                  string = string + "</embed>"
                },
        iframe:(sub)=>{
                      extra = ""
                      try{if(id){extra = extra + ` id ="${id}" `};id=null}catch(c){}
                      try{if(cls){extra = extra + ` class ="${cls}" `};cls=null}catch(c){}
                      try{if(style){extra = extra + ` style ="${style}" `};style=null}catch(c){}
                      try{if(onclick){extra = extra + ` onclick ="${onclick}" `}onclick=null}catch(c){}
                      try{if(src){extra = extra + ` src ="${src}" `}src=null}catch(c){}
                      string = string + "<iframe"+extra+">"
                      sub()
                      string = string + "</iframe>"
          },
        script:(funcs)=>{
            extra = ""
            try{if(id){extra = extra + ` id ="${id}" `};id=null}catch(c){}
            try{if(cls){extra = extra + ` class ="${cls}" `};cls=null}catch(c){}
            try{if(style){extra = extra + ` style ="${style}" `};style=null}catch(c){}
            try{if(onclick){extra = extra + ` onclick ="${onclick}" `}onclick=null}catch(c){}
            try{if(type){extra = extra + ` type ="${type}" `}type=null}catch(c){}
            try{if(src){extra = extra + ` src ="${src}" `}src=null}catch(c){}
            var entire = funcs.toString();
            var bod = entire.slice(entire.indexOf("{") + 1, entire.lastIndexOf("}"));
            string = string + "<script"+extra+">"
            string = string +bod
            string = string + "</script>"
          },
        thead:(sub)=>{
                extra = ""
                try{if(id){extra = extra + ` id ="${id}" `};id=null}catch(c){}
                try{if(cls){extra = extra + ` class ="${cls}" `};cls=null}catch(c){}
                try{if(style){extra = extra + ` style ="${style}" `};style=null}catch(c){}
                try{if(onclick){extra = extra + ` onclick ="${onclick}" `}onclick=null}catch(c){}
                string = string + "<thead"+extra+">"
                sub()
                string = string + "</thead>"
          },
        legend:(sub)=>{
                extra = ""
                try{if(id){extra = extra + ` id ="${id}" `};id=null}catch(c){}
                try{if(cls){extra = extra + ` class ="${cls}" `};cls=null}catch(c){}
                try{if(style){extra = extra + ` style ="${style}" `};style=null}catch(c){}
                try{if(onclick){extra = extra + ` onclick ="${onclick}" `}onclick=null}catch(c){}
                string = string + "<legend"+extra+">"
                sub()
                string = string + "</legend>"
          },
        li:(sub)=>{
                extra = ""
                try{if(id){extra = extra + ` id ="${id}" `};id=null}catch(c){}
                try{if(cls){extra = extra + ` class ="${cls}" `};cls=null}catch(c){}
                try{if(style){extra = extra + ` style ="${style}" `};style=null}catch(c){}
                try{if(onclick){extra = extra + ` onclick ="${onclick}" `}onclick=null}catch(c){}
                string = string + "<li"+extra+">"
                sub()
                string = string + "</li>"
          },
        lu:(sub)=>{
                extra = ""
                try{if(id){extra = extra + ` id ="${id}" `};id=null}catch(c){}
                try{if(cls){extra = extra + ` class ="${cls}" `};cls=null}catch(c){}
                try{if(style){extra = extra + ` style ="${style}" `};style=null}catch(c){}
                try{if(onclick){extra = extra + ` onclick ="${onclick}" `}onclick=null}catch(c){}
                string = string + "<lu"+extra+">"
                sub()
                string = string + "</lu>"
          },
        ol:(sub)=>{
                extra = ""
                try{if(id){extra = extra + ` id ="${id}" `};id=null}catch(c){}
                try{if(cls){extra = extra + ` class ="${cls}" `};cls=null}catch(c){}
                try{if(style){extra = extra + ` style ="${style}" `};style=null}catch(c){}
                try{if(onclick){extra = extra + ` onclick ="${onclick}" `}onclick=null}catch(c){}
                string = string + "<ol"+extra+">"
                sub()
                string = string + "</ol>"
          },
        mark:(sub)=>{
                extra = ""
                try{if(id){extra = extra + ` id ="${id}" `};id=null}catch(c){}
                try{if(cls){extra = extra + ` class ="${cls}" `};cls=null}catch(c){}
                try{if(style){extra = extra + ` style ="${style}" `};style=null}catch(c){}
                try{if(onclick){extra = extra + ` onclick ="${onclick}" `}onclick=null}catch(c){}
                string = string + "<mark"+extra+">"
                sub()
                string = string + "</mark>"
          },
        meter:(sub)=>{
                extra = ""
                try{if(id){extra = extra + ` id ="${id}" `};id=null}catch(c){}
                try{if(cls){extra = extra + ` class ="${cls}" `};cls=null}catch(c){}
                try{if(style){extra = extra + ` style ="${style}" `};style=null}catch(c){}
                try{if(onclick){extra = extra + ` onclick ="${onclick}" `}onclick=null}catch(c){}
                string = string + "<meter"+extra+">"
                sub()
                string = string + "</meter>"
          },
        nav:(sub)=>{
                extra = ""
                try{if(id){extra = extra + ` id ="${id}" `};id=null}catch(c){}
                try{if(cls){extra = extra + ` class ="${cls}" `};cls=null}catch(c){}
                try{if(style){extra = extra + ` style ="${style}" `};style=null}catch(c){}
                try{if(onclick){extra = extra + ` onclick ="${onclick}" `}onclick=null}catch(c){}
                string = string + "<nav"+extra+">"
                sub()
                string = string + "</nav>"
          },
        map:(sub)=>{
                extra = ""
                try{if(id){extra = extra + ` id ="${id}" `};id=null}catch(c){}
                try{if(cls){extra = extra + ` class ="${cls}" `};cls=null}catch(c){}
                try{if(style){extra = extra + ` style ="${style}" `};style=null}catch(c){}
                try{if(onclick){extra = extra + ` onclick ="${onclick}" `}onclick=null}catch(c){}
                string = string + "<map"+extra+">"
                sub()
                string = string + "</map>"
          },
        }
const EotStr = function(data){
  var entire = data.toString();
  var body = entire.slice(entire.indexOf("{/*") + 3, entire.lastIndexOf("*/}"));
  return body
}
router.static = function(URL,DIR,req,res){
  res.slak = {
    send:{
      SlakDoc:function(pathCXCXCDUHUDNIJNNMDKMJKDNIOKDNMKLMKLDMKDPOMDDNHJBNJKHBJKBJKBJKBJKNJNJKBJKBJKNJKKJBJKNJKB){
        string = ""
        const fs = require('fs');
        const echo = function(str){string = string + str}
        fs.readFile(pathCXCXCDUHUDNIJNNMDKMJKDNIOKDNMKLMKLDMKDPOMDDNHJBNJKHBJKBJKBJKBJKNJNJKBJKBJKNJKKJBJKNJKB, 'utf8', function(err, CCCCCCCCLLLNSUIAUHSNBAIHSIAHSOINASOIAHJOISAJSIAMSOIAJISOAJMSASJAOISMAISJNOIASJMAISAJSIOASMAIKOSMAOIJSIAJSIAJIOJSIOAJIOSMAS){
        CMCMCMCMCMJSMMSJNMSMSJSNMSJJNNSJJSNJSJNSJSSNSJJNSJSNSHGSHNSH = CCCCCCCCLLLNSUIAUHSNBAIHSIAHSOINASOIAHJOISAJSIAMSOIAJISOAJMSASJAOISMAISJNOIASJMAISAJSIOASMAIKOSMAOIJSIAJSIAJIOJSIOAJIOSMAS.split("")
        MCMCMCMJJHDHDHIJSHJHSDIJSUIUSDJHSJDSIDUISDHJSDJKSDUSIDJSJKDSOIJDUSJDSJDOSOIDSJDJMSODSIDIJSJDOKSJDOSJDJSOKDOISDJSDJKSOKIOSJDSODOIKSOJDSODJSOKDKSDJ = false
        VVVXBXBXHXBBXHBXJJHXNJXUHAKSJHDNJDHYHDNDJDHJHSNSNJSHNBSNMJKSJKSNSHJHJS = ""
        for(BBBHHHSHSHHSGSHHSHSBNJSHBSHJHSBJHSBJHSB=0;BBBHHHSHSHHSGSHHSHSBNJSHBSHJHSBJHSBJHSB<CMCMCMCMCMJSMMSJNMSMSJSNMSJJNNSJJSNJSJNSJSSNSJJNSJSNSHGSHNSH.length;BBBHHHSHSHHSGSHHSHSBNJSHBSHJHSBJHSBJHSB++){
          if(CMCMCMCMCMJSMMSJNMSMSJSNMSJJNNSJJSNJSJNSJSSNSJJNSJSNSHGSHNSH[BBBHHHSHSHHSGSHHSHSBNJSHBSHJHSBJHSBJHSB]=="<"&&CMCMCMCMCMJSMMSJNMSMSJSNMSJJNNSJJSNJSJNSJSSNSJJNSJSNSHGSHNSH[BBBHHHSHSHHSGSHHSHSBNJSHBSHJHSBJHSBJHSB+1]=="?"&&CMCMCMCMCMJSMMSJNMSMSJSNMSJJNNSJJSNJSJNSJSSNSJJNSJSNSHGSHNSH[BBBHHHSHSHHSGSHHSHSBNJSHBSHJHSBJHSBJHSB+2]=="_"&&CMCMCMCMCMJSMMSJNMSMSJSNMSJJNNSJJSNJSJNSJSSNSJJNSJSNSHGSHNSH[BBBHHHSHSHHSGSHHSHSBNJSHBSHJHSBJHSBJHSB+3]=="@"){
            CMCMCMCMCMJSMMSJNMSMSJSNMSJJNNSJJSNJSJNSJSSNSJJNSJSNSHGSHNSH[BBBHHHSHSHHSGSHHSHSBNJSHBSHJHSBJHSBJHSB]="";CMCMCMCMCMJSMMSJNMSMSJSNMSJJNNSJJSNJSJNSJSSNSJJNSJSNSHGSHNSH[BBBHHHSHSHHSGSHHSHSBNJSHBSHJHSBJHSBJHSB+1]="";CMCMCMCMCMJSMMSJNMSMSJSNMSJJNNSJJSNJSJNSJSSNSJJNSJSNSHGSHNSH[BBBHHHSHSHHSGSHHSHSBNJSHBSHJHSBJHSBJHSB+2]="";CMCMCMCMCMJSMMSJNMSMSJSNMSJJNNSJJSNJSJNSJSSNSJJNSJSNSHGSHNSH[BBBHHHSHSHHSGSHHSHSBNJSHBSHJHSBJHSBJHSB+3]="";
            MCMCMCMJJHDHDHIJSHJHSDIJSUIUSDJHSJDSIDUISDHJSDJKSDUSIDJSJKDSOIJDUSJDSJDOSOIDSJDJMSODSIDIJSJDOKSJDOSJDJSOKDOISDJSDJKSOKIOSJDSODOIKSOJDSODJSOKDKSDJ = true
          }
          if(CMCMCMCMCMJSMMSJNMSMSJSNMSJJNNSJJSNJSJNSJSSNSJJNSJSNSHGSHNSH[BBBHHHSHSHHSGSHHSHSBNJSHBSHJHSBJHSBJHSB]=="_"&&CMCMCMCMCMJSMMSJNMSMSJSNMSJJNNSJJSNJSJNSJSSNSJJNSJSNSHGSHNSH[BBBHHHSHSHHSGSHHSHSBNJSHBSHJHSBJHSBJHSB+1]=="@"&&CMCMCMCMCMJSMMSJNMSMSJSNMSJJNNSJJSNJSJNSJSSNSJJNSJSNSHGSHNSH[BBBHHHSHSHHSGSHHSHSBNJSHBSHJHSBJHSBJHSB+2]=="?"&&CMCMCMCMCMJSMMSJNMSMSJSNMSJJNNSJJSNJSJNSJSSNSJJNSJSNSHGSHNSH[BBBHHHSHSHHSGSHHSHSBNJSHBSHJHSBJHSBJHSB+3]==">"){
            CMCMCMCMCMJSMMSJNMSMSJSNMSJJNNSJJSNJSJNSJSSNSJJNSJSNSHGSHNSH[BBBHHHSHSHHSGSHHSHSBNJSHBSHJHSBJHSBJHSB]="";CMCMCMCMCMJSMMSJNMSMSJSNMSJJNNSJJSNJSJNSJSSNSJJNSJSNSHGSHNSH[BBBHHHSHSHHSGSHHSHSBNJSHBSHJHSBJHSBJHSB+1]="";CMCMCMCMCMJSMMSJNMSMSJSNMSJJNNSJJSNJSJNSJSSNSJJNSJSNSHGSHNSH[BBBHHHSHSHHSGSHHSHSBNJSHBSHJHSBJHSBJHSB+2]="";CMCMCMCMCMJSMMSJNMSMSJSNMSJJNNSJJSNJSJNSJSSNSJJNSJSNSHGSHNSH[BBBHHHSHSHHSGSHHSHSBNJSHBSHJHSBJHSBJHSB+3]="";
            MCMCMCMJJHDHDHIJSHJHSDIJSUIUSDJHSJDSIDUISDHJSDJKSDUSIDJSJKDSOIJDUSJDSJDOSOIDSJDJMSODSIDIJSJDOKSJDOSJDJSOKDOISDJSDJKSOKIOSJDSODOIKSOJDSODJSOKDKSDJ = false;
            const appendSDFDSFDSFSDFSDFDSFDSFDFSDDDJSIDJOSDSMKDSKDJSODPSDMKSLMDSKLDSLDKSMLSMDLSKMDSLDMSLAKDATA=function(sldataXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR){
              const arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT = sldataXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR.split("");
              atTagMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ = false
              stringed1 = false
              stringed2 = false
              stringed3 = false
              stringed4 = false
              for(bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng=0;bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng<arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT.length;bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng++){
                if(arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng]== '"'&&!stringed1&&!stringed2&&!stringed3&&!stringed4){
                  stringed1 = true
                }else if(arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng] == '"'&&stringed1){
                  stringed1 = false
                }
                if(arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng] == "'"&&!stringed2&&!stringed1&&!stringed3&&!stringed4){
                  stringed2 = true
                }else if(arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng] == "'"&&stringed2){
                  stringed2 = false
                }
                if(arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng] == '`'&&!stringed1&&!stringed2&&!stringed3&&!stringed4){
                  stringed3 = true
                }else if(arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng] == '`'&&stringed3){
                  stringed3 = false
                }

                if(arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng] == '<'&&arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+1] == '<'&&arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+2] == '<'&&arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+3] == 'E'&&arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+4] == 'O'&&arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+5] == 'T'&&!stringed1&&!stringed2&&!stringed3&&!stringed4){
                  stringed4 = true
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng] = "EotStr(()=>{/*"
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+1] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+2] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+3] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+4] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+5] = ""
                }else if(arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng] == 'E'&&arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+1] == 'O'&&arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+2] == 'T'&&arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+3] == '>'&&arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+4] == '>'&&arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+5] == '>'&&stringed4){
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng] = "*/})"
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+1] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+2] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+3] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+4] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+5] = ""
                  stringed4 = false
                }else if(arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng] == 'E'&&arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+1] == 'O'&&arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+2] == 'T'&&stringed4){
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng] = "*/})"
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+1] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+2] = ""
                  stringed4 = false
                }else if(
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng] == '*'&&
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+1] == `/` &&
                  stringed4
                ){
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng] = "*/})+`*/`+EotStr(()=>{/*"
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+1] = ""
                }
                if(
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng] == 'e'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+1] == 'l'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+2] == 's'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+3] == 'e'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+4] == 'i'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+5] == 'f'&&
                !stringed1&&!stringed2&&!stringed3&&!stringed4){
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng] = "else if"
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+1] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+2] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+3] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+4] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+5] = ""
                }
                if(
                (arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng] == '}' ||
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng] == '\n' ||
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng] == ' ')&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+1] == 'e'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+2] == 'l'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+3] == 's'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+4] == 'e'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+5] == 'i'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+6] == 'f'&&
                (
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng] == '(' ||
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng] == ' '
                )&&
                !stringed1&&!stringed2&&!stringed3&&!stringed4){
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+1] = "else if"
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+2] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+3] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+4] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+5] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+6] = ""
                }
                if(
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng] == ' '&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+1] == 'i'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+2] == 's'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+3] == ' '&&
                !stringed1&&!stringed2&&!stringed3&&!stringed4){
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng] = "="
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+1] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+2] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+3] = ""
                }
                if(
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng] == ' '&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+1] == 'w'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+2] == 'i'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+3] == 't'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+4] == 'h'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+5] == ' '&&
                !stringed1&&!stringed2&&!stringed3&&!stringed4){
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng] = "+"
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+1] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+2] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+3] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+4] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+5] = ""
                }
                if(
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng] == ' '&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+1] == 's'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+2] == 'a'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+3] == 'm'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+4] == 'e'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+5] == ' '&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+6] == 'a'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+7] == 's'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+8] == ' '&&
                !stringed1&&!stringed2&&!stringed3&&!stringed4){
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng] = "=="
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+1] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+2] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+3] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+4] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+5] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+6] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+7] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+8] = ""
                }
                if(
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng] == ' '&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+1] == 'p'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+2] == 'l'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+3] == 'u'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+4] == 's'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+5] == ' '&&
                !stringed1&&!stringed2&&!stringed3&&!stringed4){
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng] = "+"
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+1] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+2] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+3] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+4] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+5] = ""
                }
                if(
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng] == ' '&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+1] == 'g'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+2] == 'r'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+3] == 'o'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+4] == 'w'&&
                (
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+5] == ' ' ||
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+5] == ')'
                )&&
                !stringed1&&!stringed2&&!stringed3&&!stringed4){
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng] = "+"
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+1] = "+"
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+2] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+3] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+4] = ""
                }
                if(
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng] == ' '&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+1] == 's'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+2] == 'h'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+3] == 'r'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+4] == 'i'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+5] == 'n'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+6] == 'k'&&
                (
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+7] == ' '||
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+7] == ')'
                )&&
                !stringed1&&!stringed2&&!stringed3&&!stringed4){
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng] = "-"
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+1] = "-"
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+2] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+3] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+4] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+5] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+6] = ""
                }
                if(
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng] == ' '&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+1] == 'a'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+2] == 'n'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+3] == 'd'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+4] == ' '&&
                !stringed1&&!stringed2&&!stringed3&&!stringed4){
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng] = "&&"
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+1] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+2] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+3] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+4] = ""
                }
                if(
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng] == '~'&&
                !stringed1&&!stringed2&&!stringed3&&!stringed4){
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng] = "."

                }
                if(
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng] == ' '&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+1] == 'e'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+2] == 'q'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+3] == 'u'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+4] == 'a'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+5] == 'l'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+6] == 's'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+7] == ' '&&
                !stringed1&&!stringed2&&!stringed3&&!stringed4){
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng] = "=="
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+1] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+2] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+3] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+4] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+5] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+6] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+7] = ""
                }

                if(
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng] == ' '&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+1] == 'b'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+2] == 'i'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+3] == 'g'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+4] == 'g'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+5] == 'e'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+6] == 'r'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+7] == ' '&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+8] == 't'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+9] == 'h'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+10] == 'a'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+11] == 'n'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+12] == ' '&&
                !stringed1&&!stringed2&&!stringed3&&!stringed4){
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng] = " "
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+1] = ">"
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+2] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+3] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+4] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+5] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+6] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+7] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+8] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+9] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+10] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+11] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+12] = " "
                }
                if(
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng] == ' '&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+1] == 's'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+2] == 'm'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+3] == 'a'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+4] == 'l'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+5] == 'l'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+6] == 'e'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+7] == 'r'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+8] == ' '&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+9] == 't'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+10] == 'h'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+11] == 'a'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+12] == 'n'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+13] == ' '&&
                !stringed1&&!stringed2&&!stringed3&&!stringed4){
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng] = " "
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+1] = "<"
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+2] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+3] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+4] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+5] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+6] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+7] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+8] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+9] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+10] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+11] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+12] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+13] = " "
                }
                if(
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng] == ' '&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+1] == 'e'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+2] == 'q'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+3] == 'u'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+4] == 'a'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+5] == 'l'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+6] == ' '&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+7] == 't'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+8] == 'o'&&
                arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+9] == ' '&&
                !stringed1&&!stringed2&&!stringed3&&!stringed4){
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+1] = "="
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+2] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+3] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+4] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+5] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+6] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+7] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+8] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+9] = " "
                }
                if(!stringed1&&!stringed2&&!stringed3&&!stringed4&&arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng] == "@" && atTagMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ == false && (arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+1] == "_") == false && (arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+1] == " ") == false && (arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+1] == "/n") == false){
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng] = "bld."
                  atTagMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ = true
                }
                if(!stringed1&&!stringed2&&!stringed3&&!stringed4&&arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng] == "/" && atTagMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ){
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng] = "(()=>{"
                  atTagMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ = false
                }
                if(!stringed1&&!stringed2&&!stringed3&&!stringed4&&arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng] == "/" && arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+1] == "{"){
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+1] = "},"
                }
                if(!stringed1&&!stringed2&&!stringed3&&!stringed4&&arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng] == "}" && arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+1] == "@" && arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+2] == "_"){
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+1] = ""
                  arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT[bxxxcdfgbgbgnhghnhgmghnghhjghmghnhgng+2] = ")"
                }
              }
              eval(arrBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVDDDDFFFFFFFFFFFFFFFFFFFFFDTTTT.join(''));
            };
            appendSDFDSFDSFSDFSDFDSFDSFDFSDDDJSIDJOSDSMKDSKDJSODPSDMKSLMDSKLDSLDKSMLSMDLSKMDSLDMSLAKDATA(VVVXBXBXHXBBXHBXJJHXNJXUHAKSJHDNJDHYHDNDJDHJHSNSNJSHNBSNMJKSJKSNSHJHJS)
            VVVXBXBXHXBBXHBXJJHXNJXUHAKSJHDNJDHYHDNDJDHJHSNSNJSHNBSNMJKSJKSNSHJHJS = "";

          }
            if(MCMCMCMJJHDHDHIJSHJHSDIJSUIUSDJHSJDSIDUISDHJSDJKSDUSIDJSJKDSOIJDUSJDSJDOSOIDSJDJMSODSIDIJSJDOKSJDOSJDJSOKDOISDJSDJKSOKIOSJDSODOIKSOJDSODJSOKDKSDJ == true && CMCMCMCMCMJSMMSJNMSMSJSNMSJJNNSJJSNJSJNSJSSNSJJNSJSNSHGSHNSH[BBBHHHSHSHHSGSHHSHSBNJSHBSHJHSBJHSBJHSB]){
              VVVXBXBXHXBBXHBXJJHXNJXUHAKSJHDNJDHYHDNDJDHJHSNSNJSHNBSNMJKSJKSNSHJHJS = VVVXBXBXHXBBXHBXJJHXNJXUHAKSJHDNJDHYHDNDJDHJHSNSNJSHNBSNMJKSJKSNSHJHJS + CMCMCMCMCMJSMMSJNMSMSJSNMSJJNNSJJSNJSJNSJSSNSJJNSJSNSHGSHNSH[BBBHHHSHSHHSGSHHSHSBNJSHBSHJHSBJHSBJHSB]
            }
            if(CMCMCMCMCMJSMMSJNMSMSJSNMSJJNNSJJSNJSJNSJSSNSJJNSJSNSHGSHNSH[BBBHHHSHSHHSGSHHSHSBNJSHBSHJHSBJHSBJHSB] && MCMCMCMJJHDHDHIJSHJHSDIJSUIUSDJHSJDSIDUISDHJSDJKSDUSIDJSJKDSOIJDUSJDSJDOSOIDSJDJMSODSIDIJSJDOKSJDOSJDJSOKDOISDJSDJKSOKIOSJDSODOIKSOJDSODJSOKDKSDJ == false){
              string = string + CMCMCMCMCMJSMMSJNMSMSJSNMSJJNNSJJSNJSJNSJSSNSJJNSJSNSHGSHNSH[BBBHHHSHSHHSGSHHSHSBNJSHBSHJHSBJHSBJHSB]
            }
        }
        res.send(string)
        });
      }
    },
  }
  dir = DIR;const fs = require('fs');try {
    if(req.url.split("?").shift() == "/"){
      if (fs.existsSync(dir+"/index.slak")) {
        res.slak.send.SlakDoc(dir+"/index.slak")
      }else{
        res.send("woops "+dir+req.url.split("?").shift()+" not found")
      }
    }else{
      if (fs.existsSync(dir+req.url.split("?").shift())) {
        if(req.url.split("?").shift().endsWith(".slak")){
          res.slak.send.SlakDoc(dir+req.url.split("?").shift())
        }else{
          res.sendFile(dir+req.url.split("?").shift())
        }
      }else{
        if (fs.existsSync(dir+req.url.split("?").shift()+".slak")) {
          res.slak.send.SlakDoc(dir+req.url.split("?").shift()+".slak")
        }else{res.send("woops "+req.url.split("?").shift()+" not found")
      }
    }
  }
} catch(err) {console.error(err);res.send(err)}
}
module.exports = {express:router}
