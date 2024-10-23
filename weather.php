<?php
header('Content-Type: application/json; charset=utf-8');

if (isset($_GET['city'])) {
    $api_key = 'e9091c7b53e643ea41bffc394402b920';
    $city = $_GET['city'];

    $url = "http://api.openweathermap.org/data/2.5/weather?q={$city}&appid={$api_key}";

    $response = file_get_contents($url);
    $data = json_decode($response, true);

    if ($data['cod'] == 200) {
        $city = $data['name'];
        $country = $data['sys']['country'];
        $temp = $data['main']['temp'] - 273.15;
        $icon = $data['weather'][0]['icon'];
        $weather = $data['weather'][0]['main'];

        echo json_encode([
            'city' => $city,
            'country' => $country,
            'temp' => round($temp),
            'icon' => $icon,
            'weather' => $weather
        ], JSON_UNESCAPED_UNICODE);  // Отключаем экранирование символов Unicode
    } else {
        echo json_encode(['error' => 'Город не найден'], JSON_UNESCAPED_UNICODE);
    }
} else {
    echo json_encode(['error' => 'Не указано название города'], JSON_UNESCAPED_UNICODE);
}
