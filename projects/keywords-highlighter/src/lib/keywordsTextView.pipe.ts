import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({name: 'kh'})
export class KeywordsTextPipe implements PipeTransform {
  
  constructor(private sanitizer: DomSanitizer){}

  transform(value: string, keywords: {color:string, keywords: string[]}[]):any {
    
    let result:string = value;

    keywords.forEach(k=>{

        k.keywords.forEach(ky=>{

            result = result.replace(ky, "<span style=\"color:"+k.color+"\">"+ky+"</span>");
        })
    })

    return this.sanitizer.bypassSecurityTrustHtml(result);;
  }
}