var body = JSON.parse($response.body);
var data = body['data'];
data['astrict'] = 0;
data['viptype'] = 1;
data['cutofftime'] = 1995266580;
data['viplist'] = "[{\"astrict\":0,\"cutofftime\":1995266580,\"viptype\":1}]";
data['pushswitch'] = 0;
data['residuetime'] = 17227000;

$done({body: JSON.stringify(body)});

  