<?php


namespace FoF\OAuth\Providers;


use FoF\OAuth\Provider;

class Twitter extends Provider
{
    public function name(): string
    {
        return 'twitter';
    }

    public function link(): string
    {
        return 'https://developer.twitter.com/en/apps';
    }

    public function fields(): array
    {
        return [
            'api_key' => 'required',
            'api_secret' => 'required',
        ];
    }
}
