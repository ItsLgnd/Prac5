// Task 1
function task1(){
    let name =prompt('Enter a name', '');
    let profession = prompt('Enter your profession','');
    let phone = prompt('Enter a phone number','');
    document.write('<table>');
    for (let i = 0; i<12;i++){
        document.write('<tr>');
        for (let i = 0; i<3;i++) {
            document.write('<td>');
            document.write('<TABLE width="100%" border="1" align="CENTER">');
            document.write('<TR><TD align="CENTER">');
            document.write(' <TABLE width="100%" border="0">');
            document.write(' <TR>');
            document.write(' <TD align="CENTER" valign="CENTER">');
            document.write(' <IMG src="img/visit_card.png">');
            document.write(' </TD>');
            document.write(' <TD align="CENTER">');
            document.write(' <B>'+name+'</B><BR>');
            document.write(' <I>'+profession+'</I><BR>');
            document.write(' <FONT color="blue">'+phone+'</FONT>');
            document.write(' </TD>');
            document.write(' </TR>');
            document.write(' </TABLE>');
            document.write('</TD></TR>');
            document.write('</TABLE>');
            document.write('</td>');
        }
        document.write('</tr>');
    }
    document.write('</table>');

}

// Task 2
function autor1(){
    alert('Дивуєшся дорогоцінності мови нашої: в ній що не звук, то подарунок, все крупно, зернисто, як самі перла.');
}
function autor2(){
    alert('Українці — стародавній народ, а мова "їхня мова багатша і всеосяжніша, ніж персидська, китайська, монгольська і всілякі інші.');
}
function autor3(){
    alert('Раби — це нація, котра не має Слова. Тому й не зможе захистить себе');
}
function autor4(){
    alert('Відчуваю й усвідомлюю, яка це красива й легка українська мова.');
}
function autor5(){
    alert('Для всіх ти мертва і смішна, Для всіх ти бідна і нещасна, Моя Україно пре-красна, Пісень і волі сторона.');
}

// Task 3
function task3(){
    const e = 2.718281828459045;
    const pi = 3.141592653589793;
    const LgE = 0.4342944819032518;
    const Log2E = 1.4426950408889634;
    const Ln10 = 2.302585092994046;
    const Ln2 = 0.6931471805599453;
    const sqrt2 = 1.4142135623730951;
    const sqrt1_2 = 0.7071067811865476;


}
