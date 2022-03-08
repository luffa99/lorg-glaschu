<?php
/* Credits: https://www.celticproductions.net/articles/10/email/php-email-obfuscator.html */
function munge($address) {
    $address = strtolower($address);
    $coded = "";
    $unmixedkey = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.@";
    $inprogresskey = $unmixedkey;
    $mixedkey="";
    $unshuffled = strlen($unmixedkey);

    for ($i = 0; $i <= strlen($unmixedkey); $i++) {
        $ranpos = rand(0,$unshuffled-1);
        $nextchar = $inprogresskey[$ranpos];
        $mixedkey .= $nextchar;
        $before = substr($inprogresskey,0,$ranpos);
        $after = substr($inprogresskey,$ranpos+1,$unshuffled-($ranpos+1));
        $inprogresskey = $before.''.$after;
        $unshuffled -= 1;
    }
    $cipher = $mixedkey;

    $shift = strlen($address);

    $txt = "<script type=\"text/javascript\" language=\"javascript\">\n" .
    "<!-"."-\n" .
    "// Email obfuscator script 2.1 by Tim Williams, University of Arizona\n".
    "// Random encryption key feature by Andrew Moulden, Site Engineering Ltd\n".
    "// PHP version coded by Ross Killen, Celtic Productions Ltd\n".
    "// This code is freeware provided these six comment lines remain intact\n".
    "// A wizard to generate this code is at http://www.jottings.com/obfuscator/\n".
    "// The PHP code may be obtained from http://www.celticproductions.net/\n\n";

    for ($j=0; $j<strlen($address); $j++) {
        if (strpos($cipher,$address[$j]) == -1 ) {
            $chr = $address[$j];
            $coded .= $address[$j];
        } else {
            $chr = (strpos($cipher,$address[$j]) + $shift) % strlen($cipher);
            $coded .= $cipher[$chr];
        }
    }

    $txt .= "\ncoded = \"" . $coded . "\"\n" .
    " key = \"".$cipher."\"\n".
    " shift=coded.length\n".
    " link=\"\"\n".
    " for (i=0; i<coded.length; i++) {\n" .
    " if (key.indexOf(coded.charAt(i))==-1) {\n" .
    " ltr = coded.charAt(i)\n" .
    " link += (ltr)\n" .
    " }\n" .
    " else { \n".
    " ltr = (key.indexOf(coded.charAt(i))-
    shift+key.length) % key.length\n".
    " link += (key.charAt(ltr))\n".
    " }\n".
    " }\n".
    "document.write(\"<a class='underline' href='mailto:\"+link+\"'>\"+link+\"</a>\")\n" .
    "\n".
    "//-"."->\n" .
    "<" . "/script><noscript>N/A" .
    "<"."/noscript>";
    return $txt;
}
?>
<p>Post-d: 
<?php echo munge("lorg.glaschu@gmail.com");?>
</p>

<p>
Meadhanan sòisealta: 
<br />
<a href="https://www.facebook.com/LorgGlaschu" class="fa fa-facebook" target="_blank"></a> @LorgGlaschu
<br />
<a href="https://www.instagram.com/lorg_glaschu/" class="fa fa-instagram" target="_blank"></a> @lorg_glaschu
</p>
<p>Foirm freagairt: 
<br />
<a href="https://forms.gle/zu9MRNEG8Qjc7Rhh9" class="fa fa-comments-o" target="_blank"  style="
    background-color: #00a1ff;"></a>
 
<p>
Bidh e math a chluinntinn bhuaibh!
</p>