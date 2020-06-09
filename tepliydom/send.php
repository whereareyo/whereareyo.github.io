<?php

/* https://api.telegram.org/bot833000075:AAGT49MJQvXP1-g..,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$goods = $_POST['goods'];
$total = $_POST['total'];

$token = "996059198:AAHQ76x_BSMph-bo3ivPJGOeKs0reBhgx6Y";
$chat_id = "-415351271";

$arr = array(
'Имя:' => $name,
'Телефон:' => $phone,
'Почта:' => $email,
'Товары:' => $goods,
'Итоговая цена:' => $total,
);

foreach($arr as $key => $value) {
$txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
header('Location: products.html');
} else {
echo "Error";
}
?>