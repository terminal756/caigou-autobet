const text =
  'var cubeLoader;\n' +
  '\t\tsetupCubeLoader(domainList, 20000, (domainList.length == 0) ? 1 : domainList.length).then(function(loader){\n' +
  '\t\t\tcubeLoader = loader;\n' +
  "\t\t\treturn loader.load('Core')\n" +
  '\t\t}).then(function(){\n' +
  '\t\t\tvar defaultConfig = {\n' +
  "\t\t\t\tdevice: 'PC',\n" +
  "\t\t\t\tenv: 'PROD',\n" +
  '\t\t\t\tisPcVersion: true,\n' +
  '\t\t\t\tlang: getLang(),\n' +
  "\t\t\t\tserverName: location.protocol + '//' + location.host,\n" +
  '\t\t\t\t// All thing need to get from GC\n' +
  "\t\t\t\tpid: 'F55',\n" +
  "\t\t\t\tusername: 'wwngary2910',\n" +
  "\t\t\t\tdoForward: '/doForward.do?params=EA5BCC33AF8FBF5AC8470D2F41F4614A750534A22258BA5241833711AA5342074A76B427A5B13A35DB3B255314A32B3265BD01A0171B2C38E0C23629BBAFAC933A86A8043E3B67F28D07F30A5D480DF6106FC93B00B4CC9A4C2FE1667E92E7D6F68284D6096B6F250CBD9D179D80AA7F1C4035395626B2B15D46E8B98FA0A8D1435B435C41366F452D47FFD08311626B7F36EB351FFB519F192DF5F99DDB0D11646DF336E1CF4038657D86AB30A6E35A&key=d3ef2cbfdee6afba72129ff8931de0c0&ip=117.151.222.114&ism=false',\n" +
  "\t\t\t\tdirectEnterId: '0',\n" +
  "\t\t\t\tdm: 'NO_RETURN',\n" +
  "\t\t\t\tuserIp: '117.151.222.114',\n" +
  '\t\t\t\tforceLang: (query.langNum),\n' +
  "\t\t\t\tod: ''\n" +
  '\t\t\t}\n' +
  '\n' +
  "\t\t\tvar indexConfig = window['indexConfig'] || {};\n" +
  '\t\t\tfor(key in indexConfig){\n' +
  '\t\t\t\tif(!defaultConfig[key]){\n' +
  '\t\t\t\t\tdefaultConfig[key] = indexConfig[key];\n' +
  '\t\t\t\t}\n' +
  '\t\t\t}'

const regx = /\s\Sthen\.\(function\(\){\n\s*var defaultConfig = {\s\S}$/

console.log(text.match(regx))
