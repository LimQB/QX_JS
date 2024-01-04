var body=$response.body;
body = body.replace(/.+/g,'<response> 
    <category>service</category> 
    <action>used</action> 
    <code>0</code> 
    <message>SUCCESS</message> 
    <datas> 
        <data type="field" name="amount">100</data>
        <data type="field" name="used">3</data>
        <data type="field" name="limitnotify">1</data>
        <data type="field" name="unlimiturl">https://sunlogin.oray.com/client/remoteapplys/</data>
        <data type="field" name="servicename">VIP</data>
        <data type="field" name="sysserviceid">310003</data>
        <data type="field" name="serviceexpiredate">2034-03-02</data>
        <data type="field" name="isexpired">1</data>
        <data type="field" name="expiredays">730</data>
        <data type="field" name="expirenotify">1</data>
        <data type="field" name="isdeadline">1</data>
        <data type="field" name="deadline">2034-03-02</data>
        <data type="field" name="disabledate">2034-03-02</data>
        <data type="field" name="enableremote">1</data>
        <data type="field" name="renewurl">1</data>
        <data type="field" name="freelimit">730</data>
        <data type="field" name="skin">s0</data>
        <data type="field" name="isgameservice">1</data>
        <data type="field" name="image">https://cdn.orayimg.com/sunlogin/slapi/img/service/sunloginx/0.png</data>
        <data type="field" name="tag">1</data>
        <data type="field" name="batch" />
        <data type="field" name="filetransfer" />
        <data type="field" name="message" />
        <data type="field" name="monitor" />
        <data type="field" name="customize" />
        <data type="field" name="serviceexpiredate_timestamp">2024892029</data> 
    </datas> 
</response>');
$done(body);