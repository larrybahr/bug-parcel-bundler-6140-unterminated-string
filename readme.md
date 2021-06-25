This repo reproduces the error in [parcel-bundler issue #6140](https://github.com/parcel-bundler/parcel/issues/6140#issuecomment-868504002)

Run `npm ci` to install dependencies then  `npm run build` results in this error:

```
> Executing task: npm run build <


> bug-parcel-bundler-6140-unterminated-string@1.0.0 build
> parcel build src/index.ts

× Build failed.
@parcel/optimizer-terser: Unterminated string constant
  20 |     var data = $bQNpp$taggedTemplateLiteral([    
> 21 |         "     
>    |        ^ Unterminated string constant
  22 | \n        <p>test</p>
  23 | \n        "
It's likely that Terser doesn't support this syntax yet.
npm ERR! code 1
npm ERR! path C:\Users\Larry\Desktop\bug-parcel-bundler-6140-unterminated-string
npm ERR! command failed
npm ERR! command C:\Windows\system32\cmd.exe /d /s /c parcel build src/index.ts

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\Larry\AppData\Local\npm-cache\_logs\2021-06-25T13_50_41_180Z-debug.log
The terminal process "C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe -Command npm run build" terminated with exit code: 1.

Terminal will be reused by tasks, press any key to close it.
```
