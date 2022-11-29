# KeywordsHighlighter
Permits you to highlight keywords in text.


## Install

npm i keywords-highlighter

## Usage


    <div [innerHTML]="text | kh : keywords"></div>
    
    ...
    
    
    keywords = [{color:'blue', keywords:['@Component','export','class']}]

