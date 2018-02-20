<?php

    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $street = $_POST['street'];
    $home = $_POST['home'];
    $part = $_POST['part'];
    $appartment = $_POST['appartment'];
    $floor = $_POST['floor'];
    $payment = $_POST['payment'];
    $comment = $_POST['comment'];


    $callback = $_POST['callback']; // 1 или null
    $callback = isset($callback) ? 'НЕТ' : 'ДА';

    $mail_message = '
    <html>
    <head>
        <title>Заявка</title>
    </head>
    <body>
        <h2>Заказ</h2>
        <ul>
            <li>Имя:' . $name . '</li>
            <li>Телефон: ' . $phone . '</li>
            <li>Улица: ' . $street . '</li>
            <li>Дом: ' . $home . '</li>
            <li>Корус: ' . $part . '</li>
            <li>Квартира: ' . $appartment . '</li>
            <li>Этаж: ' . $floor . '</li>
            <li>Способ оплаты: ' . $payment . '</li>
            <li>Комментарий к заказу: ' . $comment . '</li>
            <li>Нужно ли перезванивать клиенту: ' . $callback . '</li>
        </ul>
    </body>
    </html>';

    $headers = "From: Администратор сайта <info@yarkoyarko.ru>\r\n".
                "MIME-Version: 1.0" . "\r\n" .
                "Content-type: text/html; charset=UTF-8" . "\r\n";

    $mail = mail('info@yarkoyarko.ru', 'Заказ', $mail_message, $headers);

    $data = [];

    if ($mail) {
        $data['status'] = "OK";
        $data['mes'] = "Письмо успешно отправлено";
    }else{
        $data['status'] = "NO";
        $data['mes'] = "На сервере произошла ошибка";
    }

    echo json_encode($data);

?>