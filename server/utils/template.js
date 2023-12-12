function htmlContent(message) {
    return `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="telephone=no" name="format-detection">
    <title></title>
    <!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]-->
    <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
    <!--[if gte mso 9]>
<xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG></o:AllowPNG>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
</xml>
<![endif]-->
    <!--[if !mso]><!-- -->
    <link href="https://fonts.googleapis.com/css2?family=Changa:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet">
    <!--<![endif]-->
</head>

<body>
<td class="esd-stripe" align="center" bgcolor="#1b142d" style="background-color: #1b142d;">
<table bgcolor="transparent" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600" style="background-color: transparent;">
    <tbody>
        <tr>
            <td class="esd-structure es-p20t es-p20r es-p20l" align="left" bgcolor="#C1272C" style="background-color: #c1272c;">
                <table cellpadding="0" cellspacing="0" width="100%">
                    <tbody>
                        <tr>
                            <td width="560" class="esd-container-frame" align="left">
                                <table cellpadding="0" cellspacing="0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td align="center" class="esd-block-image" style="font-size:0"><a target="_blank" href="https://viewstripo.email"><img src="https://tlr.stripocdn.email/content/guids/CABINET_5869a4dd1f7397413f5dea5ade765cb7/images/53671575536479631.png" alt style="display: block;" width="144"></a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr>
            <td class="esd-structure" align="left">
                <table cellpadding="0" cellspacing="0" width="100%">
                    <tbody>
                        <tr>
                            <td width="600" class="esd-container-frame" align="center" valign="top">
                                <table cellpadding="0" cellspacing="0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td align="center" class="esd-block-image" style="font-size:0"><a target="_blank"><img class="adapt-img" src="https://tlr.stripocdn.email/content/guids/CABINET_5869a4dd1f7397413f5dea5ade765cb7/images/31421575535705576.png" alt style="display: block;" width="600"></a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr>
            <td class="esd-structure es-p20t es-p30b es-p20r es-p20l" align="left" bgcolor="#ffffff" style="background-color: #ffffff;">
                <table cellpadding="0" cellspacing="0" width="100%">
                    <tbody>
                        <tr>
                            <td width="560" align="left" class="esd-container-frame es-m-p20b">
                                <table cellpadding="0" cellspacing="0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td align="center" class="esd-block-text es-p5b">
                                                <h1 style="color: #00413f;">Merry Christmas</h1>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="center" class="esd-block-text es-p5b">
                                                <h2 style="color: #00413f;">${message}</h2>
                                            </td>
                                        </tr>
                                        <tr>
                                            <!-- <td align="center" class="esd-block-text es-p10t es-p10b es-p5r es-p5l">
                                                <p>May your Christmas be graced with peace, joy, and blessings</p>
                                            </td> -->
                                        </tr>
                                        <tr>
                                            
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        
    </tbody>
</table>
</td>
</body>

</html>`
  }
  
  module.exports = htmlContent