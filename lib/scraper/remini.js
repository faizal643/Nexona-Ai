const _0x58ea7c=_0x501a;function _0x501a(_0x5b24c9,_0x557111){const _0x302297=_0x3022();return _0x501a=function(_0x501a94,_0x254f1c){_0x501a94=_0x501a94-0x1e2;let _0x55fcd4=_0x302297[_0x501a94];return _0x55fcd4;},_0x501a(_0x5b24c9,_0x557111);}(function(_0x3c9d87,_0x15d6a1){const _0xe5bbe6=_0x501a,_0x39ea1a=_0x3c9d87();while(!![]){try{const _0x1ab934=-parseInt(_0xe5bbe6(0x1e5))/0x1+parseInt(_0xe5bbe6(0x1e6))/0x2*(-parseInt(_0xe5bbe6(0x1ee))/0x3)+-parseInt(_0xe5bbe6(0x1f9))/0x4*(parseInt(_0xe5bbe6(0x1fa))/0x5)+-parseInt(_0xe5bbe6(0x1fd))/0x6*(parseInt(_0xe5bbe6(0x1f5))/0x7)+parseInt(_0xe5bbe6(0x1e3))/0x8*(-parseInt(_0xe5bbe6(0x205))/0x9)+parseInt(_0xe5bbe6(0x1f2))/0xa*(-parseInt(_0xe5bbe6(0x204))/0xb)+parseInt(_0xe5bbe6(0x1ff))/0xc;if(_0x1ab934===_0x15d6a1)break;else _0x39ea1a['push'](_0x39ea1a['shift']());}catch(_0x1baa0b){_0x39ea1a['push'](_0x39ea1a['shift']());}}}(_0x3022,0x71d2d));const fs=require('fs'),config=require(_0x58ea7c(0x20b)),ApiAutoresbot=require(_0x58ea7c(0x1e2)),api=new ApiAutoresbot(config[_0x58ea7c(0x1f3)]),axios=require('axios'),FormData=require(_0x58ea7c(0x1f8));async function ReminiV1(_0x591cef){const _0x5b15d6=_0x58ea7c;try{const _0x644737=require(_0x5b15d6(0x1f8)),_0x321149=_0x5b15d6(0x1ea),_0x4d1814=new _0x644737();_0x4d1814['append']('image',Buffer[_0x5b15d6(0x1f6)](_0x591cef),{'filename':_0x5b15d6(0x1eb),'contentType':_0x5b15d6(0x1f0)}),_0x4d1814[_0x5b15d6(0x1ed)](_0x5b15d6(0x207),0x1);const _0x1d8d9a=await axios[_0x5b15d6(0x208)](_0x321149,_0x4d1814,{'headers':{..._0x4d1814[_0x5b15d6(0x202)](),'User-Agent':_0x5b15d6(0x1ef),'Connection':_0x5b15d6(0x201),'Accept-Encoding':'gzip'},'responseType':_0x5b15d6(0x1e7),'timeout':0x9c40});return _0x1d8d9a[_0x5b15d6(0x1f7)];}catch(_0xd8fbe4){throw _0xd8fbe4;}}async function ReminiV2(_0x19bd32){const _0xd8aae6=_0x58ea7c;try{const _0x7ffeea=await api[_0xd8aae6(0x1e4)](_0xd8aae6(0x209),{'url':_0x19bd32});if(!Buffer[_0xd8aae6(0x1fb)](_0x7ffeea))throw new Error('Invalid\x20response:\x20Expected\x20Buffer.');return _0x7ffeea;}catch(_0x321e74){throw _0x321e74;}}function _0x3022(){const _0x5e71dc=['createReadStream','image.jpg','https://inferenceengine.vyro.ai/enhance.vyro','enhance_image_body.jpg','get','append','6AQkFuv','okhttp/4.9.3','image/jpeg','exports','23890yWlPIS','API_KEY','Failed\x20to\x20get\x20the\x20image\x20URL.','5680549npQnbj','from','data','form-data','279808eRZrDV','20VkqQAa','isBuffer','https://api2.pixelcut.app/image/upscale/v1','6gXHCGA','scale','35452224YJGdrE','application/json','Keep-Alive','getHeaders','binary','2871KHLDEj','810576AMSyFM','image','model_version','post','/api/tools/remini2','result_url','../../config','api-autoresbot','8uGINvE','getBuffer','292497jZLusw','390726mvnxal','arraybuffer'];_0x3022=function(){return _0x5e71dc;};return _0x3022();}async function ReminiV3(_0xa55ef0){const _0x198e91=_0x58ea7c;try{const _0x5d73e2=fs[_0x198e91(0x1e8)](_0xa55ef0),_0x40d8a3=new FormData();_0x40d8a3[_0x198e91(0x1ed)](_0x198e91(0x206),_0x5d73e2,{'filename':_0x198e91(0x1e9)}),_0x40d8a3[_0x198e91(0x1ed)](_0x198e91(0x1fe),0x2);const _0x2f2808=await axios[_0x198e91(0x208)](_0x198e91(0x1fc),_0x40d8a3,{'headers':{..._0x40d8a3[_0x198e91(0x202)](),'Accept':_0x198e91(0x200)}}),_0xf71e6b=_0x2f2808[_0x198e91(0x1f7)][_0x198e91(0x20a)];if(!_0xf71e6b)throw new Error(_0x198e91(0x1f4));const _0x24ad4b=await axios[_0x198e91(0x1ec)](_0xf71e6b,{'responseType':_0x198e91(0x1e7)}),_0x528867=Buffer['from'](_0x24ad4b[_0x198e91(0x1f7)],_0x198e91(0x203));return _0x528867;}catch(_0x129821){throw _0x129821;}}module[_0x58ea7c(0x1f1)]={'ReminiV1':ReminiV1,'ReminiV2':ReminiV2,'ReminiV3':ReminiV3};