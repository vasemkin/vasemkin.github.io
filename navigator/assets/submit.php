<?
$to = 'Почта';
function request($name) {
    if (isset($_REQUEST[$name])) {
        return $_POST[$name];
    }
    else {
        return false;
    }
}
if (!request('contact__fname')) {
    echo 'Введите имя!';
    exit;
}
if (!request('contact__sname')) {
    echo 'Введите фамилию!';
    exit;
}
if (!request('contact__mname')) {
    echo 'Введите отчество!';
    exit;
}
if (!request('contact__phone')) {
    echo 'Введите телефон!';
    exit;
}
if (!request('contact__email')) {
    echo 'Введите почту!';
    exit;
}
$message = 'Новая завка!' . "\r\n" 
. 'Имя: ' . request('contact__fname') . "\r\n" 
. 'Фамилия: ' . request('contact__sname') . "\r\n" 
. 'Отчество: ' . request('contact__mname') . "\r\n" 
.'Телефон: ' . request('contact__phone') . "\r\n" 
. 'Почта: ' . request('contact__email');
mail($to, 'Новая заявка', $message);