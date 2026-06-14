<?php

return [

    /*
    |--------------------------------------------------------------------------
    | E-mails commandes boutique
    |--------------------------------------------------------------------------
    |
    | Adresse professionnelle utilisée comme expéditeur des notifications
    | envoyées aux clients lors du traitement de leurs commandes.
    |
    */

    'mail_from' => [
        'address' => env('ORDER_MAIL_FROM_ADDRESS', 'infos@mediasoftci.net'),
        'name' => env('ORDER_MAIL_FROM_NAME', 'Mediasoft CI'),
    ],

];
